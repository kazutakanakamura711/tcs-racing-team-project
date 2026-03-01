import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Partner } from '@/shared/constants';

interface Props {
  partners: Partner[];
}

export const OurPartnersBlackList: FC<Props> = ({ partners }) => {
  return (
    <div className="mt-18 mb-12">
      <p className="text-light text-[36px] font-bold mb-5">Black</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5">
        {partners.map((partner, index) => (
          <Link
            key={index}
            to={partner.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group relative flex items-center justify-center bg-white min-h-38 rounded-[10px]">
              <div
                className="max-w-48"
                style={{ width: partner.partnersPageLogoImageWidth }}
              >
                {partner.imagePath !== '' && (
                  <img
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                    src={partner.imagePath}
                    alt=""
                  />
                )}
              </div>
              <div className="absolute bottom-3.5 left-5 flex items-center gap-2">
                <span className="text-dark text-base font-bold">Read more</span>
                <div className="flex items-center transition-transform duration-300 ease-in-out group-hover:translate-x-1.5">
                  <img src="images/common/ico-arrow-brock.svg" alt="" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
