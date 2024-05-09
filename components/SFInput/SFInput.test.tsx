import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SFInput, SFInputProps } from './SFInput';

const getComponent = (props?: SFInputProps) => {
  const { getByTestId } = render(<SFInput {...props} />);
  return getByTestId('SFInput');
};

describe('SFInput component', () => {
  test('renders input without label', () => {
    const input = getComponent();
    expect(input).toBeInTheDocument();
  });

  test('renders input with label', () => {
    const { getByTestId, getByText } = render(<SFInput label='Name' />);
    const input = getByTestId('SFInput');
    expect(input).toBeInTheDocument();
    expect(getByText('Name')).toBeInTheDocument();
  });

  test('renders textarea without label', () => {
    const textarea = getComponent({ multiline: true });
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  test('renders textarea with label', () => {
    const { getByTestId, getByText } = render(
      <SFInput label='Description' multiline />
    );
    const textarea = getByTestId('SFInput');
    expect(textarea).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
  });

  test('passes other props to input', () => {
    const input = getComponent({ placeholder: 'Enter text' });
    expect(input).toHaveAttribute('placeholder', 'Enter text');
  });

  test('passes other props to textarea', () => {
    const textarea = getComponent({
      multiline: true,
      placeholder: 'Enter text',
    });
    expect(textarea.tagName).toBe('TEXTAREA');
    expect(textarea).toHaveAttribute('placeholder', 'Enter text');
  });

  test('fires onChange callback', () => {
    const handleChange = jest.fn();
    const input = getComponent({
      onChange: handleChange,
    });
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('fires onFocus callback', () => {
    const handleFocus = jest.fn();
    const input = getComponent({
      onFocus: handleFocus,
    });
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  test('fires onBlur callback', () => {
    const handleBlur = jest.fn();
    const input = getComponent({
      onBlur: handleBlur,
    });
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
