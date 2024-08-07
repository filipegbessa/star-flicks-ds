import type { Preview } from '@storybook/react';
import '../styles/sf-style.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        locales: 'pr-BR',
      },
    },
  },
};

export default preview;
