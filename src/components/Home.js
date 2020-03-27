import { useParams } from 'react-router-dom';
import Navbar from './Navbar.js';
//import css from './Home.module.css';
//import publicUrl from 'utils/publicUrl';
import Post from './Post';
import React, { useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';

function Home(props) {
  let {
    posts, users, comments, likes, currentUserId, 
    addComment, addLike, removeLike
  } = useContext(StoreContext);
  let {postId} = useParams();
  const postsFiltered = postId===undefined? posts:posts.filter(post => post.id === postId);

  function findUser(post){
    return users.find(user=>user.id===post.userId);
  }
  
  function findComments(post){
  return comments.filter(comment=>comment.postId===post.id);
  }
  
  function findLikes(post){
  let postLikes = likes.filter(like=>like.postId===post.id);
  return {
    self: postLikes.some(like=> like.userId===currentUserId),
    count: postLikes.length
  }
  }
  return (
  <div>
      {postsFiltered.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
      .map(post=>
				<Post
	        key={post.id}
	        user={findUser(post)}
	        post={post}
	        comments={findComments(post)}
          likes={findLikes(post)}
          onLike={addLike}
          onUnlike={removeLike}
          onComment={addComment} 
	      />)}
        <Navbar/>
    </div>
  );
}

export default Home;