import DOM from '../dom';
import * as notesActions from '../../notes-actions';

export function init(onChangeCallback) {
    DOM.addBoxForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const noteTitle = DOM.addBoxInput.value.trim();

        if (noteTitle) {
            notesActions.add(noteTitle).then(notes => {
                onChangeCallback();
            });
        }
    });
}