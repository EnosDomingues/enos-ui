import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
};

export default preview;
