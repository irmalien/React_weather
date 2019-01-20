// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'; // './' indicates same 
import ApprovalCard from './ApprovalCard';

// function getButtonText(){
//   return "Click on me!";
// }

// create a react component
const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <div>
        <h4>Warning</h4>
      Are you sure?
      </div>

    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail 
        avatar={faker.image.avatar()} 
        author={faker.internet.userName()} 
        timeAgo="Today at 2:15AM"
        comment={faker.lorem.text()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail 
        avatar={faker.image.avatar()} 
        author={faker.internet.userName()}  
        timeAgo="Today at 2:15AM"
        comment={faker.lorem.text()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail 
        avatar={faker.image.avatar()} 
        author={faker.internet.userName()}  
        timeAgo="Yesterday at 3:33PM"
        comment={faker.lorem.paragraph()}
      />
    </ApprovalCard>
    </div>
); 
}

// Take the react component and show on screen

ReactDOM.render( <
  App / > ,
  document.querySelector('#root')
);