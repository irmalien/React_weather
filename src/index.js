// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create a react component
const App = () => {
  return (
  <div>
    <label for="name">Enter name:</label>
    <input id="name" type="text" />
    <button style="background-color: blue; color: white;">Submit</button>
  </div>
); 
}

// Take the react component and show on screen

ReactDOM.render( <
  App / > ,
  document.querySelector('#root')
);