import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LoginForm from '../components/loginForm';
import RegisterForm from '../components/registerForm';
import { Paper } from '@material-ui/core';

const styles = {
    container: {
        maxWidth: '1200px',
        marginLeft: '1rem',
        marginRight: '1rem',
        marginTop: '10rem'
    },
    root: {
        height: '100vh',
    },
    paper: {
        padding: '1rem 2rem 1rem 2rem',
        '&:hover': {
            boxShadow: '30px 3px 15px 0px rgba(0, 0, 0, 0.6);'
        },
    }
}

class Index extends Component {

    render() {
        return (
            <div style={styles.root}>
                <Grid container justify="center">
                    <Grid container style={styles.container} spacing={40}>
                        <Grid item xs={12} md={6}>
                            <Paper style={styles.paper}>
                                <LoginForm />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper style={styles.paper}>
                                <RegisterForm />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Index;