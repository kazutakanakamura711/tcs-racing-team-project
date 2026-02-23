import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'shared/ui/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = React.useState(2);
  const pages = [1, 2, 3, 'ellipsis', 10] as const;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={e => {
              e.preventDefault();
              setCurrentPage(page => Math.max(1, page - 1));
            }}
          />
        </PaginationItem>

        {pages.map((page, index) =>
          page === 'ellipsis' ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={e => {
                  e.preventDefault();
                  setCurrentPage(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={e => {
              e.preventDefault();
              setCurrentPage(page => Math.min(10, page + 1));
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export const Default: Story = {
  render: () => <PaginationDemo />,
};
