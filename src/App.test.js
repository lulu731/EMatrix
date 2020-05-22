import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('urgent & important text', () => {
  const { getAllByText } = render(<App />);
  const urgImpText = getAllByText('Urgent & Important');
  expect(urgImpText[0]).toBeInTheDocument();
});
