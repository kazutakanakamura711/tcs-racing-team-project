import { ContactPage } from '@/pages/contact-page';
import { TopPage } from '@/pages/top-page';
import { OurPartnersPage } from '@/pages/our-partners-page';
import { SchedulePage } from '@/pages/schedule-page';
import { TeamMemberPage } from '@/pages/team-member-page';
import { UpdateContentPage } from '@/pages/update-content-page';
import { UpdateListPage } from '@/pages/update-list-page';
import { MemberDetailPage } from '@/pages/member-detail-page';
import { NotFoundPage } from '@/pages/not-found-page';

import {
  TOP,
  OUR_TEAM,
  OUR_TEAM_DETAIL,
  CONTACT,
  SCHEDULE,
  OUR_PARTNERS,
  UPDATE_DETAIL,
  UPDATES,
} from '@/shared/constants';

export const publicRoutes = [
  {
    path: TOP,
    element: <TopPage />,
    children: [{ path: '', element: <TopPage /> }],
  },
  {
    path: OUR_TEAM,
    element: <TeamMemberPage />,
    children: [{ path: '', element: <TeamMemberPage /> }],
  },
  {
    path: OUR_TEAM_DETAIL,
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
    path: UPDATE_DETAIL,
    element: <UpdateContentPage />,
    children: [{ path: '', element: <UpdateContentPage /> }],
  },
  {
    path: UPDATES,
    element: <UpdateListPage />,
    children: [{ path: '', element: <UpdateListPage /> }],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
