import { ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './routes';
import { AppProvider } from './providers/app/app-provider';
import { RecoilRoot } from 'recoil';
import customTheme from './theme';

const App = () => {
  return (
    <AppProvider>
      <RecoilRoot>
        <ChakraProvider resetCSS={true} theme={customTheme}>
          <AppRoutes />
        </ChakraProvider>
      </RecoilRoot>
    </AppProvider>
  );
};

export default App;
