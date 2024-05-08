import Post from './Posts/Post';
import { createRef, Component } from 'react';
import React from 'react';


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post likeCount={p.likeCount} message={p.message} />)

  let newPostElement = React.createRef();

  let NewPostFunction = () => {
    let text = newPostElement.current.value;
    props.addPost(text); 
    newPostElement.current.value = '';
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.UpdateNewPostText(text);      
  };

  return (
      <>
          <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} style={{marginLeft:'10px'}} />
        <div>   
          <button onClick={NewPostFunction} style={{marginLeft:'10px'}}>add post</button>   
        </div>  
          {postsElements}
      </>
  );
}

export default MyPosts;