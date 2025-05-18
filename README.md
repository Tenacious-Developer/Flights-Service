# 🚀 Node.js + Express.js Backend Setup

This project is a basic backend setup using Node.js and Express.js, with environment variable management, auto-reloading, and HTTP status codes.

---

## 📁 Project Setup Instructions

1. Initialize Project
   - Run `npm init -y` to initialize Node.js project with default settings.
   - Run `git init` to initialize a Git repository.

2. Install Required Dependencies
   - Install `express` as the web framework.
   - Install `dotenv` to load environment variables from .env.
   - Install `http-status-codes` for predefined HTTP status code constants.

3. Create and Configure .gitignore
   - Create a `.gitignore` file.
   - Add `node_modules/` and `.env` to the file.

---

## 🌱 Environment Setup

4. Create `.env` File
   - Define your PORT, e.g., `PORT=5000`.

5. Configure dotenv
   - Create a `config` folder and a `config.js` file inside it.
   - Load dotenv and configure it in this file.
   - Import this config in your main server file.

---

## 🔁 Dev Tool Setup with Nodemon

6. Install and Configure Nodemon
   - Install `nodemon` as a dev dependency.
   - In `package.json`, update the scripts section to include:
     - `"start": "node server.js"`
     - `"dev": "nodemon server.js"`

---

## 🚀 Create the Express Server

7. Create `server.js` and add basic server setup
   - Import express and dotenv config.
   - Setup an Express app and a default route.
   - Listen on the PORT from `.env`.

---

## 📂 Project Structure - Routes and Controllers

The project is structured to separate concerns, with the following key folders:

- **`routes/`**: This folder contains files that define the API endpoints for the application. Each file in this folder typically handles a specific set of related routes.
- **`controllers/`**: This folder houses the logic for handling incoming requests. Controllers receive requests from the routes and interact with other parts of the application (like services or databases) to fulfill the request and send back a response.

This separation helps in organizing the codebase, making it more maintainable and testable.

---

## 🛠️ Key Technologies and Concepts

This section details the core technologies and concepts implemented in the project's setup:

### Express.js

Express.js is the foundational web application framework used to build the backend. It provides a robust set of features for developing web and mobile applications, including routing, middleware support, and a structure for organizing your application. It simplifies the process of handling HTTP requests and responses.

### Routing with `express.Router`

Routing is the process of determining how an application responds to a client request to a particular endpoint. In this project, `express.Router()` is utilized to create modular, mountable route handlers. This allows for organizing related routes into separate files (within the `routes/` folder) and mounting them at specific URL paths using `app.use()`. This modular approach enhances code organization, readability, and maintainability, especially as the number of endpoints grows.

### Controllers

Controllers are a crucial part of the application's architecture, residing in the `controllers/` folder. They are responsible for containing the business logic that executes when a specific route is hit. Controllers receive data from the request, process it (potentially interacting with services or a database), and then formulate the response to be sent back to the client. This separation of concerns keeps the routing logic clean and the business logic centralized.

### Middleware

Middleware functions in Express are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. They can perform various tasks such as executing code, making changes to the request and the response objects, ending the request-response cycle, and calling the next middleware function. While not extensively implemented yet, the project structure allows for adding middleware for tasks like parsing request bodies, authentication, logging, and error handling. Middleware provides a powerful way to add functionality that needs to be executed for multiple routes or for every request.

### Environment Variables with Dotenv

`dotenv` is a zero-dependency module that loads environment variables from a `.env` file into `process.env`. This is a standard practice for managing configuration settings that vary between different environments (development, staging, production) without hardcoding them into the source code. In this project, `dotenv` is used to load critical configuration like the server `PORT`, making the application more flexible and secure by separating configuration from code.

### Logging with Winston

Winston is a versatile logging library for Node.js. Logging is essential for debugging, monitoring, and understanding the behavior of an application. Winston is configured in this project to provide robust logging capabilities. It allows for sending log messages to multiple destinations (transports), such as the console and files. The current setup demonstrates logging to both the console and a file (`combined.log`), which is invaluable for tracking application events, identifying errors, and monitoring performance in different environments.

