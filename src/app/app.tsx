import { AppRoutes } from './routers';
import { AppProvider } from './providers/app-provider';
import './styles/app.css';

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
