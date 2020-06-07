import React from 'react';
import 'tachyons';
import {getUAndIText} from '../../common/common';

const Card = (props) => {
  return (
    <div className="flex items-center vh-100">
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l
        bg-white mw5 center">
          <h1 className="f4 bold center mw5">{props.task.cardName}</h1>
        <ul className="list pl0 ml0 center mw5 ba b--light-silver br3">
          <li className="ph3 pv2 bb b--light-silver">What : {props.task.what}</li>
          <li className="ph3 pv2 bb b--light-silver">Who : {props.task.who}</li>
          <li className="ph3 pv2 bb b--light-silver">When : {props.task.when}</li>
          <li className="red ph3 pv2 bb b--light-silver">{getUAndIText(props.task.uAndI)}</li>
        </ul>
        <button className="f6 link dim br2 ba bw2 ph3 pv2 mb2 dib red"
          onClick={()=> props.onClick(null)}>Cancel</button>
        <button className="f6 link dim br2 ba bw2 ph3 pv2 mb2 dib dark-green"
          onClick={()=> props.onClick(null)}>Save</button>
      </article>
    </div>
  )
};

export default Card
