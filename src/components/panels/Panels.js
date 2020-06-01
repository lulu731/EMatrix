import React from 'react';
import Panel from '../panels/Panel.js'
import Card from '../card/Card.js'
import 'tachyons';

const tasksUI = ['TaskUI0', 'task1', 'task2'];
const tasksNUI = ['TaskNUI0', 'task1'];
const tasksUNI = ['TaskUNI0', 'task1', 'task2'];
const tasksNUNI = ['TaskNUNI0', 'task1', 'task2'];

class Panels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOpen: null,
    };
    this.show = this.show.bind(this);
  };

  render() {
    let card = null;
    if (this.state.cardOpen) {
      card = <Card cardName = {this.state.cardOpen} />;
    };
    return (
      <div>
        <div style={{zIndex:-1, position: "absolute",
        left: 0 , right: 0}} >
          <div className="vh-50">
            <Panel uAndI = 'u&i' tasksArray = {tasksUI}
            onClick = {this.show}/>
            <Panel uAndI = 'nu&i' tasksArray = {tasksNUI}
            onClick = {this.show}/>
          </div>
          <div className="vh-50">
            <Panel uAndI = 'u&ni' tasksArray = {tasksUNI}
            onClick = {this.show}/>
            <Panel uAndI = 'nu&ni' tasksArray = {tasksNUNI}
            onClick = {this.show}/>
          </div>
          {card}
      </div>
    </div>
    )
  };

  show(cardName) {
    this.setState({cardOpen : cardName});
  };
};

export default Panels
