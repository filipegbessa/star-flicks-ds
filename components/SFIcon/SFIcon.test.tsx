import { render, screen } from '@testing-library/react';
import { SFIcon } from '../SFIcon/SFIcon';

describe('Component <SFIcon />', () => {
  test('Should render the star icon', () => {
    render(<SFIcon name='star' />);

    const saldo = screen.getByTestId('SFIcon');
    expect(saldo).toBeInTheDocument();
    expect(saldo).toHaveClass('icon-star');
  });
});
