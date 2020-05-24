import React from 'react';
import Card from '../card/Card.js'
import TitleCard from '../card/TitleCard.js'
import 'tachyons';

const tasks = ['task0', 'task1', 'task2'];
const Panels = () => {
  return (
    <div>
      <div style={{zIndex:-1, position: "absolute",
      left: 0 , right: 0}} >
      <div className="vh-50">
        <div className="fl w-50 h-100 ba bg-red tc"
          style={{zIndex:-1}}>
          Urgent & Important
          {tasks.map((item, i) =>{
            return (
              <TitleCard
                key = {i}
                title = {item}/>
            )
          })}
        </div>
        <div className="fl ba w-50 h-100 bg-blue tc"
          style={{zIndex:-1}}>
          not Urgent & Important
        </div>
      </div>
      <div className="vh-50">
        <div className="fl w-50 h-100 ba bg-light-blue tc"
          style={{zIndex:-1}}>
          Urgent & not Important
          <TitleCard />
          <TitleCard />
          <TitleCard />
        </div>
        <div className="fl ba w-50 h-100 bg-green tc">
          not Urgent & not Important
        </div>
      </div>
    </div>
  </div>
  )
};

export default Panels
