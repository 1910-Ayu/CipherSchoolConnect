import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

export const register = formData =>{
    return async(dispatch,getState)=>{
        try {
            const res = await axios.post('http://localhost:5000/api/users', formData);
           
            dispatch({
              type: REGISTER_SUCCESS,
              payload: res.data
            });
        
            localStorage.setItem("auth",JSON.stringify(getState().auth));
          } catch (err) {
            localStorage.removeItem("auth");
            const errors = err.response.data.errors;
        
            if (errors) {
              errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            }
        
            dispatch({
              type: REGISTER_FAIL
            });
          }
    }
}

export const login =(email,password) =>{
    return async(dispatch,getState)=>{
        try {
            const body ={email,password};
            const res = await axios.post('http://localhost:5000/api/auth', body);
           
        
            dispatch({
              type: LOGIN_SUCCESS,
              payload: res.data
            });
        
            localStorage.setItem("auth",JSON.stringify(getState().auth));
        
        
          } catch (err) {
            localStorage.removeItem("auth");
            const errors = err.response.data.errors;
        
            if (errors) {
              errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            }
        
            dispatch({
              type: LOGIN_FAIL
            });
        }
    }
}