---

## 📊 Database Interaction with ORM (Sequelize)

This section introduces Object-Relational Mapping (ORM) and details how Sequelize, a promise-based Node.js ORM, is being integrated into the project to manage database interactions.

### What is an ORM?

An ORM (Object-Relational Mapping) is a technique that bridges the gap between object-oriented programming languages and relational databases. It allows you to interact with your database using the concepts of objects and classes, rather than writing raw SQL queries directly. This abstraction simplifies database operations and makes your code more maintainable.

**Benefits of using an ORM:**

-   **Increased Productivity:** Reduces the amount of boilerplate code needed for database operations.
-   **Improved Code Readability and Maintainability:** Interacting with objects is often more intuitive than managing SQL strings.
-   **Database Agnosticism:** Can make your code more portable across different database systems (though dialect-specific features may still require consideration).
-   **Enhanced Security:** Often includes built-in protection against common vulnerabilities like SQL injection.

### Sequelize Integration

Sequelize is the chosen ORM for this project. It supports various databases like PostgreSQL, MySQL, SQLite, and SQL Server. The integration steps so far include:

1.  **Sequelize CLI Initialization:** The `sequelize init` command was used to set up the basic Sequelize project structure, including configuration files, model directories, and migration directories. This provides a standardized way to manage Sequelize within the project.

2.  **Database Configuration (`config.json`):** The `sequelize/config/config.json` file has been updated to specify the connection details for a MySQL database. This configuration uses environment variables (loaded by `dotenv`) for sensitive information like username, password, database name, and host, ensuring that these details are not hardcoded into the codebase. The `dialect` is set to `mysql` to indicate the database type.

3.  **Model Definition:** While models are not fully implemented yet, the structure is in place within the `sequelize/models` directory. This is where database tables will be defined as JavaScript objects (models) using Sequelize's syntax.

4.  **Database Connection:** The application's entry point (`src/index.js`) has been modified to import the Sequelize instance and models from `sequelize/models/index.js`. The `db.sequelize.authenticate()` method is called when the server starts to establish and test the connection to the configured MySQL database.

This setup provides the foundation for interacting with the MySQL database using Sequelize's object-oriented interface, which will be utilized in the controllers to perform data operations.

---

## 🌱 Database Seeding

Database seeding is the process of populating a database with initial data. This is crucial for:

-   **Initial Application Setup:** Providing essential data required for the application to run out-of-the-box.
-   **Development and Testing:** Creating realistic or specific data sets for developers to work with and for automated tests.
-   **Lookup Data:** Adding static data like lists of countries, status codes, or default configurations.

In this project, seeders are implemented using Sequelize CLI. A seeder file contains instructions (typically JavaScript code) to insert records into database tables. This allows for consistent data population across different environments.

### Generating Seeders

Seeders are generated using the Sequelize CLI command:



## 🚶‍♂️ Steps Performed So Far

This section outlines the key actions taken during the project setup and development process in a chronological order:

1.  **Project Initialization:**
    *   The project was initialized as a Node.js project using `npm init -y`.
    *   A Git repository was initialized with `git init`.

2.  **Dependency Installation:**
    *   Essential dependencies were installed: `express` for the web framework, `dotenv` for environment variables, and `http-status-codes` for HTTP status constants.
    *   `nodemon` was installed as a development dependency for automatic server restarts.

3.  **Git Ignore Setup:**
    *   A `.gitignore` file was created to prevent committing unnecessary files like `node_modules/` and `.env`.

4.  **Environment Variable Configuration:**
    *   A `.env` file was created to store environment-specific configurations, specifically the `PORT` for the server.
    *   The `dotenv` library was configured in `src/config/index.js` (or a similar configuration file) to load these variables into `process.env`.

5.  **Basic Express Server Creation:**
    *   The main server file (`src/index.js` or `server.js`) was created.
    *   A basic Express application was set up, and the server was configured to listen on the port specified in the environment variables.

6.  **Initial Routing Structure with `express.Router`:**
    *   The project structure was organized to include a `routes` folder.
    *   `express.Router()` instances were used to create modular route handlers, allowing for the separation of different API endpoints (e.g., `/api`, `/V1`).
    *   These routers were mounted in the main application using `app.use()`.

