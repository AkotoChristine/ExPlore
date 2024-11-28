

# Project Name: EXploreGH

## Description  
"A  web application that centralizes details on festivals, cultural experiences, adventure opportunities, and natural resources.

---



## Prerequisites
Before you begin, ensure you have the following installed on your computer:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: [Download MongoDB](https://www.mongodb.com/try/download/community)
- **Git**: [Download Git](https://git-scm.com/)
- A modern web browser (e.g., Chrome, Firefox)

---

## Installation

### Step 1: Clone the Repository
```bash
git clone (https://github.com/AkotoChristine/ExPlore.git)
cd ExploreGH
```

### Step 2: Install Dependencies
Navigate to the project folder and install the required dependencies:
```bash
npm install
```

### Step 3: Set Up the Environment Variables
- Create a `.env` file in the root directory.
- Add the following variables:
  ```
  MONGODB_URI=your-mongodb-connection-string
  PORT=5000
  ```

### Step 4: Seed the Database
Run the seed script to populate your database with initial data:
```bash
node seed.js
```

---

## Running the Project

### Start the Backend Server
Run the backend server:
```bash
npm run start
```
or for development mode:
```bash
npm run dev
```

### Start the Frontend
Navigate to the `frontend` directory and start the frontend server:
```bash
cd frontend
npm install
npm start
```

---

## Accessing the Application
Once the servers are running:
- Open your browser and navigate to [http://localhost:3000](http://localhost:3000) for the frontend.
- The backend API runs on [[http://localhost:5000](http://localhost:5000)](https://explore-2.onrender.com).

---



---

## License
[Specify your project's license, e.g., MIT License.]

---

