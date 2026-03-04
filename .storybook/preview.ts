import type { Preview } from '@storybook/react-vite';
import React from 'react';

// CSSのインポート
import '../src/app/styles/index.css';
import '../src/app/styles/app.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    backgrounds: {
      values: [{ name: 'dark', value: '#1a1a1a' }],
    },
  },
  decorators: [
    Story =>
      React.createElement(
        'div',
        {
          style: {
            backgroundColor: '#1a1a1a',
            padding: '32px',
            minHeight: '100%',
            color: 'white',
          },
        },
        React.createElement(Story),
      ),
  ],
};

export default preview;
