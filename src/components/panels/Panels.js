import React from 'react';
import Panel from '../panels/Panel.js'
// import TitleCard from '../card/TitleCard.js'
import 'tachyons';

const tasksUI = ['TaskUI0', 'task1', 'task2'];
const tasksNUI = ['TaskNUI0', 'task1'];
const tasksUNI = ['TaskUNI0', 'task1', 'task2'];
const tasksNUNI = ['TaskNUNI0', 'task1', 'task2'];

const Panels = () => {
  return (
    <div>
      <div style={{zIndex:-1, position: "absolute",
      left: 0 , right: 0}} >
        <div className="vh-50">
          <Panel uAndI = 'u&i' tasksArray = {tasksUI}/>
          <Panel uAndI = 'nu&i' tasksArray = {tasksNUI}/>
        </div>
        <div className="vh-50">
          <Panel uAndI = 'u&ni' tasksArray = {tasksUNI}/>
          <Panel uAndI = 'nu&ni' tasksArray = {tasksNUNI}/>
        </div>
    </div>
  </div>
  )
};

export default Panels
