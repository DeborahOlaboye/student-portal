import React from 'react'
import { useNavigate } from 'react-router-dom';



const Welcome = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1 className="text-3xl font-bold text-center my-4">Welcome to The Pathfinders Academy</h1>
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/signup')}>SignUp</button>
    </div>
  )
}

export default Welcome