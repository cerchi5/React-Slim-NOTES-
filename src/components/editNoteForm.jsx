import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const styles = {
    card: {
        // minWidth: 350,
        // maxHeight: 500
    },
    cardFooter: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontWeight: 'bold'
    },
    pos: {
        marginBottom: 12,
    },
    paper: {
        textAlign: 'right',
    },
};

class EditNoteForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...props
        }
    }

    render(props) {

        const { classes } = this.props;

        return (
            <Card className={classes.card}>

                <CardContent>

                    <Input
                        value={this.state.title}
                        onChange={(event) => this.setState({ title: event.target.value })}
                        disableUnderline
                        placeholder="Title"
                        className={classes.title}
                    />

                    <Input
                        multiline
                        value={this.state.content}
                        onChange={(event) => this.setState({ content: event.target.value })}
                        fullWidth={true}
                        disableUnderline
                        autoFocus={true}
                        placeholder="Content"
                    />

                </CardContent>
                <CardActions className={classes.cardFooter}>
                    <Button
                        size="small"
                        onClick={this.saveNote}
                    >
                    Save</Button>
                    <Button
                        size="small"
                        color="secondary"
                        onClick={this.deleteNote}
                    >
                        Delete</Button>
                </CardActions>
            </Card>
        )
    }

    saveNote = () => {
        this.props.saveNote(this.state);
    }

    deleteNote = () => {
        this.props.deleteNote(this.state);
    }

}

EditNoteForm.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default withStyles(styles)(EditNoteForm);