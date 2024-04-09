import Class from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={Class.content}>
            <img src='https://avatars.dzeninfra.ru/get-zen_doc/9529784/pub_6420b0585b71617e5f830c9e_6420b0b2863b9b098303b8c3/scale_1200' />
        <div />
        <div>
            ava + discription 
        </div> 

        <MyPosts />   
        </div> 

    )
}

export default Profile; 