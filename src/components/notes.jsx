import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Typography, Grid } from '@material-ui/core';
import Note from './note';
import AddNoteForm from '../components/addNoteForm';

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
            priorityNotes: [{
                id: 1,
                title: 'asdf',
                content: 'asdfasdf',
                priority: true
            }],
            noPriorityNotes: [{
                id: 3,
                title: 'Without',
                content: 'Prio',
                priority: false
            }],
        }
    }

    render() {
        return (
            <div>
                <AddNoteForm addNote={this.addNote}/>
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
                                    <Note {...note}
                                    updateNotePriority={this.updateNotePriority}
                                    deleteNote={this.deleteNote}/>
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
                                    <Note {...note}
                                    updateNotePriority={this.updateNotePriority}
                                    deleteNote={this.deleteNote}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </div>
        )
    }

    componentWillMount() {
        console.log(this.state.user.username);
        fetch(`http://localhost:8000/api/${this.state.user.username}`)
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

    addNote = (note) => {

        // TODO Post Request AddNote
        fetch(`http://localhost:8000/api/${this.state.user.username}/add/${note.title}/${note.content}/${note.priority}`,
        {
            method:"POST"
        });
        console.log(note);

        if(note.priority){
            let priorityNotes = this.state.priorityNotes;
            priorityNotes.unshift(note);
            this.setState({ priorityNotes })
        } else {
            let noPriorityNotes = this.state.noPriorityNotes;
            noPriorityNotes.unshift(note);
            this.setState({ noPriorityNotes })
        }
    }

    deleteNote = (note) => {

        // TODO: DELETE API
        fetch(`http://localhost:8000/api/${this.state.user.username}/delete/${note.id}`,
        {
            method:"POST"
        });
        console.log(note);

        if(note.priority){
            let priorityNotes = this.state.priorityNotes.filter(x => x.id !== note.id);

            this.setState({ priorityNotes })
        } else {
            let noPriorityNotes = this.state.noPriorityNotes.filter(x => x.id !== note.id)

            this.setState({ noPriorityNotes })
        }
    }

    updateNotePriority = (note) => {
        if(note.priority){
            let priorityNotes = this.state.priorityNotes.filter(noteToBeFound => noteToBeFound.id !== note.id);
            this.setState({ priorityNotes });

            let noPriorityNotes = this.state.noPriorityNotes;
            note.priority = false;
            noPriorityNotes.unshift(note);
            this.setState({ noPriorityNotes });

            // TODO REQUEST CHANGE PRIORITY
        } else {
            let noPriorityNotes = this.state.noPriorityNotes.filter(noteToBeFound => noteToBeFound.id !== note.id);
            this.setState({ noPriorityNotes });

            let priorityNotes = this.state.priorityNotes;
            note.priority = true;
            priorityNotes.unshift(note);
            this.setState({ priorityNotes });

            // TODO REQUEST CHANGE PRIORITY
        }
    }

}

export default Notes;