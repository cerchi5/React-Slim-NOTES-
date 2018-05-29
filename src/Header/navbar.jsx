import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: '1',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        textDecoration: "none",
        color: 'white'
    },
    fullSize: {
        padding: 0,
        margin: 0,
        height: '100%'
    },
};

function Navbar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" href="/index">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        {/* Title */}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);