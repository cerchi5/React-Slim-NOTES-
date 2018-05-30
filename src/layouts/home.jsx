import React from 'react';
import Notes from '../components/notes';
import AddNoteForm from '../components/addNoteForm';
import Navbar from '../Header/navbar'

const Home = (props) => {

    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: '3rem' }}>
                <Notes {...props} />
            </div>
        </div>
    )
}

export default Home;