import React from 'react';
import { render } from '@testing-library/react';
import { SFHeader, SFHeaderProps } from './SFHeader';

describe('SFHeader Component', () => {
  const renderComponent = (props: SFHeaderProps) => {
    const { getByTestId, getByText } = render(<SFHeader {...props} />);
    return { getByText, getByTestId: getByTestId('SFHeader') };
  };

  test('renders with logo and children', () => {
    const { getByTestId, getByText } = renderComponent({
      logo: <div>Logo</div>,
      children: <div>Children</div>,
    });

    expect(getByTestId).toBeInTheDocument();
    expect(getByText('Logo')).toBeInTheDocument();
    expect(getByText('Children')).toBeInTheDocument();
  });

  test('applies sticky class when sticky is true', () => {
    const { getByTestId } = renderComponent({
      logo: <div>Logo</div>,
      sticky: true,
    });

    expect(getByTestId).toHaveClass('sticky');
  });

  test('does not apply sticky class when sticky is false', () => {
    const { getByTestId } = renderComponent({
      logo: <div>Logo</div>,
      sticky: false,
    });

    expect(getByTestId).not.toHaveClass('sticky');
  });

  test('applies minActive class when minActive is true', () => {
    const { getByTestId } = renderComponent({
      logo: <div>Logo</div>,
      minActive: true,
    });

    expect(getByTestId).toHaveClass('h-12');
    expect(getByTestId).not.toHaveClass('h-14');
  });

  test('applies default height class when minActive is false', () => {
    const { getByTestId } = renderComponent({
      logo: <div>Logo</div>,
      minActive: false,
    });

    expect(getByTestId).toHaveClass('h-14');
    expect(getByTestId).not.toHaveClass('h-12');
  });
});
