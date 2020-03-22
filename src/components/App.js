import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import css from './App.module.css';

import Header from './Header.js';
import Home from './Home.js';
import Explore from './Explore.js';
import NewPost from './NewPost.js';
import Activity from './Activity.js';
import Profile from './Profile';

import initialStore from 'components/utils/initialStore';
import uniqueId from 'components/utils/uniqueId';

function App(){
  const [store, setStore] = useState(initialStore);
  //console.log(store);
  function addLike(postId){
    const like = {
        userId: store.currentUserId, 
        postId,
        datetime: new Date().toISOString()
    };
    
    setStore({
      ...store,
      likes:store.likes.concat(like)
    });
  }
  function removeLike(postId){
    setStore({
      ...store,
      //the spread simply passes the attributes of store that are not changed (so all but likes) into the new store so that the store isn't overwritten only to contain likes
      likes: store.likes.filter(like=>!(like.userId===store.currentUserId && like.postId===postId))
    });
  }
  function addComment(postId, text){
    const comment = {
      userId: store.currentUserId, 
      postId,
      text,
      datetime: new Date().toISOString()
    };
    setStore({
      ...store,
        comments:store.comments.concat(comment)
    });
  }
  function addPost(photo, desc){
    console.log(photo,'PHOTO')
    const newpost ={
      id: uniqueId('post'),
      userId : store.currentUserId,
      photo,
      desc,
      datetime: new Date().toISOString()
    }
    console.log(newpost, 'newPOST')
    console.log(store.posts)
    setStore({
      ...store,
        posts:store.posts.concat(newpost)
    });
  }
  function addFollower(userId, followerId){
    const newpair = {userId, followerId};
    setStore({
      ...store,
      followers:store.followers.concat(newpair)
    });
  }
  function removeFollower(userId, followerId){
    setStore({
      ...store,
      //the spread simply passes the attributes of store that are not changed (so all but likes) into the new store so that the store isn't overwritten only to contain likes
      followers: store.followers.filter(pair=>!(pair.userId===userId && pair.followerId===followerId))
    });
  }


  return (
		<Router basename={process.env.PUBLIC_URL}>
      <div>
        <Header/>
      </div>
			<div className={css.content}>
        <Switch>
          <Route path="/profile/:userId?">
            <Profile 
              store={store}
              onFollow={addFollower}
              onUnfollow={removeFollower}/>
          </Route>
          <Route path="/activity">
            <Activity/>
          </Route>
          <Route path="/explore">
            <Explore/>
          </Route>
          <Route path="/newpost">
          <NewPost 
            store={store} 
            addPost={addPost}/>
          </Route>
          <Route path="/:postId?">
          <Home 
            store={store}
            onUnlike={addLike}
            onLike={removeLike}
            onComment={addComment}/>
          </Route>
        </Switch>
			</div>
		</Router>
	);
}
export default App;
