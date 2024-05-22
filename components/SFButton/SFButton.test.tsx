import React, { ReactNode } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SFButton, SFButtonProps } from './SFButton';

describe('SFButton component', () => {
  const renderComponent = (props: SFButtonProps) => {
    const { getByTestId } = render(<SFButton {...props} />);
    return getByTestId('SFButton');
  };

  test('renders button with title', () => {
    const button = renderComponent({ title: 'Submit' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Submit');
  });

  test('renders button with icon', () => {
    const button = renderComponent({ icon: 'star' });
    expect(button).toBeInTheDocument();
  });

  test('fires onClick callback', () => {
    const handleClick = jest.fn();
    const button = renderComponent({ onClick: handleClick });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('button is disabled when disabled prop is true', () => {
    const button = renderComponent({ disabled: true });
    expect(button).toBeDisabled();
  });

  test('applies custom class name', () => {
    const button = renderComponent({ className: 'custom-class' });
    expect(button).toHaveClass('custom-class');
  });

  test('applies custom size class', () => {
    const button = renderComponent({ size: 'xl' });
    expect(button).toHaveClass('h-14 text-xl');
  });

  test('applies custom variant class', () => {
    const button = renderComponent({ variant: 'secondary' });
    expect(button).toHaveClass(
      'bg-secondary text-contrast-secondary hover:bg-secondary-hover active:bg-secondary-active'
    );
  });

  test('applies squared class when no title and has icon', () => {
    const button = renderComponent({ icon: 'star' });
    expect(button).toHaveClass('w-9');
  });
});
