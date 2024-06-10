# Task_management-project

## Introduction

   `task_management-project` is a task management application that helps users organize and track their daily tasks efficiently. The application is developed         using the ExpressJs framework, employing a stateful session model and Joi for input validation.

## Technologies Used

- **ExpressJs**: Web framework for Node.js
- **PassportJs**: Authentication middleware for Node.js
- **Express-Session**: Middleware for session management
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling for Node.js
- **Joi**: Schema description and data validation
- **Bcryptjs**: Library for hashing passwords

## Features

- Check username and password via Local Strategy
- Session management using Express-Session (expires after 5 minutes of inactivity)
- Pagination, filtering, and fetching data with api-query-params
- Input validation with Joi
- Password hashing with Bcrypt
- File uploads
- CRUD operations (user, customer, project, task)

## System Requirements

- Operating System: Windows, macOS, Linux
- Node.js: >= 16.x
- MongoDB: >= 6.x

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/lhung0312/task_management-project.git
   ```
2. Navigate to the project directory:
   ```sh
   cd task_management-project
   ```
4. Install the necessary libraries:
   ```sh
   npm install
   ```
5. Set up environment variables:

    Create a .env file from the provided .env.example and update it with your configuration settings:
   ```sh
   PORT = 3000
   DB_HOST = your_mongodb_connection_string
   DB_USER = your_database_user
   DB_PASSWORD = your_database_password
   DB_NAME = your_database_name
   SECRET_SESSION = your_secret_session_key
   ```

## Usage
   
 1. Start the development server:
 
    ```sh
    npm run dev
    ```
 2. Open your browser and visit:
    http://localhost:3000
   
 ## Contact
 
   For any questions or suggestions, feel free to reach out via email: info.tuanhung@gmail.com
