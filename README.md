# PlayFit

Welcome to PlayFit! This project aims to inspire kids to stay active and healthy by discovering the amazing world of sports. Our platform helps children and parents explore different sports and find the perfect fit for their interests and abilities.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Overview

PlayFit is an interactive platform designed to encourage children to engage in sports activities. It provides a comprehensive guide to various sports, detailing the benefits, age requirements, and other essential information. The platform supports user authentication, allowing users to sign up, log in, and access personalized content.

### Key Features

1. **User Authentication**: Users can create accounts, log in, and log out. Authentication is handled using JWT tokens.
2. **Sports Information**: The platform provides detailed information about a variety of sports. Each sport's page includes an overview, benefits, age requirements, and more.
3. **Expandable Content**: Users can expand sections to view more detailed information.
4. **Responsive Design**: The application is designed to be fully responsive, ensuring a seamless experience across all devices.
5. **Dynamic Content Loading**: Sports data is fetched from a backend server and displayed dynamically.

## Installation

To get started with the PlayFit project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/playfit.git
    cd playfit
    ```

2. Install the dependencies for both the backend and frontend:

    ```bash
    # Install backend dependencies
    cd backend
    npm install

    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

## Usage

To run the project locally, follow these steps:

1. Start the backend server:

    ```bash
    cd backend
    npm start
    ```

2. Start the frontend development server:

    ```bash
    cd ../frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3005` to view the application.

## Features

- **User Authentication**: Sign up, login, and logout functionality.
- **Sports Information**: Detailed information about various sports, including benefits, age requirements, and more.
- **Dynamic Content**: Expandable sections to show more or less information as needed.
- **Responsive Design**: Optimized for various screen sizes.
- **Protected Routes**: Certain routes are protected and require user authentication to access.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built with Node.js and Express, and it connects to a MongoDB database to store user and sports data.

#### Key Files and Directories

- `server.js`: Entry point for the backend server.
- `config/`: Contains configuration files for database connection and other settings.
- `controllers/`: Contains controllers that handle incoming requests and interact with the database.
- `models/`: Contains Mongoose models for MongoDB collections.
- `routes/`: Contains route definitions for the API endpoints.

### Frontend

The frontend is built with React and uses Axios for making API requests. It is designed to be responsive and user-friendly.

#### Key Files and Directories

- `src/App.jsx`: Main entry point for the React application.
- `src/pages/`: Contains React components for different pages (Home, Sports, About, etc.).
- `src/components/`: Contains reusable React components (Navbar, Footer, etc.).
- `src/context/`: Contains context providers for global state management.

## API Endpoints

The backend server provides several API endpoints to manage sports and user data:

- `GET /sports`: Retrieve a list of all sports.
- `POST /users/signup`: Create a new user account.
- `POST /users/login`: Authenticate a user.
- `GET /users/logout`: Log out the current user.

## Environment Variables

To run this project, you need to set up the following environment variables in a `.env` file:

### Backend

Create a `.env` file in the `backend` directory:

```env
PORT=3000
SECRET=your_jwt_secret
MONGO_URI=your_mongo_db_connection_string
