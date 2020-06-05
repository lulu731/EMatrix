import React from 'react';
import TitleCard from '../card/TitleCard.js'
import 'tachyons';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = props.onClick;
    switch (props.uAndI) {
      case 'u&i':
        this.bg = 'bg-red';
        this.text = 'Urgent & Important';
        break;
      case 'nu&i':
        this.bg = 'bg-blue';
        this.text = 'not Urgent & Important';
        break;
      case 'u&ni':
        this.bg = 'bg-light-blue';
        this.text = 'Urgent & not Important';
        break;
      case 'nu&ni':
        this.bg = 'bg-green';
        this.text = 'not Urgent & not Important';
        break;
    }
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
                title = {item.cardName}
                onClick = {this.onClick}/>)
          })}
        </div>
      </div>
    )
  };
};

export default Panel
