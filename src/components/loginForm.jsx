import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Button } from '@material-ui/core';

const styles = {
    button: {
        marginTop: '5.5rem',
        height: '5rem',
    },
};

class LoginForm extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Typography variant="display1">
                    Login
                </Typography>
                <TextField
                    label="Username"
                    className={classes.textField}
                    margin="normal"
                    fullWidth
                    value={this.state.username}
                    onChange={event => this.setState({ username: event.target.value })}
                    required
                />
                <TextField
                    label="Password"
                    className={classes.textField}
                    type="password"
                    margin="normal"
                    fullWidth
                    value={this.state.password}
                    onChange={event => this.setState({ password: event.target.value })}
                    required={true}
                />
                <Button style={styles.button}
                    fullWidth
                    color="primary"
                    variant="raised"
                    href={`/home/${this.state.username}/${this.state.password}`}
                >
                    Press to login
                </Button>
            </div>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);