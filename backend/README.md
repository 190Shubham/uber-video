# User Registration API

## Endpoint

POST /users/register

## Description

This endpoint registers a new user in the application.

It validates the incoming request data, hashes the password, creates a user record, and returns a JWT token along with the created user information.

---

## Request Body

The client must send JSON in the following format:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "secret123"
}
```

## Required Data

The following fields are required:

- fullname.firstname
  - Required: Yes
  - Minimum length: 3 characters
  - Example: "John"

- email
  - Required: Yes
  - Must be a valid email address
  - Example: "john@example.com"

- password
  - Required: Yes
  - Minimum length: 6 characters
  - Example: "secret123"

Optional field:

- fullname.lastname
  - Optional
  - If provided, it should be a valid string

---

## Validation Rules

The endpoint validates the request using express-validator:

- email must be a valid email
- fullname.firstname must be at least 3 characters long
- password must be at least 6 characters long

If validation fails, the API returns a 400 status code with the list of errors.

---

## Success Response

### Status Code: 201 Created

Example response returned by the endpoint after a successful registration:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGRhY2YzYjUzODQwZTQ2IiwiaWF0IjoxNzYxMzA0MDAwLCJleHAiOjE3NjE5MDgwMDB9.4f8C2V8mQ7gpg7mN4o0yGQ3Q0n2sN2Q6m3JQ8FQy7W8",
  "user": {
    "_id": "64d8e4c9f1a2b2c3d4e5f678",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "$2b$10$abc123...",
    "socketId": null
  }
}
```

This response means the registration was successful and the server returned:
- a JWT token for authentication
- the newly created user object

---

## Error Responses

### 400 Bad Request

Returned when the request body is invalid or missing required fields.

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### 500 Internal Server Error

Returned when something unexpected happens on the server while creating the user.

---

## Example cURL Request

```bash
curl -X POST http://localhost:5000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "secret123"
  }'
```

---

## Notes

- Passwords are hashed before saving.
- A JWT token is generated after successful registration.
- The endpoint is intended to be used by client apps during sign-up.
