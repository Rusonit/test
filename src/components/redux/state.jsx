import {rerenderEntireTree} from '../../../src/render';


let state = {
  profilePage: { 
    posts: [
      {id: 1, likeCount: 7, message: 'Hey thats first post!'},    
      {id: 2, likeCount: 15, message: 'Yahooo!'},
      {id: 3, likeCount: 4, message: 'Map is work!'}
    ]
  },
  dialogsPage: {
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
    ]
  },  
  sidebar: {
    topFriends: [
      {id: 1, name: 'April', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6ue7bil5ujkcnc_sAggQe1oaDj1vplabxw&s'},
      {id: 2, name: 'Bibop', img: 'https://action-figure.ru/wp-content/uploads/2023/03/Podvizhnaya-figurka-Bibop-Cherepashki-Nindzya-Bebop-Teenage-Mutant-Ninja-Turtles-BST-AXN-Figure-ot-Loyal-Subjects-LS0003..jpg'},
      {id: 3, name: 'Rocksteady', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHqoq05hmpm0PFIq-t2WDh_houuJHgPSFR6kHmOb3Fg&s'},
    ]
  }
};

export let addPost = (newText) => {
  let newPost = {
    id:4,
    likeCount: 10,
    message: (newText)
  }
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;




 
