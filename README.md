# Fake API

Overview
----

This repository contains a simple JSON API to test/simulate HTTP responses.

There are four endpoints available:

#### POST `/ok`
<hr>

Simulates a successful request. This endpoint returns the same data and headers sent to it and status code `200`.

- Response example:
````
{
    "data": {
        // whatever I send in request body
    },
    "headers": {
        // whatever I send in request headers
    }
}
````

#### POST `/not-modified`
<hr>

Simulates a not modified request. This endpoint returns status code `300`.


#### POST `/bad-request`
<hr>

Simulates a bad request. This endpoint returns the same data and headers sent to it, an error message and status code `400`.

- Response example:
````
{
    "data": {
        // whatever I send in request body
    },
    "headers": {
        // whatever I send in request headers
    },
    "error": {
        "message": "Bad request"
    }
}
````

#### POST `/internal-server-error`
<hr>

Simulates an internal server error while processing the request. This endpoint returns the same data and headers sent to it, an error message and status code `500`.

- Response example:
````
{
    "data": {
        // whatever I send in request body
    },
    "headers": {
        // whatever I send in request headers
    },
    "error": {
        "message": "Internal server error"
    }
}
````

Usage
----

### 1. Install Docker and Docker Compose

- [Docker](https://docs.docker.com/engine/install/).

- [Docker Compose](https://docs.docker.com/compose/install/).

### 2. Start the API with Docker Compose:

- In project root folder type the following command: 

    ``` 
    docker-compose up
    ```

### 3. You are ready!

- Now the API should be running in 7777 port, so you can try access it on `http://localhost:7777`.