import { OfficialMedia } from './ui/official-media';
import { useOfficialMedia } from './model/use-official-media';

export const OfficialMediaContainer = () => {
  const { socialLinks } = useOfficialMedia();

  return <OfficialMedia socialLinks={socialLinks} />;
};
