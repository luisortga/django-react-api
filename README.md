# Django React API

<p align="center">

<strong>A full-stack CRUD application built with Django REST Framework and React, featuring a versioned REST API, OpenAPI documentation and a modern Tailwind CSS frontend.</strong>

</p>

<p align="center">

<a href="https://github.com/luisortga/django-react-api">
  <img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="GitHub Repository">
</a>
<img src="https://img.shields.io/badge/Python-3.14+-3776AB?logo=python&logoColor=white" alt="Python">
<img src="https://img.shields.io/badge/Django-6.1.1-092E20?logo=django&logoColor=white" alt="Django">
<img src="https://img.shields.io/badge/DRF-3.18-A30000?logo=django&logoColor=white" alt="Django REST Framework">
<img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS">

</p>

<p align="center">

<a href="https://www.python.org/">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="58" alt="Python">
</a>
&nbsp;&nbsp;&nbsp;

<a href="https://www.djangoproject.com/">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" width="58" alt="Django">
</a>
&nbsp;&nbsp;&nbsp;

<a href="https://www.django-rest-framework.org/">
  <img src="https://cdn.simpleicons.org/django" width="58" alt="Django REST Framework">
</a>
&nbsp;&nbsp;&nbsp;

<a href="https://react.dev/">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="58" alt="React">
</a>
&nbsp;&nbsp;&nbsp;

<a href="https://vite.dev/">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="58" alt="Vite">
</a>
&nbsp;&nbsp;&nbsp;

<a href="https://tailwindcss.com/">
  <img src="https://cdn.simpleicons.org/tailwindcss" width="58" alt="Tailwind CSS">
</a>
&nbsp;&nbsp;&nbsp;

<a href="https://axios-http.com/">
  <img src="https://cdn.simpleicons.org/axios" width="58" alt="Axios">
</a>
&nbsp;&nbsp;&nbsp;

<a href="https://docs.astral.sh/uv/">
  <img src="https://cdn.simpleicons.org/uv" width="58" alt="uv">
</a>

</p>

---

## Overview

**Django React API** is a full-stack CRUD application that combines a Django REST Framework backend with a React frontend.

The backend exposes a versioned REST API for managing tasks, while the React application consumes the API through Axios and provides the user interface for creating, reading, updating and deleting tasks.

The project was created as a practical exercise to work with:

* Django
* Django REST Framework
* REST API architecture
* React
* Vite
* Axios
* React Router
* React Hook Form
* Tailwind CSS
* OpenAPI documentation
* CORS
* Python dependency management with `uv`

```text
                         Full-Stack Application
                                  │
                 ┌────────────────┴────────────────┐
                 │                                 │
                 ▼                                 ▼
          React Frontend                    Django Backend
                 │                                 │
                 ▼                                 ▼
              Axios                         Django REST Framework
                 │                                 │
                 └───────────────┬─────────────────┘
                                 │
                                 ▼
                              Task API
                                 │
                                 ▼
                              SQLite
```

---

## Architecture

The project follows a client-server architecture where the React frontend communicates with Django through a REST API.

```text
┌─────────────────────┐
│                     │
│    React Client     │
│                     │
│  React Router       │
│  React Hook Form    │
│  Tailwind CSS       │
│                     │
└──────────┬──────────┘
           │
           │ HTTP / JSON
           ▼
┌─────────────────────┐
│                     │
│   Django REST API   │
│                     │
│   ViewSet           │
│   Serializer        │
│   Model             │
│                     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│                     │
│       SQLite        │
│                     │
│      Task Data      │
│                     │
└─────────────────────┘
```

This separation allows the frontend and backend to evolve independently while communicating through a defined HTTP API.

---

## Technology Stack

