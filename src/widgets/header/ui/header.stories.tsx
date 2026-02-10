import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './header';
import { MemoryRouter } from 'react-router-dom';
import { Language } from '@/shared/store/language-store';
import { Box } from '@chakra-ui/react';
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
        {/* 背景色を設定 */}
        <Box bg="#cccccc" minH="100vh">
          <Story />
        </Box>
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
        <Box maxW="375px" mx="auto">
          <Header
            isOpen={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            selectedLanguage={selectedLanguage}
            handleLanguageChange={e => {
              const newLanguage = e.target.value as Language;
              setSelectedLanguage(newLanguage);
            }}
            mb="16px"
          />
        </Box>
      );
    },
  ],
};
