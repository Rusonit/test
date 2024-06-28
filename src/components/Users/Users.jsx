import Class from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../images/user.png';

let Users = (props) => {

  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setUsers(response.data.items)
        });
    }
  };  
  
  return  <div className={Class.users}>
    <button onClick={getUsers}>get users</button> 
    { 
      props.users.map(u => 
        <div key={u.id}>
          <div>
            <img src={u.photos.small !=null ? u.photos.small : userPhoto} className={Class.userPhoto} />
          </div>
          <div>{u.name}</div>
          <div>{u.status}</div>
          <div>{'u.location.city'}</div>
          <div>{'u.location.country'}</div>
          <div>
            { u.followed 
              ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
              : <button onClick={()=> {props.follow(u.id)}}>Follow</button>  
            }
          </div>  
        </div> 
      )
    }   
  </div>
} 


export default Users;
