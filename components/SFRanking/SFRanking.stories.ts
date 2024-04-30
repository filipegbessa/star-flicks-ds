import { Meta, StoryObj } from "@storybook/react";

import { SFRanking, SFRankingProps } from "./SFRanking";

const meta: Meta<SFRankingProps> = {
  title: "Components/SF-Ranking",
  component: SFRanking,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<SFRankingProps> = {
  args: {
    value: 45,
  },
};
