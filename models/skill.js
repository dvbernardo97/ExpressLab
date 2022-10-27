const todos = [
    { id: 125223, todo: 'HTML', done: true },
    { id: 127904, todo: 'CSS', done: true },
    { id: 139608, todo: 'JavaScript', done: false }
];

module.exports = {
    getAll,
    getOne

};

function getAll() {
    return todos;
}



function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return todos.find(todo => todo.id === id);
}
