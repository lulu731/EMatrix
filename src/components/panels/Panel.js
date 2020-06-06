import React from 'react';
import TitleCard from '../card/TitleCard.js'
import 'tachyons';
import {getBackgndAndUrgAndImp} from '../../common/common'

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = props.onClick;
    const backGndAndUI = getBackgndAndUrgAndImp(props.uAndI);
    this.bg = backGndAndUI.backGnd;
    this.text = backGndAndUI.uAndI;
    this.tasks = props.tasksArray;
  };

  render() {
    return (
      <div>
        <div className="fl w-50 h-100 ba tc" className = {this.bg}
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
      </div>
    )
  };
};

export default Panel
