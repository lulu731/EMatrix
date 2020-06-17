import React from 'react';
import Panel from '../panels/Panel.js'
import 'tachyons';

const Panels = (props) => {
  const data = props.data;
  return (
    <div className="vh-100" style={{position: "absolute",
    left: 0 , right: 0}}>
      <div className="vh-50">
        <Panel uAndI = 'u&i' tasksArray = {data.tasks.tasksUI}/>
        <Panel uAndI = 'nu&i' tasksArray = {data.tasks.tasksNUI}/>
      </div>
      <div className="vh-50">
        <Panel uAndI = 'u&ni' tasksArray = {data.tasks.tasksUNI}/>
        <Panel uAndI = 'nu&ni' tasksArray = {data.tasks.tasksNUNI}/>
      </div>
    </div>
  )
};

export default Panels
