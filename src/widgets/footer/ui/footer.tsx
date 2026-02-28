import {
  UPDATES,
  OUR_TEAM,
  SCHEDULE,
  OUR_PARTNERS,
  CONTACT,
} from '@/shared/constants';
import { Link } from 'react-router-dom';
import { CenteredContainer } from '@/shared/ui';

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-28">
      <CenteredContainer>
        <div className="flex items-start mb-9">
          {/* 左側: USEFUL LINKS + READ MORE ABOUT */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start w-1/2 gap-10 md:gap-0">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-xs md:text-2xl mb-6">USEFUL LINKS</p>
              <ul className="flex flex-col items-start list-none m-0 p-0 gap-2">
                <li>
                  <Link to={UPDATES}>News</Link>
                </li>
                <li>
                  <Link to={OUR_TEAM}>Team</Link>
                </li>
                <li>
                  <Link to={SCHEDULE}>Schedule</Link>
                </li>
                <li>
                  <Link to={OUR_PARTNERS}>Partner</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-xs md:text-2xl mb-6">
                READ MORE ABOUT
              </p>
              <ul className="flex flex-col items-start list-none m-0 p-0">
                <li>
                  <Link to={CONTACT}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 右側: FOLLOW US */}
          <div className="w-1/2 flex justify-center">
            <Link
              to="#"
              className="font-bold text-left text-light text-[10px] md:text-2xl"
            >
              FOLLOW US AND <br className="md:hidden" />
              CHECK THE
              <br className="hidden md:block" />
              TEAM <br className="md:hidden" />
              ACTIVITY AND <br className="md:hidden" />
              DAILY LIFE
            </Link>
          </div>
        </div>
      </CenteredContainer>

      <div className="w-full py-2 bg-light text-dark text-[10px] md:text-sm font-bold text-center">
        Copyright &copy; 2024 TCS Racing Team All Rights Reserved.
      </div>
    </footer>
  );
};
