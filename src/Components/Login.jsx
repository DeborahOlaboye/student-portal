import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      // Fetch all students from localStorage
      const students = JSON.parse(localStorage.getItem('students')) || [];

      // Find the student that matches the entered email and password
      const student = students.find((s) => s.email === email && s.password === password);

      if (student) {
        onLogin(); // Trigger onLogin passed from parent
        navigate('/dashboard'); // Redirect to Student Portal page
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('Please enter both email address and password');
    }
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-details">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-details">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </form>
        <div className="footnote">
          <p>Yet to have an account?</p>
          <button onClick={() => navigate('/signup')}>SignUp Here</button>   
        </div>
      </div>
      <div className='img-container'>
        <img src="\src\assets\edu.jpg" alt="" />
      </div>
    </div>
  );
}

export default Login