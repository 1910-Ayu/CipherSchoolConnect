import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './types';

export const getPosts = () =>{
    return async(dispatch,getState) =>{
        try{
            
            const {token} = getState().auth;
            
            const config = {
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            };


            const res = await axios.get('http://localhost:5000/api/posts',config);
        
            dispatch({
              type: GET_POSTS,
              payload: res.data
            });
          } catch (err) {
            dispatch({
              type: POST_ERROR,
              payload: { msg: err.response.statusText, status: err.response.status }
            });
          }

    }
};

export const addLike = id => {
    return async(dispatch,getState) =>{
        try {
     
            const {token} = getState().auth;
            
            const config = {
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            };

            const res = await axios.put(`http://localhost:5000/api/posts/like/${id}`, config);
        
            dispatch({
              type: UPDATE_LIKES,
              payload: { id, likes: res.data }
            });
          } catch (err) {
            dispatch({
              type: POST_ERROR,
              payload: { msg: err.response.statusText, status: err.response.status }
            });
          }
    }
}

export const removeLike =  id =>{
    return async(dispatch,getState) =>{
        try {

            const {token} = getState().auth;
            
            const config = {
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            };

            const res = await axios.put(`http://localhost:5000/api/posts/unlike/${id}`,config);
        
            dispatch({
              type: UPDATE_LIKES,
              payload: { id, likes: res.data }
            });
          } catch (err) {
            dispatch({
              type: POST_ERROR,
              payload: { msg: err.response.statusText, status: err.response.status }
            });
          }
    }
}

export const deletePost = id =>{
    return async(dispatch,getState) =>{
        try {
            const {token} = getState().auth;
            
            const config = {
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            };

            await axios.delete(`http://localhost:5000/api/posts/${id}`,config);
        
            dispatch({
              type: DELETE_POST,
              payload: id
            });
        
            dispatch(setAlert('Post Removed', 'success'));
          } catch (err) {
            dispatch({
              type: POST_ERROR,
              payload: { msg: err.response.statusText, status: err.response.status }
            });
          }
    }
}



export const addPost = formData =>{
    return  async(dispatch,getState) =>{
        try {

            const {token} = getState().auth;
            
            const config = {
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            };

            const res = await axios.post('http://localhost:5000/api/posts', formData, config);
        
            dispatch({
              type: ADD_POST,
              payload: res.data
            });
        
            dispatch(setAlert('Post Created', 'success'));
          } catch (err) {
            dispatch({
              type: POST_ERROR,
              payload: { msg: err.response.statusText, status: err.response.status }
            });
          }
    }
}

export const getPost = (id) =>{
    return async(dispatch,getState) =>{
        try {

            const {token} = getState().auth;
            
            const config = {
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            };
        
            const res = await axios.get(`http://localhost:5000/api/posts/${id}`,config);
        
            dispatch({
              type: GET_POST,
              payload: res.data
            });
          } catch (err) {
            dispatch({
              type: POST_ERROR,
              payload: { msg: err.response.statusText, status: err.response.status }
            });
          }
    }
}

export const addComment = (postId, formData) =>{
    return async(dispatch,getState) =>{
        try {
            const {token} = getState().auth;
            
            const config = {
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            };

            const res = await axios.post(`http://localhost:5000/api/posts/comment/${postId}`, formData,config);
        
            dispatch({
              type: ADD_COMMENT,
              payload: res.data
            });
        
            dispatch(setAlert('Comment Added', 'success'));
          } catch (err) {
            dispatch({
              type: POST_ERROR,
              payload: { msg: err.response.statusText, status: err.response.status }
            });
          }
    }
}

export const deleteComment = (postId, commentId) =>{
    return async(dispatch,getState) =>{
        try {
            const {token} = getState().auth;
            
            const config = {
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            };

            await axios.delete(`http://localhost:5000/api/posts/comment/${postId}/${commentId}`,config);
        
            dispatch({
              type: REMOVE_COMMENT,
              payload: commentId
            });
        
            dispatch(setAlert('Comment Removed', 'success'));
          } catch (err) {
            dispatch({
              type: POST_ERROR,
              payload: { msg: err.response.statusText, status: err.response.status }
            });
          }
    }
}

