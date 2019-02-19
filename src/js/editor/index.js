import notesSidebarInit from './notes-sidebar/index';
import singleNoteInit from './single-note/index';
import * as notesActions from '../notes-actions';

const init = noteId => {
    notesActions.getAll().then(notes => {
        notesSidebarInit(notes, noteId);

        let noteToShow;

        if (!noteId) {
            noteToShow = notes[0];
        } else {
            noteToShow = notes.find(note => note.id === noteId);
        }

        singleNoteInit(noteToShow);
    });
};

export default init;