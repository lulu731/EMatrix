
/**
 * @module
 */
import React from 'react';
import 'tachyons';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import '../../common/react-contextmenu.css';


/**
 * TitleCard component with cardName.
 * @param {object} props onClick - task - onDragTAsk
 * @returns {component} TitleCard
 */
const TitleCard = (props) => {
  function dragStart(ev) {
    ev.dataTransfer.setData("text", props.task);
    /**Sends task index to panel to delete task in tasksArray*/
    props.onDeleteTask(props.index);
  }
  
  const idProp = `${props.task.uAndI}_${props.index}`
  return (
    <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4"
      draggable="true" 
      onDragStart= {dragStart}
      onClick= {() => {props.onClick(props.task, props.index)}}>
      <ContextMenuTrigger id={idProp}>
        <h6 className="f6 bg-near-white br3 br black-60 mv0 pv2 ph3">
          {props.task.cardName}
        </h6>
      </ContextMenuTrigger>
      <ContextMenu id={idProp}>
        <MenuItem onClick={(event) => {
          props.onDeleteTask(props.index);
          event.stopPropagation();
            // this.show(newTask, this.tasks.length);
          }}>Delete the task</MenuItem>
        </ContextMenu>
    </article>
  )
};

export default TitleCard
