import Class from './Users.module.css';

let Users = (props) => {


  let users2 = props.users.map(u => 
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

    if (users2.length === 0) {
    props.setUsers(
      [{id: 1, fotoUrl: 'https://t4.ftcdn.net/jpg/05/66/05/55/360_F_566055532_TVl1zRxXpTJYVHAq8RwrI2r2LQvu7oN3.jpg',
      followed: true, fullName: 'Jake', status: 'This is a sheriff', location: {country: 'France', city: 'Paris'}},
    {id: 2, fotoUrl: 'https://t4.ftcdn.net/jpg/05/66/05/55/360_F_566055532_TVl1zRxXpTJYVHAq8RwrI2r2LQvu7oN3.jpg',
      followed: false, fullName: 'Jimmy', status: 'Super human', location: {country: 'Italy', city: 'Rome'}},
    {id: 3, fotoUrl: 'https://t4.ftcdn.net/jpg/05/66/05/55/360_F_566055532_TVl1zRxXpTJYVHAq8RwrI2r2LQvu7oN3.jpg',
      followed: true, fullName: 'Bobby', status: 'Just person', location: {country: 'Russia', city: 'Moscow'}},
    ])
  }

  return (
    <div>{users2}</div>
  )
}


export default Users;
