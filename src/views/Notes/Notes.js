import React, { useState } from 'react';

import Note from './Note/Note';
import './Notes.css';

const notes = (props) => {

    const [notes, setNotes] = useState([]);
    const [message, setMessage] = useState('')

    //Submit Handler: This method will add new note to notes array.
    const submitHandler = (e, message, setMessage) => {
        e.preventDefault();
        const newId = notes.length ? notes[notes.length - 1].id + 1 : 0;
        setNotes([...notes ,  { id: newId, message: message}])
        setMessage('');
    }

    //Delete Handler: This method will delete note.
    const deleteNoteHandler = (id, notes, setNotes) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    //This function will return the Note list. If notes length is > 0 else
    //Will show a text asking to add items
    const note = (
          notes.length !== 0 ?
           notes.map((eNote) => {
            return  <Note 
               key={eNote.id}
               message={eNote.message} 
               id={eNote.id} 
               deleteNote={(id) => deleteNoteHandler(id, notes, setNotes)}
             />
         }) :
         <p style={{color:'red'}}><strong>Starting adding items to list</strong></p>
      );
          

      return (
         <div>
             <form className='form' onSubmit={(e) => submitHandler(e, message, setMessage)}>
                 <input onChange={(e) => setMessage(e.target.value)} value={message}/>
                 <button className='button'>Submit</button>
             </form>
            {note}
         </div>
      );
};

export default notes;