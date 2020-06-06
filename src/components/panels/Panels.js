import React from 'react';
import Panel from '../panels/Panel.js'
import Card from '../card/Card.js'
import 'tachyons';

class Panels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOpen: null,
    };
    this.data = props.data;
    this.show = this.show.bind(this);
  };

  render() {
    let card = null;
    if (this.state.cardOpen) {
      card = <Card task = {this.state.cardOpen} />;
    };
    let tasksUI = this.data.tasks.tasksUI;
    let tasksNUI = this.data.tasks.tasksNUI;
    let tasksUNI = this.data.tasks.tasksUNI;
    let tasksNUNI = this.data.tasks.tasksNUNI;
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

  show(task) {
    this.setState({cardOpen : task});
  };
};

export default Panels
