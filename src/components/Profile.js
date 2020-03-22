import React from 'react';
import {
  Link
} from "react-router-dom";
import { useParams } from 'react-router-dom';
import Navbar from './Navbar.js';
import css from './Profile.module.css';
import publicUrl from 'components/utils/publicUrl';
import PostThumbnail from './PostThumbnail';
function Profile(props) {
  let {userId} = useParams();
  const username = userId===undefined? props.store.currentUserId : userId;
  const user = props.store.users.filter(u => u.id===username)[0];
  const posts = props.store.posts.filter(post=>(post.userId===username));
  const followers = (props.store.followers.filter(pairing=>(pairing.userId===username))).length;
  const following = (props.store.followers.filter(pairing=>(pairing.followerId===username))).length;
  let isFollowing = props.store.followers.some(pair => pair.userId===username&& pair.followerId===props.store.currentUserId );
  console.log(isFollowing);
  console.log(props.store.followers);

  function handleFollow(){
    console.log("follow")
    props.onFollow(username, props.store.currentUserId);
    console.log(props.store.followers);
  }
  function handleUnfollow(){
    console.log("unfollow")
    props.onUnfollow(username, props.store.currentUserId);
    console.log(props.store.followers);
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
           {posts.length} posts
         </p>
         <p>
           {followers} followers
         </p>
         <p>
          {following} following
         </p>
       </div>
       <div className={css.posts}>
        {posts.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
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