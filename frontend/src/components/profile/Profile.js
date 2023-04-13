import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentProfile, getProfileById } from '../../actions/profile';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';

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
    </Fragment>
  )
}

export default Profile