let notesList = [{
        id: 1,
        title: 'Notatka 1',
        body: '# asdfgh',
        lastModified: '18/06/2018 14:00'
    },
    {
        id: 2,
        title: 'Notatka 2',
        body: '# asdfgh',
        lastModified: '18/06/2018 14:00'
    },
    {
        id: 3,
        title: 'Notatka 3',
        body: '# asdfgh',
        lastModified: '18/06/2018 14:00'
    },
    {
        id: 4,
        title: 'Notatka 4',
        body: '# asdfgh',
        lastModified: '18/06/2018 14:00'
    }
];

export function getAll() {
    return notesList;
}

export function add(title) {
    notesList.push({
        title,
        lastModified: '18/06/2018 14:00'
    });
}

export function remove(noteId) {
    notesList = notesList.filter(note => note.id !== noteId);
    console.log(`${noteId} - removed`);
}