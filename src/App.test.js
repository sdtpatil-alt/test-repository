import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to the Test Application/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders counter with initial value 0', () => {
  render(<App />);
  const counterElement = screen.getByText(/Counter: 0/i);
  expect(counterElement).toBeInTheDocument();
});

test('increments counter when + button is clicked', () => {
  render(<App />);
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const counterElement = screen.getByText(/Counter: 1/i);
  expect(counterElement).toBeInTheDocument();
});

test('decrements counter when - button is clicked', () => {
  render(<App />);
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const counterElement = screen.getByText(/Counter: -1/i);
  expect(counterElement).toBeInTheDocument();
});

test('resets counter when reset button is clicked', () => {
  render(<App />);
  const incrementButton = screen.getByText('+');
  const resetButton = screen.getByText('Reset');
  
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(resetButton);
  
  const counterElement = screen.getByText(/Counter: 0/i);
  expect(counterElement).toBeInTheDocument();
});

test('displays test scenarios list', () => {
  render(<App />);
  expect(screen.getByText(/File modifications/i)).toBeInTheDocument();
  expect(screen.getByText(/New file additions/i)).toBeInTheDocument();
  expect(screen.getByText(/File deletions/i)).toBeInTheDocument();
  expect(screen.getByText(/Commit operations/i)).toBeInTheDocument();
});
