# TODO - ChainTech

This is a simple To-Do List application implemented in Node.js with Express, MongoDB for persistence.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- MongoDB (and a database set up, you can use MongoDB Atlas or a local instance)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-list-app.git

2. Install dependencies:
   ```bash
   npm install
   
3. Update the MongoDB connection string in config.js

## Start Sever
Use following command
```bash
nodemon
```

### Todo - Schema
<pre>
<b>title</b>       - Title of task                                                                          // Required
<b>description</b> - Description about Task                                                                 // Required
<b>completed</b>   - Task is comeleted or not - true/false  - default = false 
<b>category</b>    - Category of Task - Work , Personal , Collage , Health , Finance , Other.               // Required
<b>due_date</b>    - Due Date of Task                                                                       // Required
</pre> 
   
## APIs

* Create - create a task
  ```bash
  http://localhost:5000/api/v1/todos/new
  ```

* List - Get all tasks
  ```bash
  http://localhost:5000/api/v1/todos/all
  ```

* Categorize - Get tasks category wise
  ```bash
  http://localhost:5000/api/v1/todos/category
  ```

* Mark Task as Complete
  ```bash
  http://localhost:5000/api/v1/todos/complete/:id
  ```
  
* Update - update a Task
  ```bash
  http://localhost:5000/api/v1/todos/:id
  ```

* Delete - delete a Task
  ```bash
  http://localhost:5000/api/v1/todos/:id
  ```

## Deploy on Vercel

### [Todo - ChainTech ](https://todo-chain-tech.vercel.app/)
