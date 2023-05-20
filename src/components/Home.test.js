import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('should limit the lorem text to the desired character count', () => {
  const characterCount = 500;

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );

  const containerElement = screen.getByTestId('lorem-container');
  const loremElements = containerElement.querySelectorAll('.lorem-text');

  loremElements.forEach((element) => {
    const text = element.textContent || '';
    expect(text.length).toBeLessThanOrEqual(characterCount);
  });
});
