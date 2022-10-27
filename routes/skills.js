var express = require('express');
var router = express.Router();

 // Require the controller that exports To-Do CRUD functions
 var todosCtrl = require('../controllers/skills');

 // All actual paths begin with "/todos"

 // GET /todos
 router.get('/', todosCtrl.index);
 router.get('/new', todosCtrl.new);
 router.get('/:id', todosCtrl.show);
 router.post('/', todosCtrl.create);
 router.delete('/:id', todosCtrl.delete);

module.exports = router;
