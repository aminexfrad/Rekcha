#  Rekcha

## 📖 Description
**Rekcha** is a real-time chat application built with a **Node.js** backend and a **React** frontend. The application supports user authentication, messaging, and real-time updates using **Socket.IO**. It is designed to provide a seamless chat experience for users, allowing them to communicate effectively and efficiently.

## 🚀 Features
- **User Authentication**: Users can sign up, log in, and log out securely.
- **Real-Time Messaging**: Users can send and receive messages instantly.
- **User Presence Indication**: Users can see who is online and available to chat.
- **Responsive Design**: The application is designed to work on various devices, including desktops and mobile devices.

## 🛠️ Installation
### Prerequisites
- Ensure you have **Node.js** installed (version 14 or higher).
- Install **MongoDB** and ensure it is running locally or have access to a MongoDB Atlas account.

### Backend Installation
1. **Navigate to the `backend` directory**:
   ```bash
   cd backend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Create a `.env` file**:
   - Copy the `.env.example` file (if available) to create your `.env` file:
     ```bash
     cp .env.example .env
     ```
   - Add the necessary environment variables:
     ```
     MONGODB_URL=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```
4. **Run the server**:
   ```bash
   npm start
   ```

### Frontend Installation
1. **Navigate to the `frontend` directory**:
   ```bash
   cd frontend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```

### Accessing the Application
- The frontend will be accessible at `http://localhost:5173`.
- The backend API will be accessible at `http://localhost:8080/api`.

## 💻 Usage
- Access the application at `http://localhost:5173` for the frontend.
- The backend API is accessible at `http://localhost:8080/api`.

## 🤝 Contributing
- Contributions are welcome! Please open an issue or submit a pull request. Ensure to follow the project's coding standards and guidelines.

## 👨‍💻 Developer
- **Name**: [Kabir Khan](http://www.linkedin.com/in/weirdsht)
  - **Role**: Lead Developer
  - **GitHub**: [GitHub Profile](https://github.com/weirdshxt)

## 🎉 Acknowledgments
- Acknowledge any libraries, frameworks, or resources used in the project.