| Technology                                                               | Purpose                                      |
| ------------------------------------------------------------------------ | -------------------------------------------- |
| [Python](https://www.python.org/)                                        | Backend programming language                 |
| [Django](https://www.djangoproject.com/)                                 | Backend web framework                        |
| [Django REST Framework](https://www.django-rest-framework.org/)          | REST API development                         |
| [React](https://react.dev/)                                              | Frontend UI library                          |
| [Vite](https://vite.dev/)                                                | Frontend development and build tool          |
| [Tailwind CSS](https://tailwindcss.com/)                                 | Utility-first frontend styling               |
| [Axios](https://axios-http.com/)                                         | HTTP client for API communication            |
| [React Router](https://reactrouter.com/)                                 | Frontend routing                             |
| [React Hook Form](https://react-hook-form.com/)                          | Form management                              |
| [React Hot Toast](https://react-hot-toast.com/)                          | User notifications                           |
| [drf-spectacular](https://drf-spectacular.readthedocs.io/)               | OpenAPI schema and Swagger documentation     |
| [django-cors-headers](https://github.com/adamchainz/django-cors-headers) | Cross-Origin Resource Sharing                |
| [uv](https://docs.astral.sh/uv/)                                         | Python environment and dependency management |
| SQLite                                                                   | Development database                         |
| Git / GitHub                                                             | Version control                              |

The current backend requires Python `3.14+` and Django `6.1.1+`, while the frontend uses React `19.2`, Vite `8.x` and Tailwind CSS `4.3`.

---

## Features

* Full CRUD task management
* Django REST Framework API
* API versioning with `/api/v1/`
* React single-page frontend
* React Router navigation
* Task creation
* Task editing
* Task deletion
* Task listing
* Axios API integration
* Form handling with React Hook Form
* Client-side form validation
* Toast notifications
* Tailwind CSS interface
* CORS support
* OpenAPI schema generation
* Swagger UI
* SQLite database
* Python dependency management with `uv`
* Vite development server

---

## CRUD Workflow

The application implements the complete CRUD lifecycle for tasks.

```text
                         Task CRUD
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
           Create         Read           Update
             │              │              │
             └──────────────┼──────────────┘
                            │
                            ▼
                          Delete
```

A task contains:

```text
Title
Description
Done
```

The Django model defines these fields as:

```python
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
```

The `title` field supports up to 200 characters, `description` is optional, and `done` defaults to `False`.

---

## REST API

The backend uses Django REST Framework's `ModelViewSet` to provide CRUD operations for the `Task` model.

The API is registered through a DRF router:

```python
router = routers.DefaultRouter()
router.register('tasks', views.TaskView, 'tasks')
```

The API is versioned under:

```text
/api/v1/
```

The current API configuration exposes the task resource through:

```text
/api/v1/tasks/
```

### API operations

```text
GET
   │
   └── List / retrieve tasks

POST
   │
   └── Create a task

PUT
   │
   └── Update a task

PATCH
   │
   └── Partially update a task

DELETE
   │
   └── Delete a task
```

These operations are provided by the DRF `ModelViewSet` used by `TaskView`.

---

## API Endpoints

### List tasks

```http
GET /tasks/api/v1/tasks/
```

Returns the available task records.

### Retrieve a task

```http
GET /tasks/api/v1/tasks/:id/
```

Returns a specific task.

### Create a task

```http
POST /tasks/api/v1/tasks/
Content-Type: application/json
```

Example:

```json
{
  "title": "Learn Django REST Framework",
  "description": "Practice building REST APIs with Django"
}
```

### Update a task

```http
PUT /tasks/api/v1/tasks/:id/
Content-Type: application/json
```

Example:

```json
{
  "title": "Learn Django REST Framework",
  "description": "Build a complete CRUD API",
  "done": true
}
```

### Partially update a task

```http
PATCH /tasks/api/v1/tasks/:id/
Content-Type: application/json
```

### Delete a task

```http
DELETE /tasks/api/v1/tasks/:id/
```

---

## API Documentation

The backend includes **drf-spectacular** for OpenAPI schema generation and Swagger UI.

The project exposes:

```text
OpenAPI Schema
/api/schema/
```

and:

```text
Swagger UI
/api/docs/
```

The URL configuration explicitly registers `SpectacularAPIView` and `SpectacularSwaggerView`.

When running locally, the documentation is available at:

```text
http://127.0.0.1:8000/api/docs/
```

The OpenAPI schema can be accessed at:

```text
http://127.0.0.1:8000/api/schema/
```

---

## Frontend

The frontend is built with React and Vite.

The application uses:

```text
React
   │
   ├── React Router
   │
   ├── React Hook Form
   │
   ├── Axios
   │
   ├── React Hot Toast
   │
   └── Tailwind CSS
```

The main React application defines routes for listing tasks, creating tasks and editing existing tasks.

### Frontend routes

```text
/ 
│
└── redirects to /tasks

/tasks
│
└── Task list

/tasks-create
│
└── Create task

/tasks/:id
│
└── Edit task
```

The frontend also provides navigation between the task list and task creation interface.

---

## API Client

The React frontend communicates with Django through Axios.

The project creates a dedicated Axios instance for the task API:

```javascript
const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})
```

The API client provides functions for:

```text
getAllTasks()
getTask(id)
createTask(task)
updateTask(id, task)
deleteTask(id)
```

The current implementation uses a local backend URL directly in the Axios configuration.

For production deployments, the repository README mentions `VITE_BACKEND_URL` as the intended backend URL environment variable. The current client code should be updated to consume that variable before relying on it in production.

---

## Task Form

The React task form uses **React Hook Form** to manage form state and validation.

The form contains:

```text
Title
Description
```

When editing an existing task, the application loads the task data and populates the form.

When creating a new task, the form sends the data through the API client.

The form also provides:

* Required field validation
* Create functionality
* Update functionality
* Delete functionality
* Navigation after operations
* Success notifications

---

## Notifications

The frontend uses **React Hot Toast** to display feedback after operations.

Examples include:

```text
Task created
Task updated
Task removed
```

The `Toaster` component is registered at the application level.

---

## Styling

The frontend uses **Tailwind CSS 4** through the Vite plugin.

The Vite configuration registers:

```javascript
plugins: [
    react(),
    tailwindcss(),
]
```

Tailwind utility classes are used directly throughout the React components to create the interface.

The project currently uses styling patterns such as:

```text
Responsive containers
Dark backgrounds
Rounded cards
Utility-based spacing
Interactive buttons
Form styling
```

---

## CORS

The backend includes `django-cors-headers` as a dependency.

This is useful for allowing the React development server and Django API to communicate when they are running on different origins.

The backend dependency is currently declared in `pyproject.toml`.

```text
React
localhost:5173
      │
      │ HTTP
      ▼
Django API
localhost:8000
```

This separation is typical during development of a decoupled frontend and backend application.

---

## Project Structure

The repository is organized into separate backend and frontend areas.

```text
django-react-api/
│
├── client/
│   │
│   ├── src/
│   │   ├── api/
│   │   │   └── tasks.api.js
│   │   │
│   │   ├── components/
│   │   │
│   │   ├── pages/
│   │   │   ├── TasksPage.jsx
│   │   │   └── TaskFormPage.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── ...
│   │
│   ├── package.json
│   └── vite.config.js
│
├── django_crud_api/
│   ├── settings.py
│   ├── urls.py
│   └── ...
│
├── tasks/
│   ├── models.py
│   ├── views.py
│   ├── serializer.py
│   ├── urls.py
│   └── ...
│
├── src/
│   └── django_react/
│
├── tasks/
│
├── manage.py
├── pyproject.toml
├── uv.lock
├── .python-version
├── db.sqlite3
└── README.md
```

The repository currently contains dedicated `client`, `django_crud_api`, `src/django_react` and `tasks` directories, together with `pyproject.toml` and `uv.lock`.

---

## Backend Structure

The Django backend separates the task model, API view and URL configuration.

```text
Django
  │
  └── tasks
       │
       ├── models.py
       │     │
       │     └── Task
       │
       ├── serializer.py
       │     │
       │     └── TaskSerializer
       │
       ├── views.py
       │     │
       │     └── TaskView
       │
       └── urls.py
             │
             └── API Router
```

The `TaskView` extends DRF's `ModelViewSet`, using `TaskSerializer` and `Task.objects.all()`.

---

## Frontend Structure

The React application separates API communication, components and pages.

```text
React
  │
  ├── api/
  │     └── tasks.api.js
  │
  ├── components/
  │     ├── Navigation
  │     └── TaskList
  │
  ├── pages/
  │     ├── TasksPage
  │     └── TaskFormPage
  │
  └── App.jsx
```

This structure keeps API communication separate from the presentation and page-level components.

---

## Installation

### Clone the repository

```bash
git clone https://github.com/luisortga/django-react-api.git

cd django-react-api
```

---

## Backend Setup

The project uses **uv** for Python dependency and environment management.

The current `pyproject.toml` requires:

```text
Python >= 3.14
```

and defines the main Django dependencies.

### Install Python dependencies

From the project root:

```bash
uv sync
```

### Apply migrations

```bash
uv run python manage.py migrate
```

### Start Django

```bash
uv run python manage.py runserver
```

The backend will be available at:

```text
http://127.0.0.1:8000/
```

---

## Frontend Setup

Navigate to the React application:

```bash
cd client
```

Install the Node.js dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will be available at the URL displayed by Vite, normally:

```text
http://localhost:5173/
```

The available frontend scripts are:

```text
npm run dev
npm run build
npm run lint
npm run preview
```

These scripts are defined in the project's `client/package.json`.

---

## Running the Full Application

The backend and frontend are developed as separate applications.

Start Django:

```bash
uv run python manage.py runserver
```

Then start React:

```bash
cd client
npm run dev
```

The architecture becomes:

```text
                 Browser
                    │
                    ▼
              React + Vite
              localhost:5173
                    │
                    │ Axios
                    ▼
             Django REST API
              localhost:8000
                    │
                    ▼
                  SQLite
```

---

## Environment Variables

The repository currently documents the following frontend environment variable:

```env
VITE_BACKEND_URL=http://localhost:8000
```

This variable is intended to provide the backend URL in production.

However, the current Axios implementation still contains:

```javascript
baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
```

directly in the source code.

For a production-ready configuration, the API client should consume `VITE_BACKEND_URL` instead of using a hard-coded URL.

---

## Database

The project currently uses **SQLite** for persistence.

The repository contains:

```text
db.sqlite3
```

and Django manages the database through its ORM and migration system.

The database stores the task records defined by the `Task` model.

```text
Task
 │
 ├── title
 ├── description
 └── done
```

---

## API Documentation Workflow

The API documentation is generated from the Django REST Framework backend.

```text
Django REST Framework
          │
          ▼
    drf-spectacular
          │
          ▼
     OpenAPI Schema
          │
          ▼
       Swagger UI
```

This provides an interactive interface for exploring and testing the API endpoints.

---

## Development Workflow

A typical development cycle looks like:

```text
Write Django Model
       │
       ▼
Create Serializer
       │
       ▼
Create ViewSet
       │
       ▼
Register API Route
       │
       ▼
Document API
       │
       ▼
Connect React with Axios
       │
       ▼
Build React Components
       │
       ▼
Test CRUD Operations
```

This workflow demonstrates the complete path from a database model to a user-facing React interface.

---

## What I Practiced

```text
Python
  │
  └── Django
       │
       ├── Models
       ├── URLs
       ├── ORM
       └── Migrations
             │
             ▼
      Django REST Framework
             │
             ├── Serializers
             ├── ViewSets
             ├── Routers
             └── REST API
                    │
                    ▼
              OpenAPI / Swagger

JavaScript
  │
  └── React
       │
       ├── Components
       ├── Pages
       ├── React Router
       ├── React Hook Form
       └── Axios
              │
              ▼
          REST API

Frontend
  │
  ├── Vite
  ├── Tailwind CSS
  └── React Hot Toast

Development
  │
  ├── uv
  ├── npm
  ├── ESLint
  ├── Git
  └── GitHub
```

---

## Learning Objectives

This project was created to practice full-stack development concepts including:

* Django
* Django REST Framework
* REST API architecture
* CRUD operations
* API versioning
* ModelViewSet
* Serializers
* Routers
* Django ORM
* SQLite
* React
* React Router
* Axios
* React Hook Form
* Tailwind CSS
* Vite
* CORS
* OpenAPI
* Swagger UI
* Frontend/backend separation
* Python dependency management with `uv`
* Node.js dependency management with npm
* Git and GitHub

---

## Full-Stack Architecture

The main concept demonstrated by the project is the communication between an independent frontend and backend.

```text
                         Full Stack
                             │
          ┌──────────────────┴──────────────────┐
          │                                     │
          ▼                                     ▼
     React Frontend                       Django Backend
          │                                     │
     ┌────┴────┐                           ┌────┴────┐
     │         │                           │         │
  Router    Forms                      ViewSet  Serializer
     │         │                           │         │
     └────┬────┘                           └────┬────┘
          │                                     │
          ▼                                     ▼
        Axios ───────────── HTTP ─────────── REST API
                                                │
                                                ▼
                                              SQLite
```

The React client is responsible for the user interface, while Django REST Framework handles the API and persistence layer.

---

## Author

Developed by **Luis Ortega**.

<p align="center">

<a href="https://github.com/luisortga">
  <img src="https://img.shields.io/badge/GitHub-luisortga-181717?logo=github&logoColor=white" alt="GitHub">
</a>

</p>

---

## Repository

<p align="center">

<a href="https://github.com/luisortga/django-react-api">
  <strong>github.com/luisortga/django-react-api</strong>
</a>

</p>

---

## License

This project is licensed under the **MIT License**.

See the [`LICENSE`](LICENSE) file for more information.
