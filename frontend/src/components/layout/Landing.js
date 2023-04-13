import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Landing = () => {
    const {isAuthenticated} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    useEffect(()=>{
        if(isAuthenticated){
            return navigate('/posts');
        }
    })
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>A Social Media Platform for ChiperSchool Community</h1>
          <p className='lead'>
            Conect
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing