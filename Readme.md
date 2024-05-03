# **@ticketscx/common**

This npm package is designed to simplify error handling and authentication in Express.js applications. It provides a set of middleware functions and utilities for creating custom errors, handling errors, authenticating users, and validating requests.

## **Installation**

You can install the package using npm:

> `npm install @ticketscx/common`

## **Usage**

### Custom Error

You can create custom errors by importing the CustomError class and extending it:

> `const { CustomError } = require('@ticketscx/common');
>
> class NotFoundError extends CustomError {
> statusCode = 404;
>
> constructor(message) {
> super(message);
> Object.setPrototypeOf(this, NotFoundError.prototype);
> }
>
> serializeErrors() {
> return [{ message: this.message }];
> }
> }`

### Error Handler Middleware

The errorHandler middleware handles errors in your Express application. It logs the error and sends an appropriate response:
`const { errorHandler } = require('@ticketscx/common');

app.use(errorHandler);`

### Current User Middleware

The currentUser middleware sets the current user on the request object based on the provided authentication strategy:
`const { currentUser } = require('@ticketscx/common');

app.use(currentUser);`

### Require Auth Middleware

The requireAuth middleware checks if the user is authenticated and throws an error if not:
`const { requireAuth } = require('@ticketscx/common');

app.use(requireAuth);`

### Validate Request Middleware

The validateRequest middleware validates the request body using the provided validation rules:
`const { validateRequest } = require('@ticketscx/common');
const { body } = require('express-validator');

app.post(
'/api/users',
[
body('email').isEmail().withMessage('Email must be valid'),
body('password')
.trim()
.isLength({ min: 4, max: 20 })
.withMessage('Password must be between 4 and 20 characters'),
],
validateRequest,
async (req, res) => {
// Handle request
}
);`
