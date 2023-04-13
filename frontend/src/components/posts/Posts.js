import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/post';
import PostForm from './PostForm';
import PostItem from './PostItem';

const Posts = () => {
    
    const {posts} = useSelector((state)=> state.post);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    },[]);
  return (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to the community
      </p>
      <PostForm/>
      <div className="posts">
        {posts.map((post) => (
          <PostItem key= {post._id} post={post} />
        ))}
      </div>
    </Fragment>
  )
}

export default Posts;