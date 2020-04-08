import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders the title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/NEARBY PLACES SEARCH/i);
  expect(titleElement).toBeInTheDocument();
});

it('renders the button', () => {
  const { getByRole} = render(<App />);
  const buttonElement = getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});

