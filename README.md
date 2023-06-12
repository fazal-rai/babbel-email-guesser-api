# Email-Guesser-Api

Babbel Email Guesser is a service that offers email guessing capabilities for employees of a company. It utilizes provided sample data to detect the email format used by the company. By considering the employee's full_name and domain, the service generates a guessed email address.


## Assumption

Based on the given sample data, assuming that there is one field for the `fullName`, which must contain the first name and last name and second field will contain the company `domain`. So implemented the business logic of API based on above assumption. So this API will only return email if fullName contain exact two words (first and last name) and domain name matches the sample data provided.


## Feature

- Guess email from the given input

## Technologies Used

- Backend:
  - Node.js
  - Express
  - Chai (Testing)

- Version Control:
  - Git (Hosted on GitHub)

## System dependencies

Make sure that you must have following things in your system. 

- [node](https://github.com/creationix/nvm) and [npm](https://docs.npmjs.com/cli/v8) for web development


## Local Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/fazal-rai/babbel-email-guesser-api.git
2. Backend Setup:
  - cd to project root directory
  - Run `npm install` **To install dependencies**
  - Run `cp .env.example .env` **Set the env's value in .env file copied from .env.example**
  - Run `npm start` **To run server Local**
  - Server will start at http://localhost:8080 (Default)
  - The port can also be specified in `.env` file



## Test cases

- To Run test cases
  - `npm run test`

## Run Lint

- To Run linter
  - `npm run lint`


## Folder Structure

The folder structure for the application follows a simple and organized approach. Here's an overview of the structure:


```

babbel-email-guesser-api/
    ├── src/
    │   └── controllers/
    │   
    │   └── data/
    │       └── emails.json
    │   └── middlewares/
    │       └── errorHandler.middleware.js
    │   └── routes/
    │       └── router.js
    │   └── services/
    │       └── guessEmail.service.js
    │       └── readData.service.js
    │   └── tests/
    │       └── controllers/
    │           └── emails.controller.test.js
    │       └── services/
    │           └── guessEmail.service.test.js
    │           └── readData.service.test.js
    │   └── utils/
    │       └── file.util.js
    │   └── index.js
    ├── .env.example
    └── package.json
    └── package-lock.json
    └── .eslintrc.cjs
    └── server.js

```


The backend of the application is built using Node.js and Express. It provides the API endpoints for email guessing.

The backend directory contains the following files and folders:

- server.js: The entry point of the backend application.

- routes/: Defines the routes and handlers for the following:-
  - /route.js: Defines the routes and handlers for the email-related API

- controllers/: Contains the controller functions for the following.
  - /emails.controller.js: controller functions for handling the logic of email operations.

- middleware/: Defines the middleware functions for the following
  - /errorHandler.js: Error handling middleware.

- services/: Defines the services for the following
  - /generateEmail.service.js: Services which is used to guess emails based on full-name and domain.
  - /readData.service.js: Service which is used to read from the the email.json and create its format.


### API endpoint
  Endpoint: `/api/generate`

  Query Parameters: `fullName, domain`


    
#### Example Request

    http://localhost:8080/api/generate?fullName=John Doe&domain=google.com

#### Example Response
Status Code: 200 OK

    doejhon@google.com