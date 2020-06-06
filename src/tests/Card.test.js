import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import Card from '../components/card/Card';
import {tasks} from './data/tasks.js';

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

const taskNUI0 = tasks.tasks.tasksNUI[0];
it('card init', () => {
  act(() => {
    render(<Card task = {taskNUI0}/>, container);
  });
  expect(container.textContent).toContain('TaskNUI0');
  expect(container.textContent).toContain('Who : Raph');
  expect(container.textContent).toContain('When : Tomorrow');
  expect(container.textContent).toContain('not Urgent & Important');
});
