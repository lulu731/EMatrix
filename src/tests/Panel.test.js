import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { getByText, getByRole, getByDisplayValue, queryByText, fireEvent, getNodeText } from '@testing-library/react';
import Panel from '../components/panels/Panel';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Panel component should', () => {
  const tasksUI = [
    {cardName : 'TaskUI0'},
    {cardName : 'TaskUI1'},
    {cardName : 'TaskUI2'}];
  it('display a text as urgent & important and show several tasks', () => {
    act(() => {
      render(<Panel uAndI = 'u&i' tasksArray = {tasksUI}/>, container);
    });
    expect(container.textContent).toContain('TaskUI1');
    expect(container.textContent).toContain('Urgent & Important');
  });
  
  const tasksNUI = [{cardName : 'TaskNUI0'},
                    {cardName : 'TaskNUI1'}];
  it('display a text as not urgent & important', () => {
    act(() => {
      render(<Panel uAndI = 'nu&i' tasksArray = {tasksNUI}/>, container);
    });
    expect(container.textContent).toContain('TaskNUI0');
    expect(container.textContent).toContain('not Urgent & Important');
  });
  
  it('be able to create a task', () => {
    /**Right click on panel to open context menu */
    var tasksNUI = [{cardName : 'TaskNUI0'},
                    {cardName : 'TaskNUI1'}];
    act(() => {
      render(<Panel uAndI = 'nu&i' tasksArray = {tasksNUI} />, container);
      const panel = getByText(container, 'not Urgent & Important'); 
      fireEvent.click(panel, {button : 2});
    });
    const createNewTask = getByText(container, 'Create a task');
    expect(createNewTask).not.toBeNull();
    /**Click on menu to open a new task */
    act(() => {
      fireEvent.click(createNewTask);
    })
    const card = getByRole(container, 'taskCard');
    expect(getByDisplayValue(card, /New Task/i)).not.toBeNull();
    expect(getByText(card, 'not Urgent & Important')).not.toBeNull();
    /**Save task */
    act(() => {
      fireEvent.click(getByText(card, /Save/i));
    });
    expect(getByText(container, 'New Task')).not.toBeNull();    
  });

  it('be able to delete a task', () => {
    /**Right click on a titleTask to open context menu */
    var tasksNUI = [{cardName : 'TaskNUI0'}]; 
    
    act(() => {
      render(<Panel uAndI = 'nu&i' tasksArray = {tasksNUI} />, container);
      const titleCard = getByText(container, 'TaskNUI0'); 
      fireEvent.click(titleCard, {button : 2});
    });
    const menu = getByText(container, 'Delete the task');
    /**Click on menu to delete the task */
    act(() => {
      fireEvent.click(menu);
    })
    expect(queryByText(container, 'TaskNUI0')).toBeNull();    
  });
});

