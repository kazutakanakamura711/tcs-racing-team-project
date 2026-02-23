import { Button } from '@/shared/ui';
import { Box, Center, Spinner, VStack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';

const ErrorFallback = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#1a1a1a"
      px={{ base: 4, md: 8 }}
    >
      <VStack spacing={8} textAlign="center">
        <VStack spacing={4}>
          <Text
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="bold"
            color="white"
          >
            Error
          </Text>
          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            color="white"
          >
            エラーが発生しました / An Error Occurred
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.400">
            予期しないエラーが発生しました。トップページに戻ってやり直してください。
            <br />
            An unexpected error occurred. Please return to the top page and try
            again.
          </Text>
        </VStack>
        <Button
          asChild
          className="bg-white text-black font-bold px-8 py-6 text-sm md:text-md hover:bg-gray-200"
        >
          <a href="/">Back to Top</a>
        </Button>
      </VStack>
    </Box>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <Center h="100vh" bg="#000">
          <Spinner size="xl" color="white" />
        </Center>
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
