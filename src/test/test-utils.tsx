import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';

/**
 * React Router v7の将来のフラグを有効にしたMemoryRouterラッパー
 * テストで使用することで、将来の破壊的変更への警告を抑制します
 */
export const TestRouter = ({ children, ...props }: MemoryRouterProps) => {
  return (
    <MemoryRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
      {...props}
    >
      {children}
    </MemoryRouter>
  );
};

export { render, screen, fireEvent, waitFor } from '@testing-library/react';
export { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
