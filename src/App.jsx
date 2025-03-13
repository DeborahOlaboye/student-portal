import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import StudentPortal from './Components/StudentPortal';

function App() {
  const [students, setStudents] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Sync students with localStorage on initial load
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  // Handle student signup and save to localStorage
  const handleSignup = (student) => {
    const updatedStudents = [...students, student];
    setStudents(updatedStudents);

    // Save the updated students array to localStorage
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true); // Set user as logged in
  };

  return (
    <Router>
      <div>
        <h1 className="text-3xl font-bold text-center my-4">Welcome to The Pathfinders Academy</h1>

        <Routes>
          {/* Home Route (Login & SignUp) */}
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <div className="flex justify-center gap-4">
                  <Login onLogin={handleLogin} />
                  <SignUp onSignup={handleSignup} />
                </div>
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />

          {/* Login Route */}
          <Route
            path="/login"
            element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />}
          />

          {/* SignUp Route */}
          <Route path="/signup" element={<SignUp onSignup={handleSignup} />} />

          {/* Protected Student Portal Route */}
          <Route
            path="/dashboard"
            element={isLoggedIn ? <StudentPortal students={students} /> : <Navigate to="/" />}
          />

          {/* Default Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
