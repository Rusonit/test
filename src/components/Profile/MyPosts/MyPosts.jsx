import Post from './Posts/Post';

const MyPosts = (props) => {


  let postsElements = props.posts.map(p => <Post likeCount={p.likeCount} message={p.message} />)

  return (
      <div>
          <textarea style={{marginLeft:'10px'}}></textarea>
        <div>   
          <button style={{marginLeft:'10px'}}>add post</button>   
        </div>  
          {postsElements}
      </div>
  );
}

export default MyPosts;