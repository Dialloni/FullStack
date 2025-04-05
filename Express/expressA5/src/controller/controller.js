let todos = [];
let currentId = 1;

// Middleware to validate todo data
function validateTodoData(req, res, next) {
  const { title, description, completed } = req.body;
  if (!title || !description || typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Title, description, and completed status are required' });
  }
  next();
}

// GET /todos: Retrieve a list of all todos
exports.getAllTodos = (req, res) => {
  res.json(todos);
};

// GET /todos/:id: Retrieve details of a specific todo by ID
exports.getTodoById = (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json(todo);
};

// POST /todos: Add a new todo to the list
exports.addTodo = [validateTodoData, (req, res) => {
  const { title, description, completed } = req.body;
  const newTodo = { id: currentId++, title, description, completed };
  todos.push(newTodo);
  res.status(201).json(newTodo);
}];

// PUT /todos/:id: Update details of a todo by ID
exports.updateTodo = [validateTodoData, (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  const { title, description, completed } = req.body;
  todo.title = title;
  todo.description = description;
  todo.completed = completed;
  res.json(todo);
}];

// DELETE /todos/:id: Delete a todo by ID
exports.deleteTodo = (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todos.splice(todoIndex, 1);
  res.status(204).send();
};