import React from 'react';
import { render } from '@testing-library/react';
import { SFRanking, SFRankingProps } from './SFRanking';

describe('SFRanking Component', () => {
  const renderComponent = (props: SFRankingProps) => {
    const { getByTestId, queryByText, container } = render(
      <SFRanking {...props} />
    );
    return { queryByText, getByTestId: getByTestId('SFRanking'), container };
  };

  test('renders without label', () => {
    const { getByTestId, queryByText } = renderComponent({ value: 7.5 });

    expect(getByTestId).toBeInTheDocument();
    expect(queryByText('7.5')).toBeInTheDocument();
    expect(queryByText(/label/i)).not.toBeInTheDocument();
  });

  test('renders with label', () => {
    const { getByTestId, queryByText } = renderComponent({
      value: 8.2,
      label: 'Rating',
    });

    expect(getByTestId).toBeInTheDocument();
    expect(queryByText('Rating')).toBeInTheDocument();
    expect(queryByText('8.2')).toBeInTheDocument();
    expect(queryByText(/label/i)).not.toBeInTheDocument();
  });

  test('renders stars correctly', () => {
    const { container } = renderComponent({ value: 6.5 });

    const filledStars = container.querySelectorAll(
      '.overflow-hidden > ul > li'
    );
    const backgroundStars = container.querySelectorAll('.absolute > li');

    expect(filledStars.length).toBe(5);
    expect(backgroundStars.length).toBe(5);
  });

  test('applies correct width for filled stars', () => {
    const { container } = renderComponent({ value: 7.5 });

    const filledStarsContainer = container.querySelector(
      '.relative.z-0.overflow-hidden'
    );
    expect(filledStarsContainer).toHaveStyle({ width: '75%' });
  });
});
