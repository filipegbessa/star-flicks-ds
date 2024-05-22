import { SFIcon } from '../SFIcon/SFIcon';
import { SFTypography } from '../SFTypography/SFTypography';

export interface SFRankingProps {
  className?: string;
  value: number;
  label?: string;
}

export const SFRanking = ({ value, label }: SFRankingProps) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <li key={index}>
      <SFIcon name='star' className='text-primary' />
    </li>
  ));

  return (
    <div data-testid='SFRanking'>
      {label && <SFTypography>{label}</SFTypography>}
      <div className='flex gap-1'>
        <SFTypography size='md' weight='medium'>
          {value.toFixed(1)}
        </SFTypography>
        <div className='flex' data-testid='SFRanking' title={String(value)}>
          <div
            className='relative z-0 overflow-hidden'
            style={{ width: `${(value / 10) * 100}%` }}
          >
            <ul className='flex gap-1'>{stars}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};
