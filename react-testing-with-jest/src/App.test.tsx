import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Test is a method from jest
// It takes in a name, test and a time limit defaulted to 5 sec
test('renders learn react link', () => {
  // Render is a react testing library to create a virtual dom
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // Method from jest with a matcher function to test exertion
  expect(linkElement).toBeInTheDocument();
});
