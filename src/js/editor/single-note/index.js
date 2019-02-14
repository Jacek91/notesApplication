import DOM from '../dom';
import * as notesActions from '../../notes-actions';
import * as events from './single-note-events';

notesActions.getAll().then(notes => {
    const firstNote = notes[0];
    const noteId = firstNote.id;

    DOM.noteTitleEl.textContent = firstNote.title;
    DOM.noteContentEl.textContent = firstNote.body;

    events.noteShowEditorHandler();
    events.noteShowPreviewHandler();
    events.noteRemoveHandler(noteId);

    events.noteSaveHandler(noteId);
});