import { FC } from 'react';
import { Partner, PartnerCategory } from '@/shared/constants/partners-images';

interface Props {
  partnersData: Record<PartnerCategory, Partner[]>;
}

export const OurPartners: FC<Props> = ({ partnersData }) => {
  return (
    <div className="w-full bg-light pt-21.25 pb-7.75 lg:pb-16 px-4 mb-23.75">
      {/* 一番上の画像（中央配置） */}
      <div
        className="grid justify-items-center gap-4 mb-13.5 lg:mb-21"
        style={{
          gridTemplateColumns: `repeat(${partnersData.black.length}, minmax(0, 1fr))`,
        }}
      >
        {partnersData.black.map((partnerImage, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            style={{ maxWidth: partnerImage.commonLogoImageWidth }}
          >
            <img
              src={partnerImage.imagePath}
              alt=""
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* 2段目（3つの画像） */}
      <div
        className="grid justify-items-center gap-4 mb-13.5 lg:mb-21"
        style={{
          gridTemplateColumns: `repeat(${partnersData.platinum.length}, minmax(0, 1fr))`,
        }}
      >
        {partnersData.platinum.map((partnerImage, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            style={{ maxWidth: partnerImage.partnersPageLogoImageWidth }}
          >
            <img
              src={partnerImage.imagePath}
              alt=""
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* 3段目（4つの画像） */}
      <div
        className="grid justify-items-center gap-4 mb-13.5 lg:mb-21"
        style={{
          gridTemplateColumns: `repeat(${partnersData.gold.length}, minmax(0, 1fr))`,
        }}
      >
        {partnersData.gold.map((partnerImage, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            style={{ maxWidth: partnerImage.partnersPageLogoImageWidth }}
          >
            <img
              src={partnerImage.imagePath}
              alt=""
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* 4段目（中央配置） */}
      <div
        className="grid justify-items-center gap-4 mb-13.5 lg:mb-21"
        style={{
          gridTemplateColumns: `repeat(${partnersData.silver.length}, minmax(0, 1fr))`,
        }}
      >
        {partnersData.silver.map((partnerImage, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            style={{ maxWidth: partnerImage.commonLogoImageWidth }}
          >
            <img
              src={partnerImage.imagePath}
              alt=""
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* 5段目（2つの画像） */}
      <div
        className="grid justify-items-center gap-4 mb-13.5 lg:mb-21"
        style={{
          gridTemplateColumns: `repeat(${partnersData.bronze.length}, minmax(0, 1fr))`,
        }}
      >
        {partnersData.bronze.map((partnerImage, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            style={{ maxWidth: partnerImage.commonLogoImageWidth }}
          >
            <img
              src={partnerImage.imagePath}
              alt=""
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
