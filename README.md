# AromaTrace

Batch Traceability and Certificate Management System

A modern full-stack inventory and batch traceability application developed as part of the **TBI GEU SIP 2026 – AI-Assisted Full Stack Development Internship**.

The application enables businesses to manage products, track inventory, maintain sales records, generate invoices, and create AI-powered product descriptions. It is built with a React frontend, Express REST API, and MongoDB Atlas database.

---

# Tech Stack

## Frontend

- React
- Vite
- Redux Toolkit
- Tailwind CSS
- Axios
- React Router DOM
- React Markdown

## Backend

- Node.js
- Express.js
- JWT Authentication
- Passport.js
- Express Validator
- Express Rate Limit
- REST API
- CORS
- Dotenv
- Google Gemini API

## Database

- MongoDB Atlas
- Mongoose ODM

## Tools

- Git & GitHub
- VS Code
- Postman
- MongoDB Compass
- Draw.io

---

# Project Structure

```text
AROMATRACE
│
├── Backend
│   ├── Controllers
│   ├── Db
│   ├── Middleware
│   ├── Models
│   ├── Routes
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── constants.js
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── passport.js
│   ├── validation.js
│   └── README.md
│
├── Frontend
│   ├── public
│   ├── src
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── README.md
│
├── images
│   └── schema_diagram.png
│
├── PROMPTS.md
└── README.md
```

---

# Features

- User Authentication (JWT)
- Google Login
- Product Management
- Product CRUD Operations
- Sales Management
- Invoice Generation
- Dashboard
- Product Search
- Stock Management
- MongoDB Atlas Integration
- RESTful APIs
- Redux State Management
- Backend Validation
- API Rate Limiting
- Responsive User Interface
- Authenticated Dashboard
- AI Product Description Generator
- Form Validation
- Loading & Error Handling
- Responsive Design (Mobile, Tablet & Desktop)

---

# AI Feature (Week 7)

The application includes an AI-powered Product Description Generator using the **Google Gemini API**.

### AI Workflow

- User enters the product name.
- Frontend sends the request to the backend.
- Backend calls the Gemini API.
- AI generates a professional product description.
- The generated description is displayed instantly inside the application.

### AI Features

- Generate AI Description
- Regenerate AI Description
- Loading State
- Error Handling
- Markdown Rendering

---

# Database Choice

This project uses MongoDB Atlas as the database because it provides flexible document-based storage and is suitable for managing products, users, and sales records efficiently.

---

# Database Schema

The project contains the following entities.

## User

- email
- password

## Product

- p_name
- p_price
- p_stock
- userId

## Sales

- cust_name
- cust_email
- cust_contact
- cartItems
- userId

---

# Database Schema Diagram

![Database Schema](./images/schema_diagram.png)

---

# REST API Endpoints

## Authentication

- POST /login
- POST /register
- POST /google-login

## Products

- GET /products
- GET /products/:id
- POST /products
- PUT /products/:id
- DELETE /products/:id

## Sales

- GET /sales
- POST /sales
- DELETE /sales/:id

## AI

- POST /ai/suggestion

---

# Backend Setup

## Install Dependencies

```bash
npm install
```

## Create .env File

Create a `.env` file inside the **Backend** folder and add:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
CORS_ORIGIN=http://localhost:5173
PORT=8000
GEMINI_API_KEY=your_gemini_api_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Run Backend

```bash
npm start
```

---

# Frontend Setup

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

---

# API Testing

All REST APIs were successfully tested using Postman.

## Authentication APIs

- Login
- Register
- Google Login

## Product APIs

- Add Product
- Update Product
- Delete Product
- View Products

## Sales APIs

- Create Sale
- View Sales
- Delete Sale

## AI APIs

- Generate Product Description

---

# Internship Progress

## Week 1

- Project Planning
- GitHub Repository Setup

## Week 2

- React + Vite Setup
- Tailwind CSS Integration
- Reusable Components

## Week 3

- UI Improvements
- Responsive Design
- Component Library

## Week 4

- Express Backend
- REST API Development
- Frontend & Backend Integration

## Week 5

- MongoDB Atlas Integration
- Mongoose Models
- CRUD Operations
- Database Schema Design
- Postman API Testing

## Week 6

- JWT Authentication
- Google Login Integration
- Express Validator
- API Rate Limiting

## Week 7

- Google Gemini API Integration
- AI Product Description Generator
- Prompt Engineering
- Markdown Rendering
- Loading State
- Error Handling
- PROMPTS.md Documentation

## Week 8

- Connected Frontend with Live Backend APIs
- Authenticated Dashboard
- Complete CRUD User Flows
- Frontend Validation & User Feedback
- AI Feature UI Polish
- Responsive UI for Mobile, Tablet & Desktop
- Loading & Error State Handling
- Network API Verification

## Week 9

- Deployed Frontend on Vercel
- Deployed Backend on Render
- Configured Production Environment Variables
- Updated CORS for Production Deployment
- Connected Live Frontend with Live Backend
- Verified Authentication on Production
- Verified CRUD Operations on Live Deployment
- Verified AI Product Description Generator on Live App
- Updated README with Live Deployment Details
- End-to-End Testing Completed on Public URL

---

# Future Improvements

- Role-Based Access Control
- Admin Analytics Dashboard
- Product Image Upload
- Batch QR Code Generation
- Email Notifications
- Inventory Reports
- AI Batch Quality Analysis
- AI Sales Insights
- React Error Boundary
- Performance Optimization (useMemo & useCallback)

---

# Live Deployment

## Frontend



## Backend



## Known Limitations (Free Tier)

- Render free tier may spin down after a period of inactivity.
- The first request after inactivity may take 30–60 seconds to respond.

---

# Author

**Abhishek Kumar**

**Intern ID:** TBI-26100937

**TBI GEU SIP 2026**

**AI-Assisted Full Stack Development Internship**