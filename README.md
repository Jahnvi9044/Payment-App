# Payment App

[![Deployment](https://img.shields.io/badge/Deployment-Vercel-brightgreen)](https://payment-app-123.vercel.app/)

Deployed Link-https://payment-app-123.vercel.app/

## _The Ultimate Payment Management Solution_


The Payment App is a comprehensive platform designed to facilitate seamless payment operations. It incorporates CRUD (Create, Read, Update, Delete) functionalities, making it highly dynamic and user-friendly. The application is powered by a backend with a MongoDB database containing three primary tables:

- **User**: Stores user-related information.
- **Account**: Manages account details.
- **Query**: Handles user queries and feedback.

The application provides an efficient way to manage payments, account details, and user interactions.

---

## Features

- CRUD operations for users, accounts, and queries.
- Integrated backend with MongoDB for reliable data management.
- Modular design for easy scalability and maintenance.

---

## Technologies Used

- **Frontend**: React (or any specified framework/library)
- **Backend**: Node.js, Express
- **Database**: MongoDB

---

## Create a .env file in the Backend folder and add the following data :
```
NODE_ENV=development    # For local development
PORT=3000

jwtSecret = "Write jwt secret here"
dbstring = "paste the mongodb Connection String Here + /PaymentApp"
```

## Create a .env file in the Frontend folder and add the following data :
```
NODE_ENV=development
VITE_API_URL=http://localhost:3000  # Development URL

```

---
### Clone the repository
```
git clone <repository-link>
```

### Backend Setup
```
cd Backend
npm install
npm run start
```

### Frontend Setup (in a separate terminal)
```
cd Frontend
npm install
npm run dev
```


## To run in development mode , follow the steps :
### Add this script in Backend -> package.json
```
"scripts": {
    "start": "cross-env NODE_ENV=production node index.js",
    "dev": "cross-env NODE_ENV=development nodemon index.js"
  }
```

### Backend
```
npm install --save-dev nodemon
npm install --save-dev cross-env
npm run dev

```
### Frontent 
```
npm run dev
```

## To run in Production mode , follow the steps :
### Backend
```
npm run start

```


### Frontend
```
cd Frontend
npm run build
npm install -g serve
serve -s dist
```
.......It will show something like this 
[100%] build completed in 5.1s.
Now serving /dist at http://localhost:5000



## Contribution
**Want to contribute? Great!**
Feel free to fork the repository and submit a pull request for any enhancements or fixes. Contributions are always welcome!
