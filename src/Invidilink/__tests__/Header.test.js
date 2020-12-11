import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders invidilink', () => {
  render(<Header />);
  const linkElement = screen.getByText(/invidilink/i);
  expect(linkElement).toBeInTheDocument();
});
