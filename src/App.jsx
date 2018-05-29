import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './layouts/home';
import Index from './layouts';


const Auth = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 100);
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
      props.match.params.username
        ? <Component {...props} username={props.match.params.username} />
        : <Redirect to='/index' />
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
          <Route path="/register" component={Register} />
          <PrivateRoute path="/home/:username" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
