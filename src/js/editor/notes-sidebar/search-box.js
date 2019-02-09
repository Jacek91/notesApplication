const searchBoxInput = document.querySelector('#note-search-input');
let searchPhrase = '';

export function getSearchPhrase() {
   return searchPhrase;
}

export function init(onChangeCallback) {
   searchBoxInput.addEventListener('input', function () {
      searchPhrase = this.value;

      onChangeCallback();
   });
}