# GTR-Duct

Gtr-Duct is an open-source project for Getir Hiring process. It is a simple web application that allows users to search for products and add them to their cart. It is built with React, Redux Toolkit, and Styled Components.

## Installation

To install the project, you need to have Node.js installed on your machine. Then, you can clone the project and run the following commands:

```bash
npm install
npm run dev
```

## API Description

Under api folder, there is a file called db.json. This file contains the items and companies data that are used in the project. You can use [json-server](https://github.com/typicode/json-server) to provide a REST API for the data. To do so, you can run the following command:

```bash
json-server --watch api/db.json --port 3001
```

If you run `npm run dev` command, it will run the json-server concurrently with the React application.

## Project Structure

Each component, atom, and molecule is placed under the components folder. All the pages are placed under the pages folder. The redux store is placed under the store folder. All react components developed to be reusable and scalable. So, you can use them to create new pages or components without any dependency.

## License

[MIT](https://choosealicense.com/licenses/mit/)
