# ExpenseApp

ExpenseApp is a web application built with Angular that allows users to manage their expenses. It includes features like user authentication, expense tracking, and pagination for expense records.

## Features

- User authentication with login and signup functionality.
- Add, view, and paginate expense records.
- Responsive UI built with Angular Material.
- Integration with a backend API for data persistence.

## Prerequisites

Before setting up the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v16.x or higher recommended)
- [Angular CLI](https://angular.io/cli) (v15.2.11 or higher)

## Setup Procedure

Follow these steps to set up the ExpenseApp project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ExpenseApp.git
cd ExpenseApp
```
### 2. Install Dependencies

Install the required packages using npm:

```bash
npm install
```

### 3. Run the Development Server

To start the application in development mode:

```bash
npm start
```

Navigate to http://localhost:4200/ in your browser. The application will automatically reload if you make changes to the source files.

## Technologies Used

- Frontend: Angular
- UI Components: Angular Material
- HTTP Client: Angular's HttpClientModule
- Routing: Angular Router

## API Endpoints

### User Routes

- POST /api/users/signup: User signup.
- POST /api/users/login: User login.
- GET /api/users/logout: User logout (requires authentication).

## Expense Routes

- POST /api/expenses/create: Add a new expense (requires authentication).
- GET /api/expenses/all: Get paginated expenses (requires authentication).