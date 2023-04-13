import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

const Profiles = () => {
    const dispatch = useDispatch();
    const {profiles} = useSelector((state)=>state.profile);

    useEffect(()=>{
       dispatch(getProfiles());
    },[]);
  return (
    <Fragment>
    <Fragment>
          <h1 className='large text-primary'>All Users</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Browse and connect 
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
        </Fragment>
  )
}

export default Profiles;