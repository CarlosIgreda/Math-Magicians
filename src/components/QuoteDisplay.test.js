import React from 'react';
import { render } from '@testing-library/react';
import QuoteDisplay from './QuoteDisplay';

describe('QuoteDisplay', () => {
  it('should render the quote correctly', () => {
    const quote = 'Test Quote';
    const { container } = render(<QuoteDisplay quote={quote} />);
    expect(container).toMatchSnapshot();
  });
});
