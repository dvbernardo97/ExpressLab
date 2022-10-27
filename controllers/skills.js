// controllers/todos.js
const Todo = require('../models/skill');

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo
};

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
  Todo.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/skills');
}

function newTodo(req, res) {
  res.render('todos/new');
}

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll()
  });
}

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
  });
}

