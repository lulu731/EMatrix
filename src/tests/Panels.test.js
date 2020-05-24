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
  let element = container.querySelector(".bg-red");
  expect(element).not.toBeNull();
  expect(element.textContent).toContain('Urgent & Important');
  expect(element.textContent).toContain('TaskUI0');

  element = container.querySelector(".bg-blue");
  expect(element).not.toBeNull();
  expect(element.textContent).toContain('not Urgent & Important');
  expect(element.textContent).toContain('TaskNUI0');

  element = container.querySelector(".bg-light-blue");
  expect(element).not.toBeNull();
  expect(element.textContent).toContain('Urgent & not Important');
  expect(element.textContent).toContain('TaskUNI0');

  element = container.querySelector(".bg-green");
  expect(element).not.toBeNull();
  expect(element.textContent).toContain('not Urgent & not Important');
  expect(element.textContent).toContain('TaskNUNI0');
});
