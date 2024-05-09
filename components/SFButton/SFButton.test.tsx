import React, { ReactNode } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SFButton, SFButtonProps } from './SFButton';

const getComponent = (props: SFButtonProps) => {
  const { getByTestId } = render(<SFButton {...props} />);
  return getByTestId('SFButton');
};

describe('SFButton component', () => {
  test('renders button with title', () => {
    const button = getComponent({ title: 'Submit' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Submit');
  });

  test('renders button with icon', () => {
    const button = getComponent({ icon: 'star' });
    expect(button).toBeInTheDocument();
  });

  test('fires onClick callback', () => {
    const handleClick = jest.fn();
    const button = getComponent({ onClick: handleClick });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('button is disabled when disabled prop is true', () => {
    const button = getComponent({ disabled: true });
    expect(button).toBeDisabled();
  });

  test('applies custom class name', () => {
    const button = getComponent({ className: 'custom-class' });
    expect(button).toHaveClass('custom-class');
  });

  test('applies custom size class', () => {
    const button = getComponent({ size: 'xl' });
    expect(button).toHaveClass('h-14 text-xl');
  });

  test('applies custom variant class', () => {
    const button = getComponent({ variant: 'secondary' });
    expect(button).toHaveClass('text-primary bg-quaternary text-primary');
  });

  test('applies squared class when no title and has icon', () => {
    const button = getComponent({ icon: 'star' });
    expect(button).toHaveClass('w-9');
  });
});
