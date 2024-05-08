import Class from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
      <div className={Class.content}>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts} 
        addPost={props.addPost}
        UpdateNewPostText ={props.UpdateNewPostText} />
      </div> 
    )
}

export default Profile; 