import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Buttons from './Buttons';

describe('Buttons', () => {
  it('should render correctly', () => {
    const { container } = render(<Buttons />);
    expect(container).toMatchSnapshot();
  });

  it('should handle button clicks and update the display value', () => {
    const { getByText } = render(<Buttons />);

    // Click on buttons
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));

    // Check if display value is updated correctly
    expect(getByText('10')).toBeInTheDocument();
  });
});