7.  **Controller Files Creation:**
    *   A `controllers` folder was created to house the logic for handling requests.
    *   Initial controller files (like `info-controllers.js`) were created to contain the functions that execute when specific routes are hit.

8.  **Winston Logging Configuration:**
    *   Winston was installed as a logging library.
    *   A configuration file (`src/config/logger-config.js`) was created to set up Winston to log messages to both the console and a file (`combined.log`). This provides a basic logging mechanism for debugging and monitoring.

These steps lay the foundation for a structured and maintainable Node.js application using Express.js, with a focus on organizing routes and controllers, managing environment variables, and implementing basic logging.

---

## 🧱 Database Setup with Sequelize

This section details the steps taken to integrate Sequelize for database management:

9.  **Sequelize Initialization with CLI:**
    *   The `sequelize init` command was executed to create the basic Sequelize project structure (`sequelize/config`, `sequelize/models`, `sequelize/migrations`).
10. **MySQL Configuration:**
    *   The `sequelize/config/config.json` file was updated to configure connections for development, test, and production environments, specifying `dialect: "mysql"` and using environment variables for credentials and host.
11. **Database Creation:**
    *   The database specified in the `config.json` was created using the `sequelize db:create` command. This prepares the database instance for tables.
12. **Model and Migration Generation:**
    *   The `npx sequelize model:generate` command was used to create Sequelize models (representing database tables) and their corresponding migration files. For example, the `Airplane` model was generated with attributes like `modelNumber` and `capacity`.
13. **Running Migrations:**
    *   The `sequelize db:migrate` command was executed to apply the generated migration files to the database, creating the actual tables (like the `Airplanes` table) based on the model definitions.
14. **Repository Layer Creation:**
    *   A `repositories` folder was created in the `src` directory.
    *   An `airplane-repository.js` file was created within this folder.
    *   This file defines a class (`AirplaneRepository`) that encapsulates the logic for interacting with the `Airplane` model.
    *   The purpose of the repository layer is to abstract database operations, keeping controllers and services clean and focused on business logic. The repository connects to the `Airplane` model to perform CRUD (Create, Read, Update, Delete) operations.

---

## ✅ Run the Server

- Create the database (only needs to be done once):
- Run migrations to create tables:
- Without Nodemon: Run `node server.js`
- With Nodemon: Run `npm run dev`



---

## 📌 Project Status

- Basic backend setup completed.
- Initial project structure with `routes` and `controllers` established.
- Environment variable management using `dotenv` configured.
- Logging with Winston set up to output to console and file.
- Key concepts like Express.js, routing with `express.Router`, controllers, and middleware are the foundation.

---

## 📚 Learn & Revise Keywords

- `npm init`: Initializes a Node project
- `express`: Web server framework
- `dotenv`: Handles environment variables
- `http-status-codes`: Predefined HTTP constants
- `nodemon`: Watches and restarts server on changes
- `.env`: Stores environment config values
- `.gitignore`: Avoids committing unnecessary files
- `express.Router()`: Creates modular route handlers
- `middleware`: Functions that process requests in the request-response cycle
- `Winston`: A logging library for Node.js

---

## 📌 Project Status

- Basic backend setup completed.
- Next steps: Setup folder structure, routes, middlewares, and modularization.

---

## 📚 Learn & Revise Keywords

- `npm init`: Initializes a Node project
- `express`: Web server framework
- `dotenv`: Handles environment variables
- `http-status-codes`: Predefined HTTP constants
- `nodemon`: Watches and restarts server on changes
- `.env`: Stores environment config values
- `.gitignore`: Avoids committing unnecessary files

---

## 📦 Folder Structure (So Far)

- config/
  - config.js
- .env
- .gitignore
- package.json
- server.js

---

## 💡 Suggestions for Next Steps

- Setup folder structure (`routes`, `controllers`, `middlewares`, etc.)
- Add error handling middleware
- Connect to a database (MongoDB or PostgreSQL)
- Create RESTful APIs

---

Happy coding! ⚡
