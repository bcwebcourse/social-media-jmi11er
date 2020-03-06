import React from 'react';
import css from './PostThumbnail.module.css';
import publicUrl from 'components/utils/publicUrl';

function PostThumbnail(props){
    return(
    <img className={css.image} src={publicUrl(props.photo)} alt="thumbnail"></img>
    );
}
export default PostThumbnail;