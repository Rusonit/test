import Post from './Posts/Post';

const MyPosts = () => {
    return (
        <div>
            <textarea style={{marginLeft:'10px'}}></textarea> 
            <button style={{marginLeft:'10px'}}>add post</button>   
            <Post message='Bom shaka laka!' likeCount='7'/>
            <Post message='Why so serious?!' likeCount='2'/>
        </div>    
    );
}

export default MyPosts;