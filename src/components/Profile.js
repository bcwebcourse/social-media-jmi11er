import React, { useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';
import {
  Link
} from "react-router-dom";
import { useParams } from 'react-router-dom';
import Navbar from './Navbar.js';
import css from './Profile.module.css';
import publicUrl from 'components/utils/publicUrl';
import PostThumbnail from './PostThumbnail';
function Profile(props) {
  let {
    posts, users, followers, currentUserId, 
    addFollower, removeFollower
  } = useContext(StoreContext);

  let {userId} = useParams();
  const username = userId===undefined? currentUserId : userId;
  const user = users.filter(u => u.id===username)[0];
  const postsFiltered = posts.filter(post=>(post.userId===username));
  const followersFiltered = (followers.filter(pairing=>(pairing.userId===username))).length;
  const following = (followers.filter(pairing=>(pairing.followerId===username))).length;
  let isFollowing = followers.some(pair => pair.userId===username&& pair.followerId===currentUserId );

  function handleFollow(){
    console.log("follow")
    addFollower(username, currentUserId);
  }
  function handleUnfollow(){
    console.log("unfollow")
    removeFollower(username, currentUserId);
  }

  return (
    <div>
      <div className={css.topinfo}>
        <img className={css.profPic} src={publicUrl(user.photo)} alt="profPic"></img>
        <b className={css.username}>{user.id}</b>
        {isFollowing?
        <button className={css.unfollowBtn} onClick={handleUnfollow}>
          Unfollow
        </button>
        :<button className={css.followBtn} onClick={handleFollow}>
        Follow
      </button>
        }
      </div>
       <div className={css.bio}>
        <b>{user.name}</b><br></br>
        {user.bio}
       </div>
       <div className={css.info}>
         <p>
           {postsFiltered.length} posts
         </p>
         <p>
           {followersFiltered} followers
         </p>
         <p>
          {following} following
         </p>
       </div>
       <div className={css.posts}>
        {postsFiltered.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
        .map(post=>
          <Link key={post.id} to={"/".concat(post.id)}>
            <PostThumbnail photo={post.photo}/>
          </Link>)}
      </div>
      <Navbar/>
    </div>
  );
}

export default Profile;