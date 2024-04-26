import type { Preview } from "@storybook/react";

import "../styles/globals.css";
import "@/build.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        method: "alphabetical",
        locales: "pr-BR",
      },
    },
  },
};

export default preview;
