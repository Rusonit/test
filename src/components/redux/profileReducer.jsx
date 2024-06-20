const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = { 
  posts: [
    {id: 1, likeCount: 7, message: 'Hey thats first post!'},    
    {id: 2, likeCount: 15, message: 'Yahooo!'},
    {id: 3, likeCount: 4, message: 'Map is work!'}
  ],
  newPostText: 'sidebar',
}; 

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id:4,
        likeCount: 10,
        message: state.newPostText
      };   
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];   
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    };  
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    };  
    default: 
      return state;  
  };
};        


export const addPostActionCreater = () => ({type: 'ADD-POST'});

export const onPostChangeActionCreater = (newText) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: newText}
};

export default profileReducer;
