let initialState = {
    topFriends: [
      {id: 1, name: 'April', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6ue7bil5ujkcnc_sAggQe1oaDj1vplabxw&s'},
      {id: 2, name: 'Bibop', img: 'https://action-figure.ru/wp-content/uploads/2023/03/Podvizhnaya-figurka-Bibop-Cherepashki-Nindzya-Bebop-Teenage-Mutant-Ninja-Turtles-BST-AXN-Figure-ot-Loyal-Subjects-LS0003..jpg'},
      {id: 3, name: 'Rocksteady', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHqoq05hmpm0PFIq-t2WDh_houuJHgPSFR6kHmOb3Fg&s'},
    ]
  };


const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;