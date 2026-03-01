import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  imagePath: {
    imagePath: string;
    partnersPageLogoImageWidth: string;
    link: string;
  }[];
}

export const OurPartnersList: FC<Props> = ({ title, imagePath }) => {
  return (
    <div className="mb-12">
      <p className="text-light text-[36px] font-bold mb-5!">{title}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
        {imagePath.map((image, index) => (
          <Link
            key={index}
            to={image.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group relative flex items-center justify-center bg-white min-h-38 rounded-[10px]">
              <div
                className="max-w-33 md:max-w-56"
                style={{ width: image.partnersPageLogoImageWidth }}
              >
                {image.imagePath !== '' && (
                  <img
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                    src={image.imagePath}
                    alt=""
                  />
                )}
              </div>
              <div className="absolute bottom-3.5 left-5.25 flex items-center gap-2">
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
