# Chat Realtime

A real-time chat application using Node.js, Express, MongoDB, and Socket.io.

## Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Installation

1. Clone the repository
    ```sh
    git clone https://github.com/yourusername/chat_realtime.git
    ```
2. Navigate to the project directory
    ```sh
    cd chat_realtime
    ```
3. Install dependencies
    ```sh
    npm install
    ```
4. Create a `.env` file in the root directory and add your MongoDB connection string
    ```env.example
   PORT = 8686
   DB_HOST = mongodb+srv://your_username:your_password@your_cluster.mongodb.net/
   DB_USER = your_user_database
   DB_PASSWORD = your_password_database
   DB_NAME = your_name_database
    ```

## Usage

1. Start the server
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:8686`

