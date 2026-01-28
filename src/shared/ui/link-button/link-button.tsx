import { HStack, Image, Spacer, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { css, keyframes } from '@emotion/react';

const expandUnderline = keyframes`
  from {
    width: 0;
    background-position: 0% 50%;
  }
  to {
    width: 100%;
    background-position: 100% 50%;
  }
`;

const contractUnderline = keyframes`
  from {
    width: 100%;
    background-position: 100% 50%;
  }
  to {
    width: 0;
    background-position: 0% 50%;
  }
`;

type Props = {
  text: string;
  link: string;
};

export const LinkButton: FC<Props> = ({ link, text }) => {
  return (
    <HStack>
      <Spacer />
      <Link to={link}>
        <HStack
          position="relative"
          onMouseEnter={e => {
            e.currentTarget.classList.add('hovered');
            e.currentTarget.classList.remove('remove');
          }}
          onMouseLeave={e => {
            e.currentTarget.classList.add('remove');
            e.currentTarget.classList.remove('hovered');
          }}
          css={css`
            &.hovered::after {
              content: '';
              position: absolute;
              bottom: -3px;
              left: 0;
              height: 3px;
              background-image: url(images/common/img-text-bg-rainbow.webp);
              background-size: cover;
              background-repeat: no-repeat;
              width: 100%;
              animation: ${expandUnderline} 0.5s ease-in-out forwards;
            }
            &.remove::after {
              content: '';
              position: absolute;
              bottom: -3px;
              left: 0;
              height: 3px;
              background-image: url(images/common/img-text-bg-rainbow.webp);
              background-size: cover;
              background-repeat: no-repeat;
              width: 0;
              animation: ${contractUnderline} 0.5s ease-in-out forwards;
            }
          `}
        >
          <Text color="#fff" fontWeight="bold">
            {text}
          </Text>
          <Image src="/images/common/ico-arrow-white-brock.svg" />
        </HStack>
      </Link>
    </HStack>
  );
};
