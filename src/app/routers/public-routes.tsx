import { ContactPage } from '@/pages/contact-page';
import { TopPage } from '@/pages/top-page';
import { OurPartnersPage } from '@/pages/our-partners-page';
import { SchedulePage } from '@/pages/schedule-page';
import { TeamMemberPage } from '@/pages/team-member-page';
import { UpdateContentPage } from '@/pages/update-content-page';
import { UpdateListPage } from '@/pages/update-list-page';
import { MemberDetailPage } from '@/pages/member-detail-page';

import {
  TOP,
  TEAM_MEMBER,
  MEMBER_DETAIL,
  CONTACT,
  SCHEDULE,
  OUR_PARTNERS,
  UPDATE_CONTENT,
  UPDATE_LIST,
} from '@/shared/constants';

export const publicRoutes = [
  {
    path: TOP,
    element: <TopPage />,
    children: [{ path: '', element: <TopPage /> }],
  },
  {
    path: TEAM_MEMBER,
    element: <TeamMemberPage />,
    children: [{ path: '', element: <TeamMemberPage /> }],
  },
  {
    path: MEMBER_DETAIL,
    element: <MemberDetailPage />,
    children: [{ path: '', element: <MemberDetailPage /> }],
  },
  {
    path: CONTACT,
    element: <ContactPage />,
    children: [{ path: '', element: <ContactPage /> }],
  },
  {
    path: SCHEDULE,
    element: <SchedulePage />,
    children: [{ path: '', element: <SchedulePage /> }],
  },
  {
    path: OUR_PARTNERS,
    element: <OurPartnersPage />,
    children: [{ path: '', element: <OurPartnersPage /> }],
  },
  {
    path: UPDATE_CONTENT,
    element: <UpdateContentPage />,
    children: [{ path: '', element: <UpdateContentPage /> }],
  },
  {
    path: UPDATE_LIST,
    element: <UpdateListPage />,
    children: [{ path: '', element: <UpdateListPage /> }],
  },
];
