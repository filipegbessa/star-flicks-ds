import React from 'react';
import { render } from '@testing-library/react';
import { SFRanking } from './SFRanking';

describe('SFRanking component', () => {
  test('renders SFRanking with correct number of stars', () => {
    const value = 50;
    const { getByTestId, getAllByTestId } = render(<SFRanking value={value} />);
    const ranking = getByTestId('SFRanking');
    const stars = getAllByTestId('SFIcon');
    const bar = getByTestId('SFRanking-bar');

    expect(ranking).toBeInTheDocument();
    expect(stars).toHaveLength(5);

    expect(bar).toHaveStyle(`width: ${100 - value}%;`);
  });
});
