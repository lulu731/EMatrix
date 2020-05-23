import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
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

const tasksUI = ['TaskUI0', 'TaskUI1', 'TaskUI2'];
it('urgent & important Panel', () => {
  act(() => {
    render(<Panel uAndI = 'u&i' tasksArray = {tasksUI}/>, container);
  });
  expect(container.textContent).toContain('TaskUI1');
  expect(container.textContent).toContain('Urgent & Important');
});

// const tasksNUI = ['TaskNUI0'];
// it('not urgent & important Panel', () => {
//   act(() => {
//     render(<Panel uAndI = 'nu&i' tasksArray = tasksNUI/>, container);
//   });
//   expect(container.textContent).toContain('TaskNUI1');
//   expect(container.textContent).toContain('not Urgent & Important');
// });
