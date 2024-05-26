const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id:4,
        likeCount: 10,
        message: state.newPostText
      };    
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default: 
      return state;
  };
};        


export const addPostActionCreater = () => ({type: 'ADD-POST'});

export const onPostChangeActionCreater = (newText) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: newText}
};

export default profileReducer;
