import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addNote, deleteNote } from '../redux/actions';
import { addNote, deleteNote } from '../slices/notesSlice';

const Notes = () => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  const [note, setNote] = useState('');

  const handleAddNote = () => {
    if (note.trim()) {
      dispatch(addNote(note));
      setNote('');
    }
  };

  return (
    <div>
      <h2>Notes</h2>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter a note"
      />
      <button onClick={handleAddNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}{' '}
            <button onClick={() => dispatch(deleteNote(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
