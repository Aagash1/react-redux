import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
