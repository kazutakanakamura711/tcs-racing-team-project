import type { Preview } from '@storybook/react-vite';
import { Box, ChakraProvider } from '@chakra-ui/react';
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
      values: [
        { name: 'dark', value: '#1a1a1a' }, // アプリと同じ色を定義
      ],
    },
  },
  decorators: [
    Story =>
      React.createElement(
        ChakraProvider,
        null,
        // Boxで包んで背景色を強制する
        React.createElement(
          Box,
          {
            bg: '#1a1a1a',
            p: 8, // 余白
            minH: '100%', // 全体の高さ
            color: 'white', // デフォルト文字色を白に
          },
          React.createElement(Story),
        ),
      ),
  ],
};

export default preview;
