import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function SignUp({ onSignup }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [level, setLevel] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use the navigate hook to redirect to the login page

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newStudent = { name, email, phone, address, level, password };

    // Save student data to localStorage
    const students = JSON.parse(localStorage.getItem('students')) || [];

    // Check if a student with the same email already exists
    const emailExists = students.some(student => student.email === newStudent.email);

    if (emailExists) {
      alert('This email is already registered.');
    } else {
      students.push(newStudent);
      localStorage.setItem('students', JSON.stringify(students));

    onSignup(newStudent);
    navigate('/login'); // Redirect to the login page
    }
  };

  return (
    <div className="main-container">
      <div className='left-container'>
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className='input-details'>
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              placeholder="Enter Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-details">
            <label htmlFor="phone">Phone Number *</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="input-details">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-details">
            <label htmlFor="address">Address *</label>
            <input
              id="address"
              type="text"
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
    
          <div className="input-details">
            <label htmlFor="level">Level *</label>
            <input
              id="level"
              placeholder="Enter Your Level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
            />
          </div>

          <div className="input-details">
            <label htmlFor="password">Password *</label>
            <input
              id="password"
              type="password"
              placeholder="Set Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
        <div className="footnote">
          <p>Already have an account?</p>
          <button onClick={() => navigate('/login')}>Login Here</button>   
        </div>
      </div>
      <div className='img-container'>
        <img src="\src\assets\edu.jpg" alt="" />
      </div>
    </div>
  );
}

export default SignUp;
