import React from 'react'
import { useNavigate } from 'react-router-dom';



const Welcome = () => {
    const navigate = useNavigate();
  return (
    <div className='main-container'>
      <div className='left-container'>
        <h2 className='welcome'>Welcome to The Pathfinders Academy</h2>
        <div className="welcome-btn">
          <button onClick={() => navigate('/signup')}>SignUp</button>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
      <div className='img-container'>
        <img src="\src\assets\edu.jpg" alt="" />
      </div>
    </div>
  )
}

export default Welcome