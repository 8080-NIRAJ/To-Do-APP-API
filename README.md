# To-Do List API

This is a simple To-Do List API built using Node.js, Express.js, and Sequelize. Users can sign up, log in, and perform CRUD (Create, Read, Update, Delete) operations on their tasks. Each task has a unique ID, a description, a status (completed or not), and a due date.

## Features

- User Authentication: Sign up and log in functionality to authenticate users.
- Task Management: Create, read, update, and delete tasks.
- Task Ownership: Each task is associated with a user through a foreign key.
## API Endpoints

- **POST /signup**: Sign up a new user.
- **POST /login**: Log in an existing user.
- **POST /users/:userId/tasks**: Create a new task for a specific user.
- **GET /users/:userId/tasks**: Get all tasks for a specific user.
- **PUT /tasks/:id**: Update a task.
- **DELETE /tasks/:id**: Delete a task.


todo-list-api/
│
├── controllers/
│ ├── userController.js
│ └── taskController.js
│
├── models/
│ ├── user.js
│ ├── task.js
│ └── database.js
│
├── server.js
│
└── package.json
