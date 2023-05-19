import React from 'react';
import { render, waitFor } from '@testing-library/react';
import QuoteContainer from './QuoteContainer';

it('should render quote and author when fetch is successful', async () => {
  const mockResponse = [
    {
      quote: 'Test Quote',
      author: 'Test Author',
    },
  ];
  jest.spyOn(window, 'fetch').mockResolvedValueOnce({
    ok: true,
    json: jest.fn().mockResolvedValue(mockResponse),
  });

  const { getByText } = render(<QuoteContainer />);
  await waitFor(() => {
    expect(getByText(/Test Quote/i)).toBeInTheDocument();
    expect(getByText(/Test Author/i)).toBeInTheDocument();
  });
});
