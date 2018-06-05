import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditNoteForm from './editNoteForm';
import Dialog from '@material-ui/core/Dialog';
import yellow from '@material-ui/core/colors/yellow';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    card: {
        minWidth: 275,
        textAlign: 'left',
        paddingBottom: '2rem',
        transition: 'all 0.2s',
        // backgroundColor: yellow[200],
        '&:hover': {
            cursor: 'default',
            boxShadow: '0px 3px 15px 0px rgba(0, 0, 0, 0.6);'
        },
    },
    cardContent: {
        maxHeight: 300,
        overflow: 'hidden'
    },
    title: {
        marginBottom: 16,
    },
    pos: {
        marginBottom: 12,
    },
});

class Note extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...props,

            open: false
        }
    }

    render(props) {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>

                <CardContent className={classes.cardContent} onClick={this.handleOpen}>
                    <Grid container>
                        <Grid item xs={11}>
                            <Typography className={classes.title} variant="title">
                                {this.state.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <FormControlLabel style={{ marginTop: '-0.5rem', marginLeft: 0 }}
                                control={
                                    <Checkbox
                                        checked={this.state.priority}
                                        onChange={event => this.setState({ priority: event.target.checked })}
                                        color="primary"
                                        name="checkbox"
                                    />
                                }
                            />
                        </Grid>
                    </Grid>
                    <Typography>
                        {this.state.content}
                    </Typography>
                </CardContent>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth={true}
                    maxWidth='sm'
                >

                    <EditNoteForm
                        handleClose={this.handleClose}
                        {...this.state}
                        saveNote={this.saveNote}
                        deleteNote={this.deleteNote}
                    />
                </Dialog>
            </Card>


        )
    }

    componentWillReceiveProps(props) {
        if (props.title !== this.state.title ||
            props.content !== this.state.content) {
            this.setState({ ...props });
        }
    }

    handleOpen = (event) => {
        if(event.target.name === 'checkbox'){
            this.props.updateNotePriority(this.state);
        } else {
            this.setState({ open: true })
        }
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    saveNote = (note) => {
        // TODO: Save the changed note
        this.setState({ ...note });

        this.handleClose();
    }

    deleteNote = (note) => {
        this.props.deleteNote(note);

        this.handleClose();
    }

}

Note.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Note);