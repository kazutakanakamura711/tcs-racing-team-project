import { ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './routers';
import { AppProvider } from './providers/app-provider';
import customTheme from './styles/theme';
import './styles/app.css';

const App = () => {
  return (
    <AppProvider>
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <AppRoutes />
      </ChakraProvider>
    </AppProvider>
  );
};

export default App;
