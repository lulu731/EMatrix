import React from 'react';
import TitleCard from '../card/TitleCard.js'
import 'tachyons';
import {getColorAndUrgAndImpText} from '../../common/common'

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = props.onClick;
    const backGndAndUI = getColorAndUrgAndImpText(props.uAndI);
    this.bg = backGndAndUI.backGndColor;
    this.text = backGndAndUI.uAndIText;
    this.tasks = props.tasksArray;
  };

  render() {
    const classProp = this.bg + " fl w-50 h-100 ba tc";
    return (
      <div className={classProp}
        style={{zIndex:-1}}>
        {this.text}
        {this.tasks.map((item, i) => {
          return (
            <TitleCard
              key = {i}
              task = {item}
              onClick = {this.onClick}/>)
        })}
      </div>
    )
  };
};

export default Panel
