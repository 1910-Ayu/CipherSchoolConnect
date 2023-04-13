import React from 'react'

const ProfileWeb = ({
    profile: {
    website,
    facebook,
    github,linkedin,twitter,instagram,
    
    }
  }) => {
  return (
    <div className="profile-top bg-primary p-2">
   <p>{website}</p>
   <p>{facebook}</p>
   <p>{facebook}</p>
   <p>{github}</p>
   <p>{linkedin}</p>
   <p>{twitter}</p>
   <p>{instagram}</p>
      
  </div>
  )
}

export default ProfileWeb