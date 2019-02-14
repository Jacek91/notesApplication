import axios from './axios-api';

export function getAll() {
    return new Promise((resolve, reject) => {
        axios
            .get('/notes')
            .then(res => res.data)
            .then(notes => resolve(notes))
            .catch(err => console.log(err));
    });
}

export function add(title) {
    return new Promise((resolve, reject) => {
        axios
            .post('/notes', {
                title,
                lastModified: Date.now()
            })
            .then(res => res.data)
            .then(notes => resolve(notes))
            .catch(err => console.log(err));
    });
}

export function remove(noteId) {
    return new Promise((resolve, reject) => {
        axios
            .delete(`/notes/${noteId}`)
            .then(res => res.data)
            .then(notes => resolve(notes))
            .catch(err => console.log(err));
    });
}

export function save(noteId, noteContent) {
    return new Promise((resolve, reject) => {
        axios
            .patch(`/notes/${noteId}`, {
                body: noteContent,
                lastModified: Date.now()
            })
            .then(res => res.data)
            .then(notes => resolve(notes))
            .catch(err => console.log(err));
    });
}