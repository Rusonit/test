import Post from './Posts/Post';
import { createRef, Component } from 'react';
import React from 'react';


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post likeCount={p.likeCount} message={p.message} />)

  let newPostElement = React.createRef();

  let addPost = () => {
   //props.addPost();
   props.dispatch({type: 'ADD-POST'}); 
  };

  let onPostChange = () => {
    let newText = newPostElement.current.value;
    // props.UpdateNewPostText(text);
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newText});       
  };

  return (  
      <>
          <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} style={{marginLeft:'10px'}} />
        <div>   
          <button onClick={addPost} style={{marginLeft:'10px'}}>add post</button>   
        </div>  
          {postsElements}
      </>
  );
}

export default MyPosts;