import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { Link } from 'react-router-dom';

const Post = () => {
    const dispatch = useDispatch();
    const params = useParams();
    console.log(params.id);
    
    const { post } = useSelector((state)=> state.post);
    console.log(post);
    useEffect(()=>{
        dispatch(getPost(params.id));
        
    },[]);
  return (
    <Fragment>
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Fragment>
  )
}

export default Post