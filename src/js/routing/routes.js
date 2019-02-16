import * as view from './view';
import {
    DOMInit
} from '../dom';

import editorInit from '../editor/index';
import introView from '../views/intro.html';
import editorView from '../views/editor.html';

DOMInit();

export const index = () => {
    view.load(introView).then(() => {
        DOMInit();
    });
};

export const editor = context => {
    const noteId = parseInt(context.params.id, 10);

    view.load(editorView).then(() => {
        DOMInit();
        editorInit(noteId);
    });
};

export const notFound = () => {};