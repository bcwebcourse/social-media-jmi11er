import React, {createContext, useState, useEffect} from 'react';
import initialStore from 'components/utils/initialStore';
import uniqueId from 'components/utils/uniqueId';

// export the context so that other components can import
export const StoreContext = createContext(); 

function StoreContextProvider(props){
  const [store, setStore] = useState(()=>{
    return JSON.parse(window.localStorage.getItem('store')) || initialStore;
});

useEffect(()=>{
	window.localStorage.setItem('store', JSON.stringify(store));
}, [store]);

    function removeLike(postId){
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
      function addLike(postId){
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
        <StoreContext.Provider value = {{...store, addComment, addLike, removeLike, 
        addPost, addFollower, removeFollower}}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider; // export this component as default