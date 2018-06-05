import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './layouts/home';
import Index from './layouts';


const Auth = {
  isUserRegistered(username, password) {
    //  TODO: CHECK ACCOUNT VALIDATION

    // fetch(`http://localhost:8000/api/login/${username}/${password}`)
    // .then(data => data.json()){

    // }
    return false;
  },
  register(username, password, email) {
    // TODO: REGISTER THE DUDE
    return true;
  },
  signOut(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 100);
  }
}

const Register = () => <div>Hello there</div>

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      Auth.isUserRegistered(props.match.params.username, props.match.params.password) === false
        // ? <Component {...props} path="/home/" username={props.match.params.username} />
        ? <Redirect to={`/home/${props.match.params.username}`} />
        : <Redirect to='/index' />
    )} />
  )
}

const SecondPrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      <Component {...props} username={props.match.params.username} />
    )} />
  )
}

const RegisterPrivateRoute = ({ ...rest }) => {
  return (
    <Route {...rest} render={props => (
      Auth.register(props.match.params.username, props.match.params.password,
        props.match.params.email) === true
        ? <Redirect to={`/home/${props.match.params.username}`} />
        : <Redirect to="/index" />
    )} />
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" strict exact component={Index} />
          <Route path="/index" component={Index} />
          <PrivateRoute path="/home/:username/:password" strict component={Home} />
          <SecondPrivateRoute path="/home/:username" strict component={Home} />
          <RegisterPrivateRoute path="/register/:username/:password/:email" strict />
        </div>
      </Router>
    );
  }
}

export default App;
