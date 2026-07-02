# AromaTrace

Batch Traceability and Certificate Management System

## Database Choice

This project uses MongoDB Atlas as the database because it provides flexible document-based storage and is suitable for managing products, users, and sales records efficiently.

## Database Schema

The project contains the following entities:

### User
- email
- password

### Product
- p_name
- p_price
- p_stock
- userId

### Sales
- cust_name
- cust_email
- cust_contact
- cartItems
- userId

## Database Schema Diagram

![Database Schema](./images/schema-diagram.png)

## Backend Setup

### Install Dependencies

```bash
npm install
```

### Create .env File

Create a `.env` file inside Backend folder and add:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
CORS_ORIGIN=http://localhost:5173
PORT=8000
```

### Run Backend

```bash
npm start
```

## Frontend Setup

### Install Dependencies

```bash
npm install
```

### Run Frontend

```bash
npm run dev
```