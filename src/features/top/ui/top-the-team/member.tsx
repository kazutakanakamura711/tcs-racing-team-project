import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { MemberContent } from './member-content';
import { MemberId } from '@/shared/constants';

type Props = {
  leftName: string;
  leftComment: string;
  leftImage: string;
  leftBg: string;
  leftLink: string;
  leftId: MemberId;
  rightName?: string;
  rightComment?: string;
  rightImage?: string;
  rightBg?: string;
  rightWidth?: string;
  rightLink?: string;
  rightId?: MemberId;
};

export const Member: FC<Props> = ({
  leftName,
  leftComment,
  leftImage,
  leftBg,
  leftLink,
  leftId,
  rightName,
  rightComment,
  rightImage,
  rightWidth,
  rightBg,
  rightLink,
  rightId,
}) => {
  return (
    <Box
      w="100%"
      background={`linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 0.8),rgba(0, 0, 0, 0.3)), url(/images/common/img-bg-lattice.webp)`}
      backgroundSize="80%"
    >
      <Box
        w={{ base: '71%', lg: '90%' }}
        m="0 auto"
        borderBottom={{ base: 'none', lg: 'solid 1px' }}
        borderColor="#fff"
      >
        <Box w="86%" m="0 auto" position="relative">
          <Box
            display={{ base: 'block', lg: 'flex' }}
            justifyContent="space-between"
          >
            <MemberContent
              backgroundUrl={leftBg}
              name={leftName}
              comment={leftComment}
              imageUrl={leftImage}
              link={leftLink}
              id={leftId}
            />
            <Box
              width="1px"
              height="80%"
              bgColor="#fff"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              display={{ base: 'none', lg: 'block' }}
            />

            {/* TODO: 後でrightBgを必須にする */}
            {rightName && rightImage && rightLink && rightId && (
              <MemberContent
                backgroundUrl={rightBg}
                name={rightName}
                comment={rightComment!}
                imageUrl={rightImage}
                width={rightWidth}
                link={rightLink}
                id={rightId}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
