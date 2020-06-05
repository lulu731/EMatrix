import React from 'react';
import Panel from '../panels/Panel.js'
import Card from '../card/Card.js'
import 'tachyons';

class Panels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOpen: null,
      data : props.data
    };
    this.tasks = this.state.data;
    this.show = this.show.bind(this);
  };

  render() {
    let card = null;
    if (this.state.cardOpen) {
      card = <Card cardName = {this.state.cardOpen} />;
    };
    let tasksUI = this.tasks.tasks[0].tasksUI;
    let tasksNUI = this.tasks.tasks[1].tasksNUI;
    let tasksUNI = this.tasks.tasks[2].tasksUNI;
    let tasksNUNI = this.tasks.tasks[3].tasksNUNI;
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
