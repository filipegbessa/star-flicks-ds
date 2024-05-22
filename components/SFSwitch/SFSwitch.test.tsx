import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SFSwitch, SFSwitchProps } from './SFSwitch';

describe('SFSwitch Component', () => {
  const onChangeMock = jest.fn();

  const defaultProps: SFSwitchProps = {
    defaultChecked: false,
    disabled: false,
    onChange: onChangeMock,
  };

  const renderComponent = (props: SFSwitchProps) => {
    const { getByTestId } = render(<SFSwitch {...props} />);
    return { getByTestId: getByTestId('SFSwitch') };
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    const { getByTestId } = renderComponent(defaultProps);

    expect(getByTestId).toBeInTheDocument();
    expect(getByTestId).not.toBeChecked();
  });

  test('renders as checked when defaultChecked is true', () => {
    const { getByTestId } = renderComponent({ defaultChecked: true });

    expect(getByTestId).toBeChecked();
  });

  test('triggers onChange callback when clicked', () => {
    const { getByTestId } = renderComponent(defaultProps);

    fireEvent.click(getByTestId);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(true);
  });

  test('does not trigger onChange callback when clicked if disabled', () => {
    const { getByTestId } = renderComponent({ disabled: true });

    fireEvent.click(getByTestId);

    expect(onChangeMock).not.toHaveBeenCalled();
  });

  test('applies common variant styles by default', () => {
    const { getByTestId } = renderComponent(defaultProps);

    expect(getByTestId).toHaveClass('bg-primary');
  });

  test('applies contract variant styles when specified', () => {
    const { getByTestId } = renderComponent({ variant: 'contract' });

    expect(getByTestId).toHaveClass('bg-error');
  });
});
