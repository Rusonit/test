import Class from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
      <div className={Class.content}>
        <ProfileInfo />
        <MyPostsContainer store={props.store} />
      </div> 
    )
}

export default Profile; 