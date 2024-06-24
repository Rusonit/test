const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {id: 1, followed: true, fullName: 'Jake', status: 'This is a sheriff', location: {city: 'Paris', country: 'France'}},
    {id: 2, followed: false, fullName: 'Jimmy', status: 'Super human', location: {city: 'Italy', country: 'Rome'}},
    {id: 3, followed: true, fullName: 'Bobby', status: 'Just person', location: {city: 'Russia', country: 'Moscow'}},

  ];
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
        });
      };   
    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }  
          return u;
        });
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
export const setUsersAC (users) => ({type: SET_USERS, users});


export default usersReducer;