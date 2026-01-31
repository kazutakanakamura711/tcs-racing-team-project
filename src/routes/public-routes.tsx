import { ContactPage } from '@/pages/contact-page';
import { TopPage } from '@/pages/top-page';
import { OurPartnersPage } from '@/pages/our-partners-page';
import { SchedulePage } from '@/pages/schedule-page';
import { TeamMemberPage } from '@/pages/team-member-page';
import { UpdateContentPage } from '@/pages/update-content-page';
import { UpdateListPage } from '@/pages/update-list-page';
import { MemberDetailPage } from '@/pages/member-detail-page';

export const publicRoutes = [
  {
    path: '/',
    element: <TopPage />,
    children: [{ path: '', element: <TopPage /> }],
  },
  {
    path: '/team-member',
    element: <TeamMemberPage />,
    children: [{ path: '', element: <TeamMemberPage /> }],
  },
  {
    path: '/member-page/:id',
    element: <MemberDetailPage />,
    children: [{ path: '', element: <MemberDetailPage /> }],
  },
  {
    path: '/contact',
    element: <ContactPage />,
    children: [{ path: '', element: <ContactPage /> }],
  },
  {
    path: '/schedule-page',
    element: <SchedulePage />,
    children: [{ path: '', element: <SchedulePage /> }],
  },
  {
    path: '/our-partners',
    element: <OurPartnersPage />,
    children: [{ path: '', element: <OurPartnersPage /> }],
  },
  {
    path: '/update-content/:id',
    element: <UpdateContentPage />,
    children: [{ path: '', element: <UpdateContentPage /> }],
  },
  {
    path: '/update-list',
    element: <UpdateListPage />,
    children: [{ path: '', element: <UpdateListPage /> }],
  },
];
