import Post from './Posts/Post';

const MyPosts = () => {
  let posts = [
    {id: 1, likeCount: 7, message: 'Hey thats first post!'},
    {id: 2, likeCount: 15, message: 'Yahooo!'},
    {id: 3, likeCount: 4, message: 'Map is work!'}
  ]  

  let postsElements = posts.map(p => <Post likeCount={p.likeCount} message={p.message} />)

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