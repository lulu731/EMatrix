import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { getByText, getByRole, getByDisplayValue, fireEvent } from '@testing-library/react';
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
  
  const tasksNUI = [{cardName : 'TaskNUI0'}];
  it('display a text as not urgent & important', () => {
    act(() => {
      render(<Panel uAndI = 'nu&i' tasksArray = {tasksNUI}/>, container);
    });
    expect(container.textContent).toContain('TaskNUI0');
    expect(container.textContent).toContain('not Urgent & Important');
  });
  
  it('be able to create a task', () => {
    /**Right click on panel to open context menu */
    act(() => {
      render(<Panel uAndI = 'nu&i' tasksArray = {tasksNUI} />, container);
      const panel = getByText(container, 'not Urgent & Important'); 
      fireEvent.click(panel, {button : 2});
    });
    const newTask = getByText(container, 'Create a task');
    expect(newTask).not.toBeNull();
    /**Click on menu to open a new task */
    act(() => {
      fireEvent.click(newTask);
    })
    const card = getByRole(container, 'taskCard');
    expect(getByDisplayValue(card, /New Task/i)).not.toBeNull();
    /**Save task */
    act(() => {
      fireEvent.click(getByText(card, /Save/i));
    });
    expect(getByText(container, 'New Task')).not.toBeNull();
  });
});

