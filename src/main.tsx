import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import { CenterSpinner } from './shared/ui/center-spinner';

const App = React.lazy(() => import('./App')); // 正しい使用方法

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<CenterSpinner />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
