const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {id: 1, fotoUrl: 'https://t4.ftcdn.net/jpg/05/66/05/55/360_F_566055532_TVl1zRxXpTJYVHAq8RwrI2r2LQvu7oN3.jpg',
      followed: true, fullName: 'Jake', status: 'This is a sheriff', location: {country: 'France', city: 'Paris'}},
    {id: 2, fotoUrl: 'https://t4.ftcdn.net/jpg/05/66/05/55/360_F_566055532_TVl1zRxXpTJYVHAq8RwrI2r2LQvu7oN3.jpg',
      followed: false, fullName: 'Jimmy', status: 'Super human', location: {country: 'Italy', city: 'Rome'}},
    {id: 3, fotoUrl: 'https://t4.ftcdn.net/jpg/05/66/05/55/360_F_566055532_TVl1zRxXpTJYVHAq8RwrI2r2LQvu7oN3.jpg',
      followed: true, fullName: 'Bobby', status: 'Just person', location: {country: 'Russia', city: 'Moscow'}},
    ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: 
      return {
        ...state,
        //users: [...state.users]  =  users: state.users.map(u => u);

        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        }),
      };   
    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }  
          return u;
        }),
      }
    case SET_USERS:
      return {
        ...state, users: [...state.users, ...action.users] 
      }  

    default:
      return state;
  };
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;