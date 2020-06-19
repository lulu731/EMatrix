
/**
 * @module
 */
import React from 'react';
import TitleCard from '../card/TitleCard.js'
import 'tachyons';
import {getColorAndUrgAndImpText} from '../../common/common';
import Card from '../card/Card.js';

/**
 * Panel component.
 * @class
 * @extends React.Component
 */
class Panel extends React.Component {
  /**
   * @constructor
   * @param {object} props uAndI - tasksArray
   */
  constructor(props) {
    super(props);
    this.state = {cardOpen: null};
    const backGndAndUI = getColorAndUrgAndImpText(props.uAndI);
    this.bg = backGndAndUI.backGndColor;
    this.text = backGndAndUI.uAndIText;
    this.tasks = props.tasksArray;
    this.onTaskSave = this.onTaskSave.bind(this);
    this.show = this.show.bind(this);
  };

  onTaskSave(task, index) {
    this.tasks[index] = task;
    this.show(task, index);
  }

  show(task, index) {
    if (!this.state.cardOpen) {
      this.setState({cardOpen : task});
      this.index = index;
    } else {
      this.setState({cardOpen : null});
    }
  };

  render() {
    let card = null;
    if (this.state.cardOpen) {
      card = <Card task = {this.state.cardOpen}
        index = {this.index}
        onCancelClick = {this.show}
        onSaveClick = {this.onTaskSave}
      />;
    };
    const classProp = this.bg + " fl w-50 h-100 ba tc";
    return (
      <div className={classProp}
        style={{zIndex:-1}}>
        {this.text}
        {this.tasks.map((item, i) => {
          return (
            <TitleCard
              key = {item.cardName}
              task = {item}
              index = {i}
              onClick = {this.show}
              onTaskSave = {this.onTaskSave}/>)
        })}
        <div  style={{position: 'fixed', left:'50%', top:'50%',
        transform:'translate(-50%, -50%)', zIndex : '1'}}>
          {card}
        </div>
      </div>
    )
  };
};

export default Panel
