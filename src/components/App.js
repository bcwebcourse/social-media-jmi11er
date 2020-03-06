import React, {useState} from 'react';
import css from './App.module.css';

import Header from './Header.js';
import Home from './Home.js';
import Navbar from './Navbar.js';
import Explore from './Explore.js';
import NewPost from './NewPost.js';
import Activity from './Activity.js';
import Profile from './Profile';

import initialStore from 'components/utils/initialStore';
import uniqueId from 'components/utils/uniqueId';

function App(){
    const [page, setPage] = useState('home');
    const [store, setStore] = useState(initialStore);
    //this.addLike = this.addLike.bind(this);
		//this.removeLike = this.removeLike.bind(this);
  /*setPage = (current) => {
    this.setState({page: current})
  }*/
  function renderMain(page){
    if (page==='home'){
      console.log(page)
      return(<Home 
        store={store}
        onUnlike={addLike}
        onLike={removeLike}
        onComment={addComment}
        />);
    }
    else if (page==='explore'){
      console.log(page)
      return(<Explore/>);
    }
    else if (page==='newpost'){
      console.log(page)
      return(<NewPost
      store={store}
      addPost={addPost}
      cancelPost={cancelPost}
      />);
    }
    else if (page==='activity'){
      console.log(page)
      return(<Activity/>);
    }
    else{
      console.log(page)
      return(<Profile
        store={store}
      />);
    }
  }
  function render(){
    return (
      <div className={css.container}>
        <Header/>
        <main className={css.content}>
          {renderMain(page)} 
        </main>
        <Navbar onNavChange={setPage}/>
      </div>
      );
  }
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
		// TODO:
		// 1. Create a new post object (use uniqueId('post') to create an id)
		// 2. Update the store 
    // 3. Call setPage to come back to the home page
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
    setPage('home');
  }
	function cancelPost(){
    setPage('home');
	}
  return render();
}
export default App;
