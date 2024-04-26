import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

  let dialogs = [
    { id: 1, name: 'Leonardo'},
    { id: 2, name: 'Donatello'},
    { id: 3, name: 'Mickelangelo'},
    { id: 4, name: 'Rafael'},
    { id: 5, name: 'Splinter'}
  ];

  let messages = [
    { id: 1, message: 'Cowabanga!'},
    { id: 2, message: 'Hey Leo!'},
    { id: 3, message: 'Where is Casey?2!'}
  ];
 
 let posts = [
  {id: 1, likeCount: 7, message: 'Hey thats first post!'},
  {id: 2, likeCount: 15, message: 'Yahooo!'},
  {id: 3, likeCount: 4, message: 'Map is work!'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
