import { SFIcon } from "../SFIcon/SFIcon";

export interface SFRankingProps {
  className?: string;
  value: number;
}

export const SFRanking = ({ value }: SFRankingProps) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <li key={index}>
      <SFIcon name="star" />
    </li>
  ));

  return (
    <div className="flex">
      <div className="relative z-0">
        <div
          className="absolute top-0 right-0 bg-white h-full z-10"
          style={{ width: `${100 - value}%` }}
        />
        <ul className="flex gap-1">{stars}</ul>
      </div>
    </div>
  );
};
