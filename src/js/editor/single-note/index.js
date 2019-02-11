import * as notesActions from '../../notes-actions';
import * as events from './single-note-events';

const noteTitleEl = document.querySelector('#note-title');
const noteContentForm = document.querySelector('#note-content-form');
const noteContentEl = document.querySelector('#note-content');

const noteEditorBtn = document.querySelector('#note-editor-btn');
const notePreviewBtn = document.querySelector('#note-preview-btn');
const noteRemoveBtn = document.querySelector('#note-remove-btn');

const notes = notesActions.getAll();
const firstNote = notes[0];
const noteId = firstNote.id;

noteTitleEl.textContent = firstNote.title;
noteContentEl.textContent = firstNote.body;

// Events
events.noteShowEditorHandler(noteEditorBtn, noteContentEl, noteContentPreviewEl);
events.noteShowPreviewHandler(notePreviewBtn, noteContentEl, noteContentPreviewEl);
events.noteRemoveHandler(noteRemoveBtn, noteId);

events.noteSaveHandler(noteContentForm, noteId, noteContentEl);