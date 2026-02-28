import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';

describe('Sheet', () => {
  // ---- open / close ----

  it('トリガーをクリックするとコンテンツが表示される', async () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetTitle>Test Title</SheetTitle>
        </SheetContent>
      </Sheet>,
    );

    fireEvent.click(screen.getByText('Open'));
    expect(await screen.findByText('Test Title')).toBeInTheDocument();
  });

  it('閉じるボタン (×) をクリックするとシートが閉じる', async () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetTitle>Close Test</SheetTitle>
        </SheetContent>
      </Sheet>,
    );

    fireEvent.click(screen.getByText('Open'));
    const closeBtn = await screen.findByRole('button', { name: /close/i });
    fireEvent.click(closeBtn);

    await waitFor(() => {
      expect(screen.queryByText('Close Test')).not.toBeInTheDocument();
    });
  });

  it('SheetClose をクリックするとシートが閉じる', async () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent showCloseButton={false}>
          <SheetTitle>Custom Close</SheetTitle>
          <SheetClose>Close manually</SheetClose>
        </SheetContent>
      </Sheet>,
    );

    fireEvent.click(screen.getByText('Open'));
    await screen.findByText('Custom Close');

    fireEvent.click(screen.getByText('Close manually'));

    await waitFor(() => {
      expect(screen.queryByText('Custom Close')).not.toBeInTheDocument();
    });
  });

  // ---- showCloseButton ----

  it('showCloseButton={false} のとき × ボタンが表示されない', async () => {
    render(
      <Sheet defaultOpen>
        <SheetContent showCloseButton={false}>
          <SheetTitle>No Close Button</SheetTitle>
        </SheetContent>
      </Sheet>,
    );

    await screen.findByText('No Close Button');
    expect(
      screen.queryByRole('button', { name: /close/i }),
    ).not.toBeInTheDocument();
  });

  it('showCloseButton のデフォルトは true で × ボタンが表示される', async () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetTitle>With Close Button</SheetTitle>
        </SheetContent>
      </Sheet>,
    );

    expect(
      await screen.findByRole('button', { name: /close/i }),
    ).toBeInTheDocument();
  });

  // ---- slots ----

  it('SheetTitle と SheetDescription が表示される', async () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>My Title</SheetTitle>
            <SheetDescription>My Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );

    expect(await screen.findByText('My Title')).toBeInTheDocument();
    expect(screen.getByText('My Description')).toBeInTheDocument();
  });

  it('SheetFooter 内のコンテンツが表示される', async () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetTitle>Footer Test</SheetTitle>
          <SheetFooter>
            <button type="button">Save</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );

    expect(await screen.findByText('Save')).toBeInTheDocument();
  });

  it('SheetOverlay が描画される', async () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetTitle>Overlay Test</SheetTitle>
        </SheetContent>
      </Sheet>,
    );

    await screen.findByText('Overlay Test');
    expect(
      document.querySelector('[data-slot="sheet-overlay"]'),
    ).toBeInTheDocument();
  });

  // ---- side prop ----

  it('side="right" のとき right 方向クラスが適用される', async () => {
    render(
      <Sheet defaultOpen>
        <SheetContent side="right" data-testid="sheet-content">
          <SheetTitle>Right</SheetTitle>
        </SheetContent>
      </Sheet>,
    );

    const content = await screen.findByTestId('sheet-content');
    expect(content).toHaveClass('right-0');
  });

  it('side="left" のとき left 方向クラスが適用される', async () => {
    render(
      <Sheet defaultOpen>
        <SheetContent side="left" data-testid="sheet-content">
          <SheetTitle>Left</SheetTitle>
        </SheetContent>
      </Sheet>,
    );

    const content = await screen.findByTestId('sheet-content');
    expect(content).toHaveClass('left-0');
  });

  it('side="top" のとき top 方向クラスが適用される', async () => {
    render(
      <Sheet defaultOpen>
        <SheetContent side="top" data-testid="sheet-content">
          <SheetTitle>Top</SheetTitle>
        </SheetContent>
      </Sheet>,
    );

    const content = await screen.findByTestId('sheet-content');
    expect(content).toHaveClass('inset-x-0');
    expect(content).toHaveClass('top-0');
  });

  it('side="bottom" のとき bottom 方向クラスが適用される', async () => {
    render(
      <Sheet defaultOpen>
        <SheetContent side="bottom" data-testid="sheet-content">
          <SheetTitle>Bottom</SheetTitle>
        </SheetContent>
      </Sheet>,
    );

    const content = await screen.findByTestId('sheet-content');
    expect(content).toHaveClass('inset-x-0');
    expect(content).toHaveClass('bottom-0');
  });

  // ---- data-slot ----

  it('各コンポーネントに data-slot 属性が設定されている', async () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Slot Test</SheetTitle>
            <SheetDescription>Slot description</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <span>footer</span>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );

    await screen.findByText('Slot Test');

    expect(
      document.querySelector('[data-slot="sheet-content"]'),
    ).toBeInTheDocument();
    expect(
      document.querySelector('[data-slot="sheet-overlay"]'),
    ).toBeInTheDocument();
    expect(
      document.querySelector('[data-slot="sheet-header"]'),
    ).toBeInTheDocument();
    expect(
      document.querySelector('[data-slot="sheet-title"]'),
    ).toBeInTheDocument();
    expect(
      document.querySelector('[data-slot="sheet-description"]'),
    ).toBeInTheDocument();
    expect(
      document.querySelector('[data-slot="sheet-footer"]'),
    ).toBeInTheDocument();
  });
});
