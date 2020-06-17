import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { getByText, getByDisplayValue, fireEvent } from '@testing-library/react';
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
  expect(getByDisplayValue(container, 'TaskNUI0')).not.toBeNull();
  expect(getByDisplayValue(container, 'Raph')).not.toBeNull();
  expect(getByDisplayValue(container, 'Tomorrow')).not.toBeNull();
  expect(container.textContent).toContain('not Urgent & Important');
});
