import React from 'react'
import { Link } from 'react-router-dom'

const ProfileItem = ({
    profile: {
        user: { _id, name, avatar },
        interests,
        website,
        about,
        linkedin,
        facebook
      }
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {} {about && <span>  {about}</span>}
        </p>
      
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {interests.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProfileItem