import { MemberId } from '@/shared/constants';
import { Box, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { FC } from 'react';
import { TFunction } from 'i18next';

interface Props {
  id: MemberId;
  t: TFunction<'teamMember'>;
}

export const OurTeamDetailProfileContent: FC<Props> = ({ id, t }) => {
  const beforeImage = css`
    position: relative;
    width: 100%;
    height: 90%;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #666666;
    overflow: hidden;
    font-size: 18px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: -10px;
      bottom: 0;
      width: 108%;
      height: 5px;
      background-image: url('/images/common/img-text-bg-rainbow.webp');
      background-size: cover;
      background-repeat: no-repeat;
      transform: rotate(90deg);
      transform-origin: left bottom; /* 回転の基点を設定 */
    }
  `;

  return (
    <Box
      w="100%"
      display={{ base: 'block', lg: 'flex' }}
      justifyContent="space-between"
      mb="96px"
    >
      <Box
        w={{ base: '100%', lg: 'calc(50% - 22px)' }}
        mb={{ base: '16px', lg: '0px' }}
        display="flex"
        flexDirection="column"
        textColor="#fff"
      >
        <Text fontSize="24px" mb="16px">
          Profile
        </Text>
        <Box css={beforeImage} boxShadow="10px -10px #333333">
          <Box
            display="grid"
            gridTemplateColumns="max-content 1fr"
            gap={{ base: 2, lg: 4 }}
            rowGap={4}
          >
            {/* 国籍 */}
            <Text
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              alignSelf="start"
              _after={{ content: '":"', marginLeft: '4px' }}
              fontSize={{ base: '16px', md: '17px', lg: '18px' }}
            >
              {t(`menuTitle.${0}`)}
            </Text>
            <Text
              fontSize={{ base: '16px', md: '17px', lg: '18px' }}
              whiteSpace="pre-line"
            >
              {t(`nationality.${id}`)}
            </Text>
            {/* 出身地 */}
            <Text
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              alignSelf="start"
              _after={{ content: '":"', width: '5px' }}
              fontSize={{ base: '16px', md: '17px', lg: '18px' }}
            >
              {t(`menuTitle.${1}`)}
            </Text>
            <Text fontSize={{ base: '16px', md: '17px', lg: '18px' }}>
              {t(`birthplace.${id}`)}
            </Text>
            {/* 生年月日 */}
            <Text
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              alignSelf="start"
              _after={{ content: '":"', width: '5px' }}
              fontSize={{ base: '16px', md: '17px', lg: '18px' }}
            >
              {t(`menuTitle.${2}`)}
            </Text>
            <Text fontSize={{ base: '16px', md: '17px', lg: '18px' }}>
              {t(`berthDay.${id}`)}
            </Text>
            {/* 身長 */}
            <Text
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              alignSelf="start"
              _after={{ content: '":"', width: '5px' }}
              fontSize={{ base: '16px', md: '17px', lg: '18px' }}
            >
              {t(`menuTitle.${3}`)}
            </Text>
            <Text fontSize={{ base: '16px', md: '17px', lg: '18px' }}>
              {t(`stature.${id}`)}
            </Text>
            {/* 趣味 */}
            <Text
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              alignSelf="start"
              _after={{ content: '":"', width: '5px' }}
              fontSize={{ base: '16px', md: '17px', lg: '18px' }}
            >
              {t(`menuTitle.${4}`)}
            </Text>
            <Text fontSize={{ base: '16px', md: '17px', lg: '18px' }}>
              {t(`tastes.${id}`)}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box w={{ base: '100%', lg: 'calc(50% - 22px)' }} textColor="#fff">
        <Text fontSize="24px" mb="16px">
          Result
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          css={beforeImage}
          boxShadow="10px -10px #333333"
          fontSize={{
            base: '16px !important',
            md: '17px !important',
            lg: '18px !important',
          }}
        >
          <Text whiteSpace="pre-line">{t(`result.${id}`)}</Text>
        </Box>
      </Box>
    </Box>
  );
};
