import { Meta, StoryObj } from "@storybook/react";

import { Ranking, RankingProps } from "./Ranking";

const meta: Meta<RankingProps> = {
  title: "Molecules/Ranking",
  component: Ranking,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<RankingProps> = {
  args: {
    value: 45,
  },
};
