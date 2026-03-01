import { FC } from 'react';

export const ContactHeroImage: FC = () => {
  return (
    <div className="relative mt-27.5 md:mt-12.5 w-full">
      <img
        className="w-full object-contain block"
        src="/images/contact/img-contact-top.webp"
        alt=""
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#1A1A1A] opacity-50 z-" />
    </div>
  );
};
