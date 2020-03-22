import React, {useState} from 'react';
import {
    Link
  } from "react-router-dom";
import css from './Post.module.css';
import publicUrl from 'components/utils/publicUrl';
import date from 'components/utils/timespan';

function Post(props) {
/*props includes use (id, photo), post (id, userID, photo, desc, datetime),
likes (self, count), and comments (an array, with each element having a userID and text)*/
    function handleUnlike(){
        console.log("unlike")
        props.onLike(props.post.id);
    }
    function handleLike(){
        console.log("like")
        props.onUnlike(props.post.id);
    }
    function handleSubmitComment(event){
        props.onComment(props.post.id, comment); // this calls addComment from App.js
        setComment(''); //reset
        setToggleComment(false); //close comment box
        event.preventDefault(); // prevent page refresh
      }
    const [comment, setComment] = useState('');
    const [toggleComment, setToggleComment] = useState(false);
    return (
    <div>
        <div className={css.topInfo}>
            <img className={css.profPic} src={publicUrl(props.user.photo)} alt="profPic"></img>
            <Link className={css.username} key={props.user.id} to={"/profile/".concat(props.user.id)}>
                <b>{props.user.id}</b>
            </Link>
        </div>
        <div>
            <img className={css.postPic} src={publicUrl(props.post.photo)} alt="postPic"></img>
        </div>
        <div className={css.likesNComments}>
            <button>
	            {props.likes.self?
                    <img src={publicUrl('/assets/unlike.svg')} alt='Unlike Action' onClick={handleUnlike}/> 
                    :
		            <img src={publicUrl('/assets/like.svg')} alt='Like Action' onClick={handleLike}/> 
	            }
            </button>
            <button onClick={e=>setToggleComment(!toggleComment)}>
                <img src={publicUrl('/assets/comment.svg')} alt='Comment Action'/> 
            </button>
        </div>
        <div className={css.likeCount}>
            <b>{props.likes.count} likes</b>
        </div>
        <div className={css.caption}>
            <b>{props.post.userId}</b> {props.post.desc}
        </div>
        {props.comments.map(item => {
                return(
                    <div key={item.datetime} className={css.comment}>
                        <b>{item.userId}</b> {item.text}
                    </div>
                );
            }
        )}
        {toggleComment && <form className={css.addComment} onSubmit={handleSubmitComment}>
            <input type="text" placeholder="Add a comment…" value={comment} onChange={e=>setComment(e.target.value)}/>
            <button type="submit">Post</button>
        </form>}
        <div className={css.timePosted}>
            {date(props.post.datetime)} ago
        </div>
    </div>
  );
}

export default Post;