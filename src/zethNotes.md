# Suggested Folder Structure

## models

- This folder is typically used for defining data models and writing database queries.
- For example, you would create a file called `categoryModel.js` or `categories.js` in this folder to contain the SQL queries to interact with the Categories table.

## controllers

- This folder contains the logic for each route, connecting requests to the right database queries or business logic.
- You could create a file called `categoryController.js` to contain the functions that use the models to handle requests and responses.

## routes

- This folder contains the route definitions, mapping HTTP endpoints to the appropriate controller functions.
- You might have a file called `categoryRoutes.js` that defines the routes for fetching the categories.

# Folder Naming Summary

- **models**: For database-related queries.
- **controllers**: For handling API requests and calling the appropriate models.
- **routes**: For defining the actual API endpoints.

# Example Structure for Categories API

- `models/categoryModel.js`: Contains the database query to get categories.
- `controllers/categoryController.js`: Calls `categoryModel` to fetch data and handle the response.
- `routes/categoryRoutes.js`: Defines the `/categories` route and connects it to the appropriate controller.

# Example API Flow

1. **categoryModel.js** (models folder):
   - Contains the SQL queries to interact with the database, such as fetching all categories.
2. **categoryController.js** (controllers folder):
   - Calls the function in `categoryModel.js` to fetch the categories and sends the response.
3. **categoryRoutes.js** (routes folder):
   - Defines the route, such as `GET /api/categories`, which triggers the controller function to handle the request.

This folder structure follows the **MVC (Model-View-Controller)** pattern, keeping your code modular, scalable, and easy to maintain.
