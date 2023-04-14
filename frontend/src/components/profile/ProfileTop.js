import React from 'react'

const ProfileTop = ({
    profile: {
        about,
      user: { _id, name, avatar }
    }
  }) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
        
    </div>
  )
}

export default ProfileTop;