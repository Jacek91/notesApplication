import * as notesActions from '../../notes-actions';
import showdown from 'showdown';

const mdConverter = new showdown.Converter();

// Show editor
function showEditor(noteContentEl, noteContentPreviewEl) {
    noteContentEl.classList.remove('d-none');
    noteContentPreviewEl.classList.add('d-none');
}

export function noteShowEditorHandler(noteEditorBtn, noteContentEl, noteContentPreviewEl) {
    noteEditorBtn.addEventListener('click', function () {
        showEditor(noteContentEl, noteContentPreviewEl);
    });
}

// Show preview
function showPreview(noteContentEl, noteContentPreviewEl) {
    noteContentEl.classList.add('d-none');
    noteContentPreviewEl.classList.remove('d-none');
}

export function noteShowPreviewHandler(notePreviewBtn, noteContentEl, noteContentPreviewEl) {
    notePreviewBtn.addEventListener('click', function () {
        const text = noteContentEl.value;

        // Show preview only if MD content exists
        if (text) {
            const html = mdConverter.makeHtml(text);

            showPreview(noteContentEl, noteContentPreviewEl);
            noteContentPreviewEl.innerHTML = html;
        }
    });
}

// Remove
export function noteRemoveHandler(noteRemoveBtn, noteId) {
    noteRemoveBtn.addEventListener('click', function () {
        notesActions.remove(noteId);
    });
}

// Save
export function noteSaveHandler(noteContentForm, noteId, noteContentEl) {
    noteContentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const noteContent = noteContentEl.value;
        notesActions.save(noteId, noteContent);
    });
}