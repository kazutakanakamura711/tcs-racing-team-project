import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScheduleItem } from './schedule-item';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof ScheduleItem> = {
  title: 'shared/ui/ScheduleItem',
  component: ScheduleItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: '/schedule/1',
    title: 'FIM Endurance World Championship - Suzuka 8 Hours',
    startDate: '08.01',
    endDate: '08.03',
    location: 'Suzuka Circuit, Japan',
  },
};

export const WithoutEndDate: Story = {
  args: {
    url: '/schedule/2',
    title: 'Test Session at Fuji Speedway',
    startDate: '09.15',
    location: 'Fuji Speedway, Japan',
  },
};

export const WithoutURL: Story = {
  args: {
    title: 'Private Team Meeting',
    startDate: '10.01',
    endDate: '10.02',
    location: 'TCS Racing HQ',
  },
};
