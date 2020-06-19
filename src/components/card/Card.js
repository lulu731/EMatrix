/**
 * @module
 */
import React from 'react';
import 'tachyons';
import {getColorAndUrgAndImpText} from '../../common/common';

const getValue = (elementId) => {
  return document.getElementById(elementId).value;
}
/**
 * Card component describing a task.
 * @param {object} props task - onCancelClick - onSaveClick - index
 * @returns {component} Card
 */
const Card = (props) => {
    const task = props.task;
    const onCancelClick = props.onCancelClick;
    const onSaveClick = props.onSaveClick;
    const index = props.index;
    const {uAndIText, textColor} = getColorAndUrgAndImpText(task.uAndI);
    const color = textColor +" ph3 pv2 bb b--light-silver";
    return (
        <article role = 'taskCard' className="br2 ba dark-gray b--black-10 mv4
          bg-white mw5 center">
          <input className="f4 bold center mw5" type='text' id="cardName"
            defaultValue={task.cardName}></input>
          <ul className="list pl0 ml0 center mw5 ba b--light-silver br3">
            <li className="ph3 pv2 bb b--light-silver">What :
              <input type="text" id="what" defaultValue={task.what}/></li>
            <li className="ph3 pv2 bb b--light-silver">Who :
              <input type="text" id="who" defaultValue={task.who}/></li>
            <li className="ph3 pv2 bb b--light-silver">When :
              <input type="text" id="when" defaultValue={task.when}/></li>
            <li className={color}>{uAndIText}</li>
          </ul>
          <button className="f6 link dim br2 ba bw2 ph3 pv2 mb2 dib red"
            onClick={()=> onCancelClick(null)}>Cancel</button>
          <button className="f6 link dim br2 ba bw2 ph3 pv2 mb2 dib dark-green"
            onClick={()=> onSaveClick(
            {cardName: getValue("cardName"),
            what: getValue("what"),
            who: getValue("who"),
            when: getValue("when"),
            uAndI : task.uAndI}, index)}>Save</button>
        </article>
    )
};

export default Card
