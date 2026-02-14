import { Box, Text, Image, SimpleGrid } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './our-team-detail-carousel.module.css';
import { NavigateFunction } from 'react-router-dom';
import { Member, OUR_TEAM_DETAIL } from '@/shared/constants';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

interface Props {
  isTablet: boolean;
  navigate: NavigateFunction;
  memberList: Member[];
}

export const OurTeamDetailCarousel: React.FC<Props> = ({
  isTablet,
  navigate,
  memberList,
}) => {
  const slider =
    isTablet || memberList.length <= 4 ? (
      <SimpleGrid
        columns={isTablet ? 2 : memberList.length < 4 ? memberList.length : 4}
        spacing={10}
        justifyContent="center"
      >
        {memberList.map(member => (
          <Box key={member.id} w="100%" h="100%">
            <Box
              w="100%"
              objectFit="cover"
              cursor="pointer"
              onClick={() => {
                navigate(OUR_TEAM_DETAIL.replace(':id', member.id));
              }}
            >
              <Image
                display="block"
                w="100%"
                h="100%"
                objectFit="cover"
                src={member.gradationImagesPath}
                alt={member.nameJa}
              />
            </Box>
            <Text fontSize="16px" color="white" textAlign="center">
              {member.nameEn.toUpperCase()}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    ) : (
      <div className={styles.root}>
        <Slider {...settings}>
          {memberList.map(member => (
            <Box key={member.id} w="23%" h="100%" pr={4}>
              <Box
                w="100%"
                objectFit="cover"
                cursor="pointer"
                onClick={() => {
                  navigate(OUR_TEAM_DETAIL.replace(':id', member.id));
                }}
              >
                <Image
                  display="block"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  src={member.gradationImagesPath}
                  alt={member.nameJa}
                />
              </Box>
              <Text fontSize="16px" color="white" textAlign="center">
                {member.nameEn.toUpperCase()}
              </Text>
            </Box>
          ))}
        </Slider>
      </div>
    );

  return (
    <Box mb="139px">
      <Text fontSize="34px" fontWeight="bold" textAlign="center" mb="88px">
        Other Members
      </Text>
      {slider}
    </Box>
  );
};
