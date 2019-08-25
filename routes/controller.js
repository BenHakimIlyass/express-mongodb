import todos from "../db/db";

export const postTodo = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (!req.body.title) {
    return res.status(400).send({
      success: "false",
      message: "title is required"
    });
  } else if (!req.body.description) {
    return res.status(400).send({
      success: "false",
      message: "description is required"
    });
  }
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    description: req.body.description
  };
  todos.push(todo);
  return res.status(201).send({
    success: "true",
    message: "todo added successfully",
    todos
  });
};

export const getTodo = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const id = parseInt(req.params.id, 10);
  todos.map(todo => {
    if (todo.id === id) {
      return res.status(200).send({
        success: "true",
        message: "todo retrieved successfully",
        todo
      });
    }
  });
  return res.status(404).send({
    success: "false",
    message: "todo does not exist"
  });
};

export const deleteTodo = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const id = parseInt(req.params.id, 10);
  todos.map((todo, i) => {
    if (todo.id === id) {
      todos.splice(i, 1);
      return res.status(200).send({
        success: "true",
        message: "todo deleted successfully"
      });
    }
  });
  return res.status(404).send({
    success: "false",
    message: "todo does not exist"
  });
};

export const updateTodo = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const id = parseInt(req.params.id, 10);
  let todoFound;
  let itemIndex;
  todos.map((todo, i) => {
    if (todo.id === id) {
      todoFound = todo;
      itemIndex = i;
    }
  });

  if (!todoFound) {
    return res.status(404).send({
      success: "false",
      message: "todo not found"
    });
  }
  if (!req.body.title) {
    return res.status(400).send({
      success: "false",
      message: "title daroooori is required"
    });
  } else if (!req.body.description) {
    return res.status(400).send({
      success: "false",
      message: "description is required"
    });
  }
  const newValue = {
    id: todoFound.id,
    title: req.body.title || todoFound.title,
    description: req.body.description || todoFound.description
  };
  todos.splice(itemIndex, 1, newValue);
  return res.status(201).send({
    success: "true",
    message: "todo added successfully",
    newValue
  });
};
