import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthorDisplay from './AuthorDisplay';

describe('AuthorDisplay', () => {
  it('should render correctly with the provided author', () => {
    const author = 'John Doe';
    render(<AuthorDisplay author={author} />);
    expect(screen.getByText(new RegExp(author))).toBeInTheDocument();
  });

  it('should display the author name', () => {
    const author = 'John Doe';
    render(<AuthorDisplay author={author} />);
    expect(screen.getByText(new RegExp(author))).toBeInTheDocument();
  });
});
