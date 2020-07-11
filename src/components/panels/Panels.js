/**
 * @module
 */
import React from 'react';
import Panel from '../panels/Panel.js'
import 'tachyons';

/**
 * Panels component
 * @param {object} props data object with tasks
 * @returns {component} A Panels component
 */
const Panels = (props) => {
  const data = props.data;
  
  /**
   * @todo: implement to update json object with all tasks in app.
   */
  const onTasksUpdate = () => {
  };
  
  if (data) {
    return (
      <div className="vh-100" style={{position: "absolute",
      left: 0 , right: 0}}>
        <div className="vh-50">
          <Panel uAndI = 'u&i' tasksArray = {data.tasks.tasksUI}
            onTaskChange= {onTasksUpdate}/>
          <Panel uAndI = 'nu&i' tasksArray = {data.tasks.tasksNUI}
            onTaskChange= {onTasksUpdate}/>
        </div>
        <div className="vh-50">
          <Panel uAndI = 'u&ni' tasksArray = {data.tasks.tasksUNI}
            onTaskChange= {onTasksUpdate}/>
          <Panel uAndI = 'nu&ni' tasksArray = {data.tasks.tasksNUNI}
            onTaskChange= {onTasksUpdate}/>
        </div>
      </div>
    )
  } else {return null}
  
};

export default Panels
