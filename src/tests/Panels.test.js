import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import Panels from '../components/panels/Panels';

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

it('init Panels', () => {
  act(() => {
    render(<Panels />, container);
  });
  expect(container.textContent).toContain('Urgent & Important')
  expect(container.textContent).toContain('TaskUI0');

  expect(container.textContent).toContain('not Urgent & Important')
  expect(container.textContent).toContain('TaskNUI0');

  expect(container.textContent).toContain('Urgent & not Important')
  expect(container.textContent).toContain('TaskUNI0');

  expect(container.textContent).toContain('not Urgent & not Important')
  expect(container.textContent).toContain('TaskNUNI0');
});
