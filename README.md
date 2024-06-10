# task_management-project

## Introduction

`task_management-project` is a task management application that helps users organize and track their daily tasks efficiently. The application is developed using the ExpressJs framework, employing a stateful session model and Joi for input validation.

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
   git clone https://github.com/username/task_management-project.git
   ```
2. Navigate to the project directory:
   cd task_management-project
3. Install the necessary libraries:
   npm install
4. Set up environment variables:
   Create a .env file from the provided .env.example:
   cp .env.example .env
   Update the .env file with your configuration settings.

Usage
To run the application in development mode:
Start the development server:
npm run dev
Open your browser and visit:
http://localhost:3000
