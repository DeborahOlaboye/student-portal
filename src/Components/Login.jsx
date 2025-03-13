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
    <div className="max-w-md mx-auto p-6">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold mb-2">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-semibold mb-2">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login