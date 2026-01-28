import { Box, Spinner } from '@chakra-ui/react';

export const CenterSpinner = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#000"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#000"
        w="250px"
        h="250px"
      />
    </Box>
  );
};
