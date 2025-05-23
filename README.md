# ✈️ Flights-Service

A modular Node.js backend for managing flights, airplanes, and cities, built with Express.js, Sequelize ORM (MySQL), and robust error handling.

---

## 🚀 Project Setup: Step-by-Step

### 1. Initialize the Project

```sh
npm init -y
git init
```

### 2. Install Dependencies

```sh
npm install express dotenv http-status-codes sequelize mysql2 winston
npm install --save-dev nodemon sequelize-cli
```

### 3. Configure .gitignore

Add the following to `.gitignore`:

```
node_modules/
.env
.idx
.vscode
combined.log
src/config/config.json
```

### 4. Setup Environment Variables

Create a `.env` file:

```
PORT=5000
```

### 5. Setup Sequelize

```sh
npx sequelize-cli init
```

Edit `src/config/config.json` with your MySQL credentials.

### 6. Create Models and Migrations

```sh
npx sequelize-cli model:generate --name Airplane --attributes modelNumber:string,capacity:integer
npx sequelize-cli model:generate --name City --attributes name:string
```

### 7. Run Migrations

```sh
npx sequelize-cli db:migrate
```

### 8. Seed Initial Data

Create seeders as needed, then run:

```sh
npx sequelize-cli db:seed:all
```

### 9. Project Structure

```
src/
  config/
  controllers/
  middlewares/
  migrations/
  models/
  repositories/
  routes/
    V1/
  seeders/
  services/
  utils/
.env
.gitignore
package.json
README.md
combined.log
```

### 10. Configure Express Server

- Main entry: `src/index.js`
- Loads config, sets up JSON parsing, and mounts API routes.

### 11. Setup Logging

- Winston logger: `src/config/logger-config.js`

### 12. Configuration Management

- Loads environment variables: `src/config/server-config.js`
- Exports config and logger: `src/config/index.js`

### 13. Implement Repository Pattern

- CRUD abstraction: `src/repositories/crud-repository.js`
- Specific repositories: `src/repositories/airplane-repository.js`, `src/repositories/city-repository.js`

### 14. Implement Services

- Business logic: `src/services/airplane-service.js`, `src/services/city-service.js`
- Service index:  
  ```javascript
  // filepath: src/services/index.js
  module.exports = {
      AirplaneService: require('./airplane-service'),
      CityService: require('./city-service.js')
  }
  ```

### 15. Implement Controllers

- Handle HTTP requests: `src/controllers/airplane-controller.js`, `src/controllers/city-controller.js`, `src/controllers/info-controllers.js`
- Controller index: `src/controllers/index.js`

### 16. Setup Middlewares

- Validation: `src/middlewares/airplane-middleware.js`, `src/middlewares/city-middleware.js`
- Middleware index: `src/middlewares/index.js`

### 17. Define Routes

- API versioning: `src/routes/index.js`, `src/routes/V1/index.js`
- Airplane routes: `src/routes/V1/airplane-routes.js`
- City routes: `src/routes/V1/city-route.js`

### 18. Common Response Utilities

- Standardize API responses: `src/utils/common/success-response.js`, `src/utils/common/error-response.js`, `src/utils/common/index.js`
- Custom error class: `src/utils/errors/app-error.js`

---

## 🛠️ Common Commands

| Task                      | Command                                                      |
|---------------------------|-------------------------------------------------------------|
| Initialize project        | `npm init -y`                                               |
| Initialize git            | `git init`                                                  |
| Install dependencies      | `npm install ...`                                           |
| Install dev dependencies  | `npm install --save-dev ...`                                |
| Sequelize init            | `npx sequelize-cli init`                                    |
| Create DB                 | `npx sequelize-cli db:create`                               |
| Generate model/migration  | `npx sequelize-cli model:generate --name ... --attributes ...` |
| Run migrations            | `npx sequelize-cli db:migrate`                              |
| Run seeders               | `npx sequelize-cli db:seed:all`                             |
| Start server (dev)        | `npm run dev`                                               |

---

## ✅ Features

- Modular MVC structure
- Sequelize ORM with MySQL
- API versioning
- Centralized error and success responses
- Logging with Winston
- Seed and migration scripts

---

## 📌 Next Steps

- Add more models (e.g., flights, bookings)
- Implement authentication and authorization
- Add global error handling middleware
- Write unit and integration tests

---

Happy coding! ✈️