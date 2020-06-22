
/**
 * @module
 */
import React from 'react';
import 'tachyons';

/**
 * TitleCard component with cardName.
 * @param {object} props onClick - task - onDragTAsk
 * @returns {component} TitleCard
 */
const TitleCard = (props) => {
  function dragStart(ev) {
    ev.dataTransfer.setData("text", props.task);
    props.onDragTask(props.index);
  }
  
  return (
    <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4"
      draggable="true" 
      onDragStart= {dragStart}
      onClick= {() => {props.onClick(props.task, props.index)}}>
      <h6 className="f6 bg-near-white br3 br black-60 mv0 pv2 ph3">
        {props.task.cardName}
      </h6>
    </article>
  )
};

export default TitleCard
