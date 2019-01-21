// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'
// import faker from 'faker';

//create React class-based component


class App extends React.Component {
  // constructor(props) {
  //   super(props); //super refers to parent of class - React.Component
  //   //this.state is ONLY time we DIRECTLY assign value to STATE
  //   this.state = {lat: null, errorMessage: ''};
  // }
  //alternative to constructor
  state={lat: null, errorMessage: ''}


  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      //!!!! ALWAYS update value using setState()
      (position) => {this.setState({ lat: position.coords.latitude })},
      (err) => this.setState({ errorMessage: err.message }) 
    );
    console.log('my component rendered to screen')
  }

  componentDidUpdate(){
    console.log('my component was updated')
  }

  //helper method
  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }
      return <Loader message="Please accept location request"/>
  }

  //React says we have to define render!
  render() {
    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

// Take the react component and show on screen
ReactDOM.render( <
  App / > ,
  document.querySelector('#root')
);