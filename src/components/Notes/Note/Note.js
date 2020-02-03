import React from 'react';

import './Note.css';

const note = (props) => {
    return (
         <div className="Note">
          <p><strong>
                Note Id: {props.id} <br/> Message: {props.message}
          </strong></p>
          <button 
             className='NoteButton'
             onClick={() => props.deleteNote(props.id)}
          >
             DELETE
          </button>
         </div>
    );
};

export default note;