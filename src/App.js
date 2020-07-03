import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Panels from './components/panels/Panels';
import 'tachyons';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tasks :   {
        "tasks" : {
          "tasksUI": [],
          "tasksNUI": [],
          "tasksUNI": [],
          "tasksNUNI": []
        }
      }
    }
  }

  componentDidMount() {
    // console.log('in did mount');
    const resp = fetch('http://localhost:3000/')
      // .then(function(response) {
      //   // this.setState({tasks : response});
      //   console.log('response répondue');
        
      //   if (response.ok)
      //   {console.log('in response');}
      //   else
      //   {console.log('response pas OK');
      //   }
        
      // })
      // .catch(function(error) {
      //   console.log('problem');
      // })
    console.log('out did mount', resp);
    
  }

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
