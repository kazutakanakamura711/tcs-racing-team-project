import { Button, Spinner } from '@/shared/ui';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';

const ErrorFallback = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] px-4 md:px-8">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-4xl md:text-6xl font-bold text-white">Error</p>
          <p className="text-xl md:text-2xl font-bold text-white">
            エラーが発生しました / An Error Occurred
          </p>
          <p className="text-base md:text-lg text-gray-400">
            予期しないエラーが発生しました。トップページに戻ってやり直してください。
            <br />
            An unexpected error occurred. Please return to the top page and try
            again.
          </p>
        </div>
        <Button
          asChild
          className="bg-white text-black font-bold px-8 py-6 text-sm md:text-base hover:bg-gray-200"
        >
          <a href="/">Back to Top</a>
        </Button>
      </div>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <Spinner className="size-16 text-white" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          {children}
        </Router>
      </ErrorBoundary>
    </React.Suspense>
  );
};
