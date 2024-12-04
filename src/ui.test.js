
import { render, screen } from '@testing-library/react';
import { App } from 'App';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { LandingPage } from 'pages/LandingPage/LandingPage';

it('renders message send', () => {
  render(<App />);
  expect(screen.getByText('Отправить')).toBeInTheDocument();
});

it('button in App', () => {
  render(<App />)
  expect(screen.getByRole('button')).toBeInTheDocument()
});

it('textbox in App', () => {
  render(<App />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
});

it('div in App', () => {
  render(<App />)
  expect(screen.getByRole('link', { name: 'AI Helper' })).toBeInTheDocument()
});

it('heading in App', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: 'AI Helper' })).toBeInTheDocument()
});

it('banner in App', () => {
  render(<App />)
  expect(screen.getByRole('banner')).toBeInTheDocument()
});

it('banner in App', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: 'AI Helper' })).toBeInTheDocument()
});


it('renders .div', () => {
  const { container } = render(<App />)
  expect(container.querySelector('div')).toBeInTheDocument();
});

it('renders .container', () => {
  const { container } = render(<App />)
  expect(container.querySelector('.container')).toBeInTheDocument();
});

it('renders .chat-dialog', () => {
  const { container } = render(<App />)
  expect(container.querySelector('.chat-dialog')).toBeInTheDocument();
});

it('renders .chat-header', () => {
  const { container } = render(<App />)
  expect(container.querySelector('.chat-header')).toBeInTheDocument();
});

it('renders .chat-input-container', () => {
  const { container } = render(<App />)
  expect(container.querySelector('.chat-input-container')).toBeInTheDocument();
});


it('renders .chat-input', () => {
  const { container } = render(<App />)
  expect(container.querySelector('.chat-input')).toBeInTheDocument();
});

it('renders .a', () => {
  const { container } = render(<App />)
  expect(container.querySelector('a')).toBeInTheDocument();
});

it('renders div', () => {
  const { container } = render(<NotFoundPage />)
  expect(container.querySelector('div')).toBeInTheDocument();
});

it('renders div', () => {
  const { container } = render(<LandingPage />)
  expect(container.querySelector('div')).toBeInTheDocument();
});

it('renders div', () => {
  const { container } = render(<LandingPage />)
  expect(container.querySelector('div')).toBeInTheDocument();
});
