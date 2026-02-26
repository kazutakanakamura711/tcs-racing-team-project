import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import './app/i18n';
import { Spinner } from './shared/ui';

const App = React.lazy(() => import('./app/app')); // 正しい使用方法

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <Spinner className="size-16 text-white" />
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>,
);
