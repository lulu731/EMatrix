import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { getByText, queryByText, getByRole, getByDisplayValue,
  queryByDisplayValue, fireEvent } from '@testing-library/react';
import Panels from '../components/panels/Panels';
import {tasks} from './data/tasks.js';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  render(<Panels data = {tasks} />, container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('init Panels', () => {
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

it('click on a TitleCard and open Card', () => {
  const titleCard = getByText(container, 'TaskUI0');
  act(() => {
    fireEvent(titleCard, new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }))
  });
  expect(getByDisplayValue(container, 'Buy toys')).not.toBeNull();
});

it('close open Card with SAVE button', () => {
  const titleCard = getByText(container, 'TaskUI0');
  act(() => {
    fireEvent(titleCard, new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }))
  });
  const button = getByText(container, 'Save');
  act(() => {
    fireEvent(button, new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }))
  });
  expect(queryByDisplayValue(container, /Buy toys/i)).toBeNull();
});

it('close open Card with CANCEL button', () => {
  const titleCard = getByText(container, 'TaskUI0');
  act(() => {
    fireEvent(titleCard, new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }))
  });
  const button = getByText(container, 'Cancel');
  act(() => {
    fireEvent(button, new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }))
  });
  expect(queryByText(container, 'What : Buy toys')).toBeNull();
});

it('open Card then save', () => {
  const titleCard = getByText(container, 'TaskNUI0');
  act(() => {
    fireEvent(titleCard, new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }))
  });
  const card = getByRole(container, 'taskCard');
  const cardName = getByDisplayValue(card, 'TaskNUI0');
  const who = getByDisplayValue(card, 'Raph');
  const button = getByText(container, 'Save');
  act(() => {
    cardName.value = 'NewTask';
    who.value = 'Me';
    fireEvent(button, new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }));
  });
  expect(queryByText(container, 'TaskNUI0')).toBeNull();
  expect(queryByText(container, 'NewTask')).not.toBeNull();
});

it('drag and drop TitleCard', () =>{
  const titleCard = getByText(container, 'TaskUI0');
  const uAndIPanel = container.querySelector(".bg-light-blue");
  act(() => {
    fireEvent.drag(titleCard);
    fireEvent.drop(uAndIPanel, titleCard);
  });
  act(() => {
    fireEvent(titleCard, new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }))
  });
  expect(queryByDisplayValue(container, /Urgent & not Important/i)).not.toBeNull();
});