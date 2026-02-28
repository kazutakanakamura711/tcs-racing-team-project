import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './header';
import { MemoryRouter } from 'react-router-dom';
import { Language } from '@/shared/store/language-store';
import { useState } from 'react';

const meta: Meta<typeof Header> = {
  title: 'widgets/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <MemoryRouter>
        <div className="bg-[#cccccc] min-h-screen">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
  decorators: [
    () => {
      const [isOpen, setIsOpen] = useState(false);
      const [selectedLanguage, setSelectedLanguage] = useState<Language>(
        Language.Ja,
      );

      return (
        <div className="max-w-93.75 mx-auto">
          <Header
            isOpen={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            selectedLanguage={selectedLanguage}
            handleLanguageChange={e => {
              const newLanguage = e.target.value as Language;
              setSelectedLanguage(newLanguage);
            }}
          />
        </div>
      );
    },
  ],
};
