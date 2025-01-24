# Express.js + Prisma ORM Project

Welcome to the **Express.js + Prisma ORM** project! This application is built using **Node.js**, **Express**, and **Prisma ORM** as an ORM to manage database interactions. 

This README will guide you through setting up and running the project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (version **14.x** or later)
- **Yarn** (version **1.x** or later)
- The supported database MySQL with an user and a password able to be connected from the command line

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies using Yarn:**

   ```bash
   yarn install
   ```

3. **Set up your database:**

   - Create a new database with mysql.
  
   
  ## IMPORTNANT!!!

- Create a `.env` file in the root directory of your project and add your database connection string. Here’s an example for PostgreSQL:

   ```env
   DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DB_NAME"
   ```

   - Ensure that you replace `USER`, `PASSWORD`, `HOST`, `PORT`, and `DB_NAME` with your actual database credentials.


4. **Run Prisma migrations:** So prisma creates the entities and stuff

   ```bash
   yarn prisma migrate dev --name init
   ```


## Running the Application

To start the server, run the following command:

```bash
yarn start
```

The server will run on `http://localhost:3002` by default.

## API Endpoints

Here are some of the available API endpoints:

| Method | Endpoint        | Description               |
|--------|-----------------|---------------------------|
| GET    | `/tasks/`       | Get all tasks             |
| POST   | `/tasks`        | Create a new task         |
| GET    | `/tasks/:id`    | Get a task by ID          |
| PUT    | `/tasks/:id`    | Update a task by ID       |
| DELETE | `/tasks/:id`    | Delete a task by ID       |

Thank you for checking out this project! If you have any questions or need further assistance, feel free to ask! 🚀
email: ernestorod27@gmail.com
```

Feel free to update sections like the project name, API endpoints, and any other specifics related to your application! If you need more help or details, just let me know!
