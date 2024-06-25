import Class from './Users.module.css';

let Users = (props) => {

  let users = props.users.map(u => 
    <div key={u.id} className={Class.users}>
      <div>{u.fullName}</div>
      <div>{u.status}</div>
      <div>{u.location.city}</div>
      <div>{u.location.country}</div>
      <div><img src={u.fotoUrl} className={Class.userPhoto} /></div>  
      <div> 
        { u.followed 
          ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
          : <button onClick={()=> {props.follow(u.id)}}>Follow</button> }
      </div>
    </div>
  )

  return (
    <div>{users}</div>
  )
}


export default Users;
