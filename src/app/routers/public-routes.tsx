import { ContactPage } from '@/pages/contact-page';
import { TopPage } from '@/pages/top-page';
import { OurPartnersPage } from '@/pages/our-partners-page';
import { SchedulePage } from '@/pages/schedule-page';
import { OurTeamPage } from '@/pages/our-team-page';
import { UpdatesDetailPage } from '@/pages/updates-detail-page';
import { UpdatesPage } from '@/pages/updates';
import { OurTeamDetailPage } from '@/pages/our-team-detail-page';
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
    element: <OurTeamPage />,
    children: [{ path: '', element: <OurTeamPage /> }],
  },
  {
    path: OUR_TEAM_DETAIL,
    element: <OurTeamDetailPage />,
    children: [{ path: '', element: <OurTeamDetailPage /> }],
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
    element: <UpdatesDetailPage />,
    children: [{ path: '', element: <UpdatesDetailPage /> }],
  },
  {
    path: UPDATES,
    element: <UpdatesPage />,
    children: [{ path: '', element: <UpdatesPage /> }],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
