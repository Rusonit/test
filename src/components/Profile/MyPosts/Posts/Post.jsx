import Class from './Post.module.css';

const Post = (props) => {
    return (
        <div className={Class.post}>
            <div className={Class.ava}>    
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJX9Z7F3WXcgy6_fL0MTCs7v3nXq5ERE9obA&s' />
                {props.message}
            </div>
            <span>like: {props.likeCount} </span> 
        </div>
    );
}

export default Post;