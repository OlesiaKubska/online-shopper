# Online Shopper

## Project Description

Online Shopper is a web application designed to manage a shopping list. It integrates with a provided API to fetch and manage products. The application includes functionalities for viewing products, adding/removing them from a shopping list, filtering products, and user authentication (login and registration).

## Features

- **Product List**: Fetch and display a list of products from the API.
- **Shopping List Management**: Add and remove products from a shopping list.
- **Product Filtering**: Filter products based on various criteria.
- **User Authentication**: Register and log in users, maintaining session state using localStorage.
- **Protected Routes**: Ensure certain routes are accessible only to authenticated users.

## Installation and Setup

1. **Install the products API**:
    ```bash
    cd API
    npm install
    ```

2. **Run the products API**:
    ```bash
    npm run start
    ```

3. **Install the main application**:
    ```bash
    cd ../
    npm install
    ```

4. **Run the main application**:
    ```bash
    npm run dev
    ```

## API Documentation

The API documentation (Swagger) is available at `http://localhost:4000/swagger` after starting the API.

**Note**: All API requests modify or return data after a delay of 3 seconds. During operations, a relevant message is shown to the user (e.g., using `LinearProgress` from Material UI: https://mui.com/material-ui/react-progress/#linear-indeterminate).

## Detailed Features

### Product List

- **API Endpoint**: `GET http://localhost:4000/api/productsList`
- **Functionality**: 
  - On pressing the "Load" button, fetch the list of products from the API, save it in React Context, and display it in the left column.
  - Clicking the button triggers the API call, stores the results in React Context, and displays them in the `ProductsList` component.

### Shopping List Management

- **API Endpoints**:
  - Fetch shopping list: `GET http://localhost:4000/api/shoppingList`
  - Add product to shopping list: `POST http://localhost:4000/api/shoppingList`
  - Remove product from shopping list: `DELETE http://localhost:4000/api/shoppingList/:id`
- **Functionality**:
  - Clicking on a product in the `ProductsList` component adds it to the shopping list.
  - Clicking on a product in the `ShoppingList` component removes it from the shopping list.

### Product Filtering

- **Functionality**: 
  - Use form elements to filter products in the left column. The filtering is done inside React Context.
  - A method in React Context is created for filtering products, invoked in the Header, and the state change is visible in the `ProductsList` component.

### User Authentication

- **Login and Registration**:
  - **Forms**: Implemented using Formik for form handling and validation.
  - **Local Storage**: User session is managed using localStorage.

#### Login

- **Route**: `/signIn`
- **Functionality**: 
  - Displays a login form.
  - On successful login, the user is redirected to the dashboard.
  - The logged-in user's name is displayed in the Header.
  - Includes a logout button that clears the session and redirects to the login screen.
  - If the user is not logged in, accessing the dashboard route redirects to the login screen.

#### Registration

- **Route**: `/signOut`
- **Functionality**:
  - Displays a registration form.
  - On successful registration, the user is added to `availableUsers` in localStorage and automatically logged in.
  - Only users in `availableUsers` can log in; others see an error message.

### Protected Routes

- **Functionality**: Certain routes (like the dashboard) are accessible only to authenticated users. Unauthenticated users are redirected to the login screen.

## Development Tools and Technologies

- **React**: JavaScript library for building user interfaces.
- **Formik**: For form handling and validation.
- **Yup**: For schema validation.
- **Material UI**: For UI components and styling.
- **Axios**: For making API requests.
- **React Router**: For routing.
- **Vite**: Build tool for faster development.

## Deployment

The application is deployed using GitHub Pages. To deploy, run:

```bash
npm run deploy
 ```

Ensure that the base property in vite.config.js and homepage property in package.json are correctly set to the repository name.

## Authors and Acknowledgments

### Author: Olesia Kubska
### Acknowledgments: 
This project was developed as part of the coursework for the second semester, integrating knowledge from various topics covered during the semester.

This README provides a comprehensive overview of the Online Shopper project, detailing its features, installation steps, and usage. It is structured to be informative for potential employers or collaborators reviewing your project on GitHub.
