import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Panels from './components/panels/Panels';
import 'tachyons';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = null;
    this.state = {
      tasks : null  
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/tasks')
      .then(response => {
        return response.json()        
      })
      .then(data => {
        this.setState({tasks: data});
      })
  }  
      // .catch(function(error) {
      //   console.log('problem: ', error);
      // })    
  

  render() {  
    return (
      <div className="App">
        <NavBar />
        <Panels data = {this.state.tasks} />
      </div>
    );
  }
    
}

export default App;
