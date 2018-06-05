import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Button } from '@material-ui/core';

const styles = {
    button: {
        marginTop: '1rem',
        height: '5rem',
    },
};

class RegisterForm extends Component {
    constructor() {
        super();
        
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Typography variant="display1">
                    Register
                </Typography>
                <TextField
                    label="Email"
                    className={classes.textField}
                    margin="normal"
                    fullWidth
                    onChange={event => this.setState({ email: event.target.value })}
                    value={this.state.email}
                />
                <TextField
                    label="Username"
                    className={classes.textField}
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                    onChange={event => this.setState({ username: event.target.value })}
                />
                <TextField
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                    onChange={event => this.setState({ password: event.target.value })}
                />
                <Button
                style={styles.button}
                fullWidth
                color="secondary"
                variant="raised"
                href={`/register/${this.state.username}/${this.state.password}/${this.state.email}`}>
                    Sign up
                </Button>
            </div>
        );
    }
}

RegisterForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterForm);