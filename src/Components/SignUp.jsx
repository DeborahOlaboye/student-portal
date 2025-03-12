import React, { useState } from 'react'

export function SignUp({ onSignup }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [grade, setGrade] = useState('');

  

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
          <label htmlFor="grade" className="text-sm font-semibold mb-2">Grade</label>
          <input
            id="grade"
            placeholder="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
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
