// Counter Actions
export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });
export const reset = () => ({ type: 'RESET' });

// Notes Actions
export const addNote = (note) => ({ type: 'ADD_NOTE', payload: note });
export const deleteNote = (index) => ({ type: 'DELETE_NOTE', payload: index });