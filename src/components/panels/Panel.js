
/**
 * @module
 */
import React from 'react';
import TitleCard from '../card/TitleCard.js'
import 'tachyons';
import {getColorAndUrgAndImpText} from '../../common/common';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import Card, {newTask} from '../card/Card.js';

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
    this.state = {
      cardOpen: null,
      tasksNbr: props.tasksArray.length
    };
    this.uAndI = props.uAndI;
    const backGndAndUI = getColorAndUrgAndImpText(props.uAndI);
    this.bg = backGndAndUI.backGndColor;
    this.text = backGndAndUI.uAndIText;
    this.tasks = props.tasksArray;
    this.onTaskSave = this.onTaskSave.bind(this);
    this.deleteFromTasks = this.deleteFromTasks.bind(this);
    this.show = this.show.bind(this);
  };

  /**
   * Event handler when Save is clicked in a Card
   * @param {object} task 
   * @param {number} index Index in tasksArray
   */
  onTaskSave(task, index) {
    this.tasks[index] = task;
    this.show(task, index);
  }
  /**
   * Diplays task Card
   * @param {object} task 
   * @param {number} index Index in tasksArray
   */
  show(task, index) {
    if (!this.state.cardOpen) {
      this.setState({cardOpen : task});
      this.index = index;
    } else {
      this.setState({cardOpen : null});
    }
  };

  /**
   * Deletes the task from tasksArray
   * @param {number} index Index in tasksArray
   */
  deleteFromTasks(index) {
    delete this.tasks[index];
    this.setState({tasksNbr: this.tasks.length})
  }

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

        onDrop= {(ev) => {
          ev.preventDefault();
          let data = ev.dataTransfer.getData("text");
          data.uAndI = this.uAndI;
          this.tasks.push(data);
          this.setState({tasksNbr: this.tasks.length})
        }}

        onDragOver= {(ev) => {
          ev.preventDefault();
        }}

        style={{zIndex:-1}}>
        <ContextMenuTrigger id="PanelContextMenu">
          {this.text}
          {this.tasks.map((item, i) => {
            return (
              <TitleCard
                key = {item.cardName}
                task = {item}
                index = {i}
                onClick = {this.show}
                onTaskSave = {this.onTaskSave}
                onDeleteTask = {this.deleteFromTasks}/>)
          })}
          <div style={{position: 'fixed', left:'50%', top:'50%',
            transform:'translate(-50%, -50%)', zIndex : '1'}}>
              {card}
          </div>
        </ContextMenuTrigger>
        <ContextMenu id="PanelContextMenu">
          <MenuItem onClick={() => {
            this.show(newTask, this.tasks.length);
          }}>Create a task</MenuItem>
        </ContextMenu>
      </div>
    )
  };
};

export default Panel
