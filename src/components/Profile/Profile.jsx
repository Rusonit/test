import Class from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
      <div className={Class.content}>
        <ProfileInfo />
        <MyPostsContainer />
      </div> 
    )
}

export default Profile; 