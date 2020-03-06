import React from 'react';
import css from './Profile.module.css';
import publicUrl from 'components/utils/publicUrl';
import PostThumbnail from './PostThumbnail';
function Profile(props) {
  const userId = props.store.currentUserId;
  const curUserAr = props.store.users.filter(user=>(user.id===userId));
  const user = curUserAr[0];
  const posts = props.store.posts.filter(post=>(post.userId===userId));
  const followers = (props.store.followers.filter(pairing=>(pairing.userId===userId))).length;
  const following = (props.store.followers.filter(pairing=>(pairing.followerId===userId))).length;
  console.log(user);
  return (
    <div>
      <div className={css.topinfo}>
        <img className={css.profPic} src={publicUrl(user.photo)} alt="profPic"></img>
        <b className={css.username}>{user.id}</b>
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
			  	<PostThumbnail
          photo={post.photo}
	       />)}
      </div>
    </div>
  );
}

export default Profile;