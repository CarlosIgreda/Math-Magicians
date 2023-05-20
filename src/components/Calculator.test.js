import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Calculator />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
