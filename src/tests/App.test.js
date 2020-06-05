import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import {tasks} from './data/tasks.js';

test('urgent & important text', () => {
  const { getAllByText } = render(<App tasks = {tasks}/>);
  const urgImpText = getAllByText('Urgent & Important');
  expect(urgImpText[0]).toBeInTheDocument();
});
