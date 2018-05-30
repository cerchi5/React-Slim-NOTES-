import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import onClickOutside from "react-onclickoutside";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid } from '@material-ui/core';

const styles = {
    card: {
        maxWidth: 500,
        marginTop: '3rem',
        marginBottom: '3rem',
        margin: 'auto',
        textAlign: 'left',
    },
    cardFooter: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    title: {
        fontWeight: 'bold',
    },
    pos: {
        marginBottom: 12,
    },
    paper: {
        textAlign: 'right',
    },
};

class AddNoteForm extends Component {

    constructor() {
        super();

        this.state = {
            title: '',
            content: '',
            priority: false,
            show: false
        }
    }

    render() {

        return (
            <Card style={styles.card} onClick={this.onClick}>

                <CardContent>

                    {this.state.show ?
                        <Grid container>
                            <Grid item xs={11}>
                                <Input
                                    value={this.state.title}
                                    onChange={(event) => this.setState({ title: event.target.value })}
                                    disableUnderline
                                    placeholder="Title"
                                    style={styles.title}
                                /></Grid>
                            <Grid item xs={1}>
                                <FormControlLabel style={{ marginTop: '-0.5rem', marginLeft: 0 }}
                                    control={
                                        <Checkbox
                                            checked={this.state.priority}
                                            onChange={event => this.setState({ priority: event.target.checked })}
                                            color="primary"
                                        />
                                    }
                                // label="Priority"
                                />
                            </Grid>
                        </Grid>
                        : null}

                    <Input
                        multiline
                        value={this.state.content}
                        onChange={(event) => this.setState({ content: event.target.value })}
                        fullWidth={true}
                        disableUnderline
                        placeholder="Take a note..."
                    />

                </CardContent>
                {this.state.show ?
                    <CardActions style={styles.cardFooter}>
                        {/* <Button
                            size="small"
                            onClick={this.addNote}
                            variant="raised"
                            color="primary"
                        >
                            Add Note
                        </Button> */}
                    </CardActions>
                    : null}
            </Card>
        )
    }

    addNote = (event) => {
        if (this.state.title !== '' ||
            this.state.content !== '') {
            this.props.addNote(this.state);
        }

        this.setState({ title: '', content: '' });

        setTimeout(() => {
            this.setState({ show: false })
        }, 1);
    }

    onClick = () => {
        this.setState({ show: true })
    }

    handleClickOutside = evt => {
        if (this.state.title !== '' ||
            this.state.content !== '') {

            this.props.addNote(this.state);
            this.setState({ title: '', content: '', priority: false, show: false })
        }

        this.setState({ title: '', content: '', priority: false, show: false });
    };

}

export default onClickOutside(AddNoteForm);