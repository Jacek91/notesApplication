import DOM from '../../dom';
import {
    format
} from 'date-fns';
import {
    normalizeText
} from '../../utilities';
import * as searchBox from './search-box';
import * as addBox from './add-box';

const generateNoteHTML = (note, activeNoteId) => {
    return `<a href="/editor/${
      note.id
   }" class="list-group-item list-group-item-action d-flex justify-content-between lh-condensed ${
      note.id === activeNoteId ? 'active' : ''
   }">
      <div>
         <h6 class="my-0">${note.title}</h6>
         <small class="text-muted">${format(note.lastModified, 'DD/MM/YYYY HH:mm:ss')}</small>
      </div>
   </a>`;
};

const generateNotesList = (notes, activeNoteId) => {
    const html = notes
        .filter(note =>
            normalizeText(note.title).includes(normalizeText(searchBox.getSearchPhrase()))
        )
        .map(note => generateNoteHTML(note, activeNoteId))
        .join('');

    DOM().notesListEl.innerHTML = html;
};

const init = (notes, activeNoteId) => {
    generateNotesList(notes, activeNoteId);

    searchBox.init(() => generateNotesList(notes, activeNoteId));
    addBox.init(() => generateNotesList(notes, activeNoteId));
};

export default init;