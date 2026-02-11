import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { NotFound } from './not-found';

describe('NotFound', () => {
  const defaultProps = {
    errorCode: '404',
    title: 'ページが見つかりません',
    description: 'お探しのページは存在しないか、移動した可能性があります。',
    backToTopText: 'トップに戻る',
  };

  it('404エラーメッセージが表示される', () => {
    render(
      <BrowserRouter>
        <NotFound {...defaultProps} />
      </BrowserRouter>,
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('ページが見つかりません')).toBeInTheDocument();
    expect(
      screen.getByText(
        'お探しのページは存在しないか、移動した可能性があります。',
      ),
    ).toBeInTheDocument();
  });

  it('トップに戻るボタンが表示される', () => {
    render(
      <BrowserRouter>
        <NotFound {...defaultProps} />
      </BrowserRouter>,
    );

    expect(screen.getByText('トップに戻る')).toBeInTheDocument();
  });

  it('propsで渡されたテキストが表示される', () => {
    const customProps = {
      errorCode: '500',
      title: 'Server Error',
      description: 'An error occurred on the server.',
      backToTopText: 'Go Home',
    };

    render(
      <BrowserRouter>
        <NotFound {...customProps} />
      </BrowserRouter>,
    );

    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByText('Server Error')).toBeInTheDocument();
    expect(
      screen.getByText('An error occurred on the server.'),
    ).toBeInTheDocument();
    expect(screen.getByText('Go Home')).toBeInTheDocument();
  });
});
