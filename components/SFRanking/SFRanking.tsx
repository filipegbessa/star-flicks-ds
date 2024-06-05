import { FC } from 'react';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFTypography } from '../SFTypography/SFTypography';

export interface SFRankingProps {
  value: number;
  label?: string;
}

const MAX_STARS = 5;

export const SFRanking: FC<SFRankingProps> = ({ value, label }) => {
  const stars = Array.from({ length: MAX_STARS }, (_, index) => (
    <li key={index} className='flex items-center'>
      <SFIcon name='star' className='text-primary' />
    </li>
  ));

  const filledStarsPercentage = (value / 10) * 100;

  return (
    <div data-testid='SFRanking' className='flex flex-col'>
      {label && <SFTypography>{label}</SFTypography>}
      <div className='flex items-center gap-2'>
        <SFTypography size='md' weight='medium'>
          {value.toFixed(1)}
        </SFTypography>

        <div
          className='relative flex items-center p-1 rounded-sm bg-white'
          aria-label={`Rating: ${value} out of 10`}
          title={`Rating: ${value} out of 10`}
        >
          <div
            className='relative z-0 overflow-hidden'
            style={{ width: `${filledStarsPercentage}%` }}
          >
            <ul className='flex gap-1'>{stars}</ul>
          </div>
          <ul className='absolute top-1 left-1 w-full flex gap-1 opacity-40'>
            {stars}
          </ul>
        </div>
      </div>
    </div>
  );
};
