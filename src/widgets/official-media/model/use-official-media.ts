import {
  facebookUrl,
  instagramUrl,
  tiktokUrl,
  youtubeUrl,
} from '@/shared/constants';

export const useOfficialMedia = () => {
  return {
    socialLinks: {
      facebook: facebookUrl,
      instagram: instagramUrl,
      youtube: youtubeUrl,
      tiktok: tiktokUrl,
    },
  };
};
