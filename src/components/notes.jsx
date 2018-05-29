import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Typography, Grid } from '@material-ui/core';
import Note from './note';

const styles = {
    container: {
        maxWidth: '1200px',
        marginLeft: '1rem',
        marginRight: '1rem'
    },
    bottomMargin: {
        marginBottom: '4rem'
    }
}

class Notes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: this.props.username
            },
            priorityNotes: [],
            noPriorityNotes: [],
        }
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <Grid container justify="center">
                    <Grid container style={styles.container} spacing={16}>
                        <Grid item xs={12}>
                            <Typography
                                variant="display1"
                                style={{ textAlign: 'left' }}>
                                Priority Notes
                            </Typography>
                        </Grid>
                        {this.state.priorityNotes.map((note, index) => {
                            return (
                                <Grid item xs={true} key={index}>
                                    <Note {...note} />
                                </Grid>
                            )
                        })}
                        <Grid item xs={12}>
                            <Typography
                                variant="display1"
                                style={{ textAlign: 'left' }}>
                                Notes without priority
                            </Typography>
                        </Grid>
                        {this.state.noPriorityNotes.map((note, index) => {
                            return (
                                <Grid item xs={true} key={index}>
                                    <Note {...note} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </div>
        )
    }

    componentWillMount() {

        fetch(`http://localhost:8000/api/${this.state.username}`)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    priorityNotes: data.priorityNotes,
                    noPriorityNotes: data.noPriorityNotes
                }, () => {
                    console.log(this.state);
                })
            })
    }

}

Notes.propTypes = {
    userName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default Notes;