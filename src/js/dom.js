let DOM = {};

export const DOMInit = () => {
    DOM = {
        container: document.querySelector('#view-container'),

        addBoxForm: document.querySelector('#note-add-form'),
        addBoxInput: document.querySelector('#note-add-input'),
        searchBoxInput: document.querySelector('#note-search-input'),
        notesListEl: document.querySelector('#notes-list'),

        noteTitleEl: document.querySelector('#note-title'),
        noteContentForm: document.querySelector('#note-content-form'),
        noteContentEl: document.querySelector('#note-content'),
        noteContentPreviewEl: document.querySelector('#note-content-preview'),

        noteEditorBtn: document.querySelector('#note-editor-btn'),
        notePreviewBtn: document.querySelector('#note-preview-btn'),
        noteRemoveBtn: document.querySelector('#note-remove-btn')
    };
};

const get = () => {
    return DOM;
};

export default get;