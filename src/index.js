// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
import CommentDetail from './CommentDetail' // './' indicates same directory

// function getButtonText(){
//   return "Click on me!";
// }

// create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM"/>
      <CommentDetail author="Alex" timeAgo="Today at 2:15AM"/>
      <CommentDetail author="Jane" timeAgo="Yesterday at 3:33PM"/>
    </div>
); 
}

// Take the react component and show on screen

ReactDOM.render( <
  App / > ,
  document.querySelector('#root')
);