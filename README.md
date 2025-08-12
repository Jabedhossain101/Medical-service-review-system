# Medical Service Web Application

A modern, responsive React web application for managing medical services and user reviews. The app features user authentication, service listing, detailed service views, and a user-friendly review system with smooth animations using Lottie.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Demo


[Live Demo](https://service-review-system-51389.web.app/)

---

## Features

- User registration and login with email/password and Google OAuth
- Add and manage medical services with images, descriptions, categories, and pricing
- Submit and manage user reviews with ratings and comments
- Responsive design compatible with all screen sizes
- SweetAlert2 notifications for user-friendly alerts
- Lottie animations for engaging UI effects
- Secure API integration for CRUD operations on services and reviews

---

## Technologies Used

- React.js (with hooks and context API)
- React Router DOM
- Axios for API calls
- SweetAlert2 for alerts and confirmations
- Lottie React for animations
- Tailwind CSS for styling
- Firebase Authentication (or other auth provider)
- Node.js & Express (Backend API assumed)
- MongoDB (Database for services and reviews)

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- Access to backend API server
- Firebase project setup 

### Installation

1. Clone the repository:


git clone https://github.com/Jabedhossain101/Medical-service-review-system.git
cd rafsan-service
Install dependencies:

bash
Copy
Edit
npm install
Full install command (to install all dependencies together)
bash
Copy
Edit
npm install react react-dom react-router react-router-dom axios sweetalert2 lottie-react firebase
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Configure environment variables:

Create a .env file and add your Firebase config and backend API URL, e.g.:

env
Copy
Edit
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_API_BASE_URL=https://rafsan-service.vercel.app
Start the development server:

bash
Copy
Edit
npm start
Project Structure
bash
Copy
Edit
/src
  /assets          # Lottie animation files and images
  /components      # Reusable UI components (e.g., ReviewRow, Navbar)
  /context         # React Contexts for Auth and other state management
  /pages           # Page components (Login, Register, Details, AddService, etc.)
  /hooks           # Custom React hooks
  /services        # API helper functions (axios calls)
  App.js
  index.js
API Endpoints
POST /service - Add new medical service

GET /service/:id - Get service details

POST /reviews - Submit review

GET /reviews/:serviceId - Get reviews for a service

DELETE /reviews/:id - Delete review by ID

POST /users - Register/save user profile

Note: Backend code is assumed to be running separately.

Authentication
Email/password sign-up and login

Google OAuth integration

Auth context manages user state and session

Usage
Navigate to the registration page to create an account

Login with email/password or Google account

View medical services and add new ones (admin or authorized users)

Submit reviews with ratings and comments

Manage and delete your reviews

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a feature branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request

License
This project is licensed under the MIT License.

Contact
Created by [Your Name] - feel free to contact me!

Email: ahmedrafsan101@gmail.com

LinkedIn: https://www.linkedin.com/in/mdjabedhossain12

GitHub: https://github.com/Jabedhossain101

Thank you for checking out the project!
