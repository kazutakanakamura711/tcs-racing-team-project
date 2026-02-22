import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Box, Image, Text } from '@chakra-ui/react';
import styles from './top-slider.module.css';

export interface SliderImage {
  id: number;
  src: {
    sp: string;
    pc: string;
  };
  alt: string;
  isMovie?: boolean;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
};

export const TopSlider: React.FC<{
  isTablet: boolean;
  images: SliderImage[];
}> = ({ isTablet, images }) => {
  return (
    <>
      <Box className={styles.sliderWrapper}>
        <Slider {...settings}>
          {images.map(image => (
            <Box
              key={image.id}
              w="100%"
              h={{
                base: 'calc(100vh - 110px) !important',
                lg: 'calc(100vh - 90px) !important',
              }}
              position="relative"
            >
              <Box
                w="100%"
                h={{
                  base: 'calc(100vh - 110px) !important',
                  lg: 'calc(100vh - 52px) !important',
                }}
                objectFit="cover"
                position="relative"
              >
                {image.isMovie ? (
                  <>
                    <Text
                      as="h1"
                      position="absolute"
                      top={{ base: '0', lg: '50%' }}
                      left={{ base: '0', lg: '50%' }}
                      transform={{
                        base: 'rotate(-90deg)',
                        lg: 'translate(-50%, -50%)',
                      }}
                      color="white"
                      fontSize={{
                        customSm: '40px',
                        customMd: '56px',
                        lg: '7vw',
                      }}
                      fontWeight="bold"
                      textAlign={{ base: 'left', lg: 'center' }}
                      bg="white"
                      backgroundClip="text"
                      backgroundRepeat="no-repeat"
                      backgroundSize={{ base: 'contain', lg: 'cover' }}
                      backgroundPosition={{ base: '0px 0px', lg: 'center' }}
                      pt={{ base: '0px', lg: 'calc(100vh - 43vh)' }}
                      w={{ base: 'calc(100vh - 115px)', lg: '100%' }}
                      h="100%"
                      opacity={0.3}
                    >
                      Asia Union TCS Racing Team
                    </Text>
                    <video
                      key={isTablet ? 'sp' : 'pc'} // 追加：ソースが切り替わった時にビデオ要素をリフレッシュ
                      src={isTablet ? image.src.sp : image.src.pc} // sourceタグではなくこちらに直接書く
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={
                        isTablet
                          ? {
                              objectFit: 'cover',
                              height: 'calc(100vh - 110px)',
                              width: '100%',
                            }
                          : { objectFit: 'cover', height: '100vh' }
                      }
                    >
                      お使いのブラウザはビデオタグをサポートしていません。
                    </video>
                  </>
                ) : (
                  <>
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      bg="#000"
                      opacity={0.5}
                      zIndex="0"
                    />
                    <Text
                      as="h1"
                      position="absolute"
                      top={{ base: '0', lg: '50%' }}
                      left={{ base: '0', lg: '50%' }}
                      transform={{
                        base: 'rotate(-90deg)',
                        lg: 'translate(-50%, -50%)',
                      }}
                      color="white"
                      fontSize={{
                        customSm: '40px',
                        customMd: '56px',
                        lg: '7vw',
                      }}
                      fontWeight="bold"
                      textAlign={{ base: 'left', lg: 'center' }}
                      bg="white"
                      backgroundClip="text"
                      backgroundRepeat="no-repeat"
                      backgroundSize={{ base: 'contain', lg: 'cover' }}
                      backgroundPosition={{ base: '0px 0px', lg: 'center' }}
                      pt={{ base: '0px', lg: 'calc(100vh - 43vh)' }}
                      w={{ base: 'calc(100vh - 115px)', lg: '100%' }}
                      h="100%"
                      opacity={0.3}
                    >
                      Asia Union TCS Racing Team
                    </Text>
                    <Image
                      display="block"
                      w="100%"
                      h={{
                        base: 'calc(100vh - 110px) !important',
                        lg: 'calc(100vh - 90px) !important',
                      }}
                      objectFit={{ base: 'contain', lg: 'cover' }}
                      src={isTablet ? image.src.sp : image.src.pc}
                      alt={image.alt}
                    />
                  </>
                )}
              </Box>
              <Box
                display={{ base: 'none', lg: 'flex' }}
                position="absolute"
                top="50%"
                left={{ base: '50%', lg: '256px' }}
                transform="translate(-50%, -50%)"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize={{ base: '5xl', lg: 'xl' }}
                  color="white"
                  fontWeight="bold"
                >
                  TCS
                  <Box as="span" fontSize="xl" ml="16px">
                    Racing Team
                  </Box>
                </Text>
              </Box>
              <Box
                display={{ base: 'none', lg: 'flex' }}
                flexDirection={{ base: 'column', lg: 'row' }}
                justifyContent={{ base: 'none', lg: 'center' }}
                position="absolute"
                top={{ base: '60%', lg: '85%' }}
                left="50%"
                transform="translateX(-50%)"
                w="100%"
                color="white"
                fontWeight="bold"
                fontSize={{ base: 'md', lg: '2xl' }}
                textAlign="center"
              >
                <Text textAlign="center">日本からアジアへ</Text>
                <Text textAlign="center">そして世界へ</Text>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      <Text
        position="absolute"
        display={{ base: 'none', lg: 'block' }}
        bottom="3%"
        left="0"
        w="100%"
        textAlign="center"
        color="white"
        className={styles.scrollText}
      >
        SCROLL
      </Text>
    </>
  );
};
