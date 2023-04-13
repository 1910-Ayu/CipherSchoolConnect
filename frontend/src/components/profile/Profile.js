import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentProfile, getProfileById } from '../../actions/profile';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileWeb from './ProfileWeb';
import ProfileInfo from './ProfileInfo';
import ProfileInterest from './ProfileInterest';

const Profile = () => {

    const dispatch = useDispatch();
    const profile = useSelector((state)=> state.profile);
    const auth = useSelector((state)=> state.auth);
    const params = useParams();
    useEffect(()=>{
        dispatch(getProfileById(params.id));
    },[]);
    
  return (
    <Fragment>
    <Link to="/profiles" className="btn btn-light">
      Back To Profiles
    </Link>
    <div className="profile-grid my-1">
      <ProfileTop profile={profile}/>
      <ProfileWeb profile={profile}/>
      <div className="profile-exp bg-white p-2">
        <ProfileInfo profile={profile}/>
        </div>
        <div className="profile-edu bg-white p-2">
          <ProfileInterest profile={profile}/>
        </div>
      </div>
    </Fragment>
  )
}

export default Profile