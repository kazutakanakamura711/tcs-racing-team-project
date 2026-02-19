import { extendTheme, type StyleFunctionProps } from '@chakra-ui/react';

const customTheme = extendTheme({
  // OSのモードを監視する設定
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },

  breakpoints: {
    customSm: '350px',
    customMd: '400px',
    customLg: '450px',
    sm: '480px',
    custom: '558px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1536px',
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        // OSのモードに応じてブラウザの標準デザインを最適化
        colorScheme: props.colorMode === 'dark' ? 'dark' : 'light',
      },
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-thumb': {
        // モードに合わせてGitHubに近い色に動的変更
        background: props.colorMode === 'dark' ? '#30363d' : '#d0d7de',
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
    }),
  },
});

export default customTheme;
