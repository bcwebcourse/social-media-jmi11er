import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar.js';
//import css from './Home.module.css';
//import publicUrl from 'utils/publicUrl';
import Post from './Post';

function Home(props) {
  const store = props.store;
  let {postId} = useParams();
  const posts = postId===undefined? store.posts:store.posts.filter(post => post.id === postId);

  function findUser(post){
    return store.users.find(user=>user.id===post.userId);
  }
  
  function findComments(post){
  return store.comments.filter(comment=>comment.postId===post.id);
  }
  
  function findLikes(post){
  let postLikes = store.likes.filter(like=>like.postId===post.id);
  return {
    self: postLikes.some(like=> like.userId===store.currentUserId),
    count: postLikes.length
  }
  }
  return (
  <div>
      {posts.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
      .map(post=>
				<Post
	        key={post.id}
	        user={findUser(post, store)}
	        post={post}
	        comments={findComments(post, store)}
          likes={findLikes(post, store)}
          onLike={props.onLike}
          onUnlike={props.onUnlike}
          onComment={props.onComment} 
	      />)}
        <Navbar/>
    </div>
  );
}

export default Home;