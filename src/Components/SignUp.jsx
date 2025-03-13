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
    <div className="max-w-md mx-auto p-4">
      <h2 className='text-xl font-bold mb-4'>Student Registration</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold mb-2">Full Name</label>
          <input
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold mb-2">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold mb-2">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="text-sm font-semibold mb-2">Address</label>
          <input
            id="address"
            type="text"
            placeholder="Enter Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md"
          />
        </div>
    
        <div className="flex flex-col">
          <label htmlFor="level" className="text-sm font-semibold mb-2">Level</label>
          <input
            id="level"
            placeholder="Level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
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
        <button type='submit' className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
