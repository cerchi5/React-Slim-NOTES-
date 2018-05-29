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
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

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
                />
                <TextField
                    label="Username"
                    className={classes.textField}
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                />
                <Button style={styles.button} fullWidth color="secondary" variant="raised">
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