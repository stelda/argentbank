## Description

This project was undertaken as part of a software developer training with a specific emphasis on JavaScript React.

This app has been bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

## Available Scripts

To run the application and the API, follow these steps:

### 1. Clone the Repository

Clone the repository from GitHub and navigate to the project directory:
In the project directory, you can run:

```bash
git clone https://github.com/stelda/argentbank.git
```

### 2. Install dependencies for the React application

```bash
cd argentbank
npm install
```

### 3. Install dependencies for the API

```bash
cd api
npm install
```

### 3. Populate database with two users

```bash
cd api
npm run populate-db
```

### 4. Start the API

```bash
cd api
npm run dev:server
```

Runs the API in development mode.
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.
Visit [http://localhost:3001/api-docs](http://localhost:3001/api-docs) to view the API documentation.

### 5. Start the React application

```bash
cd argentbank
npm start
```

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.