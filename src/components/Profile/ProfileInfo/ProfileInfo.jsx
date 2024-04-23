import Class from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={Class.content}>  
      <div>
        <img src='https://avatars.dzeninfra.ru/get-zen_doc/9529784/pub_6420b0585b71617e5f830c9e_6420b0b2863b9b098303b8c3/scale_1200' />
      </div> 
      <div className={Class.discription}>  
        ava + discription 
      </div>
    </div>   
  )
} 

export default ProfileInfo;