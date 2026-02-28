import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
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

const meta: Meta<typeof SheetContent> = {
  title: 'shared/ui/Sheet',
  component: SheetContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ---- helpers ----

type SheetDemoProps = {
  side?: 'right' | 'left' | 'top' | 'bottom';
  showCloseButton?: boolean;
};

const SheetDemo = ({
  side = 'right',
  showCloseButton = true,
}: SheetDemoProps) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open Sheet</Button>
    </SheetTrigger>
    <SheetContent side={side} showCloseButton={showCloseButton}>
      <SheetHeader>
        <SheetTitle>Sheet Title</SheetTitle>
        <SheetDescription>Sheet description text here.</SheetDescription>
      </SheetHeader>
      <div className="py-4 text-sm">Sheet content goes here.</div>
    </SheetContent>
  </Sheet>
);

// ---- stories ----

export const Default: Story = {
  render: () => <SheetDemo side="right" />,
};

export const LeftSide: Story = {
  render: () => <SheetDemo side="left" />,
};

export const TopSide: Story = {
  render: () => <SheetDemo side="top" />,
};

export const BottomSide: Story = {
  render: () => <SheetDemo side="bottom" />,
};

export const WithoutCloseButton: Story = {
  render: () => <SheetDemo side="right" showCloseButton={false} />,
};

export const WithFooter: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open with Footer</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet with Footer</SheetTitle>
          <SheetDescription>This sheet has a footer section.</SheetDescription>
        </SheetHeader>
        <div className="py-4 text-sm">Main content area.</div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
