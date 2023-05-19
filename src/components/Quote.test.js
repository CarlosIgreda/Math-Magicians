import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Quote from './Quote';

describe('Quote', () => {
  it('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Quote />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
