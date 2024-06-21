import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Gold Rate Calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/Gold Rate Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
