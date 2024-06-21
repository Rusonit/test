const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [ 
      { id: 1, name: 'Leonardo', img: 'https://www.mosigra.ru/image/cache/data/Photo/Leonardo2-1024x1024-wm.jpg'},
      { id: 2, name: 'Donatello', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBHBh2OHZBabHQG8b751j5vvmctc_yuunPRDG_J-LeeG62XN5tWwyPZBbLNJpmxNWmbk&usqp=CAU'},
      { id: 3, name: 'Mickelangelo', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMfMgWUPpom_70tuMN0yKaLmgbhAP6zLMeejWAqjN1lbBE55gb3UGVVodIvWC2YHhVeuY&usqp=CAU'},
      { id: 4, name: 'Rafael', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTva9CAfX7cu5fBpsoxxdpoXMxukQ74ndc5naNrXn7rwA&s'},
      { id: 5, name: 'Splinter', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6jn_RAFpQae2oomst2-vlK-Iu85fg8RoWxg&s'},
    ],    
    messages: [
      { id: 1, message: 'Cowabanga!'},  
      { id: 2, message: 'Hey Leo!'},
      { id: 3, message: 'Where is Casey?!'},      
      { id: 4, message: 'Nobody care, man!'},
      { id: 5, message: 'See y`all!'}
    ],
    newMessageText: 'click',
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE: {

      let newMessage = {
      id: 6,
      message: state.newMessageText
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      }
    };    
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.text  
      }
    };  
    default:
      return state;  
  };    
};        

export const addNewMessageActionCreater = () => ({type: 'ADD-MESSAGE'});

export const updateMessageTextActionCreater = (text) => {
  return {type: 'UPDATE-NEW-MESSAGE-TEXT', text: text}
};

export default dialogsReducer;