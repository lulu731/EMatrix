import React from 'react';
import Card from '../card/Card.js'
import TitleCard from '../card/TitleCard.js'
import 'tachyons';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    if (props.uAndI === 'u&i') {this.bg = 'bg-red'};
    this.tasks = props.tasksArray;
  };

  render() {
    return (
      <div>
        <div className="fl w-50 h-100 ba {this.bg} tc"
          style={{zIndex:-1}}>
          Urgent & Important
          {this.tasks.forEach((item, i) => {
            <TitleCard title = {item}/>
          })}
        </div>
      </div>
    )
  };
};

export default Panel
