import { useBreakpointValue } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  parseMemberId,
  getMemberById,
  getOtherMembersList,
} from '@/shared/constants';
import { useGetWindowWidth } from '@/shared/hooks/use-get-window-width';

export const useOurTeamDetailContainer = () => {
  const { id } = useParams();
  const { t } = useTranslation('teamMember');
  const { isTablet } = useGetWindowWidth();
  const navigate = useNavigate();

  const parsedId = parseMemberId(id || '');
  const member = parsedId ? getMemberById(parsedId) : undefined;
  const memberList = getOtherMembersList();

  const heroImageSrc = useBreakpointValue({
    base: member?.memberPageFirstViewBackgroundImageSp,
    lg: member?.memberPageFirstViewBackgroundImagePc,
  });

  return {
    parsedId,
    t,
    member,
    memberList,
    heroImageSrc,
    isTablet,
    navigate,
  };
};
