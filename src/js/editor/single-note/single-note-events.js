import DOM from '../dom';
import * as notesActions from '../../notes-actions';
import showdown from 'showdown';

const mdConverter = new showdown.Converter();

function showEditor() {
    DOM.noteContentEl.classList.remove('d-none');
    DOM.noteContentPreviewEl.classList.add('d-none');
}

export function noteShowEditorHandler() {
    DOM.noteEditorBtn.addEventListener('click', function () {
        showEditor();
    });
}

function showPreview() {
    DOM.noteContentEl.classList.add('d-none');
    DOM.noteContentPreviewEl.classList.remove('d-none');
}

export function noteShowPreviewHandler() {
    DOM.notePreviewBtn.addEventListener('click', function () {
        const text = DOM.noteContentEl.value;

        if (text) {
            const html = mdConverter.makeHtml(text);

            showPreview();
            DOM.noteContentPreviewEl.innerHTML = html;
        }
    });
}

export function noteRemoveHandler(noteId) {
    DOM.noteRemoveBtn.addEventListener('click', function () {
        notesActions.remove(noteId);
    });
}

export function noteSaveHandler(noteId) {
    DOM.noteContentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const noteContent = DOM.noteContentEl.value;
        notesActions.save(noteId, noteContent);
    });
}