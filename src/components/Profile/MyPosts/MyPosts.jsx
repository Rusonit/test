import Post from './Posts/Post';

const MyPosts = (props) => {


  let postsElements = props.posts.map(p => <Post likeCount={p.likeCount} message={p.message} />)

  return (
      <>
          <textarea style={{marginLeft:'10px'}}></textarea>
        <div>   
          <button style={{marginLeft:'10px'}}>add post</button>   
        </div>  
          {postsElements}
      </>
  );
}

export default MyPosts;