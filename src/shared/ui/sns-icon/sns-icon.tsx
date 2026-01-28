import { Box, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  href: string;
  icon: string;
  label: string;
}

export const SnsIcon: FC<Props> = ({ href, icon, label }) => {
  return (
    <Link to={href} target="_blank" rel="noopener noreferrer">
      <Box w="35px" h="35px" borderRadius="50%">
        <Image src={icon} alt={label} />
      </Box>
    </Link>
  );
};
