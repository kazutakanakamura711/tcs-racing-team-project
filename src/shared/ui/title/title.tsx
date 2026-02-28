import { FC } from 'react';

type Props = {
  title: string;
  subTitle: string;
  isCenter?: boolean;
  isHiddenUnderLine?: boolean;
  // idはhtmlのid属性
  id?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
};

export const Title: FC<Props> = ({
  title,
  subTitle,
  isCenter,
  isHiddenUnderLine,
  id,
  as: Heading = 'h2',
}) => {
  return (
    <div className="relative mb-12 min-h-14 md:mb-14 md:min-h-40" id={id}>
      {/* SubTitle（背景装飾テキスト） */}
      <span
        className={`absolute top-1/2 z-0 -translate-y-1/2 text-4xl text-[#1A1A1A] md:text-[108px] ${
          isCenter ? 'left-1/2 -translate-x-1/2' : 'left-0'
        }`}
        style={{
          textShadow:
            '1px 1px 0 #707070, -1px -1px 0 #707070, -1px 1px 0 #707070, 1px -1px 0 #C0C0C0, 0px 1px 0 #C0C0C0, 0 -1px 0 #C0C0C0, -1px 0 0 #C0C0C0, 1px 0 0 #C0C0C0',
        }}
      >
        {subTitle}
      </span>

      {/* Title */}
      <Heading
        className={`absolute bottom-0 z-1 text-[24px]! font-bold! text-white md:text-[56px]! ${
          isCenter ? 'left-1/2 -translate-x-1/2' : 'left-0'
        }`}
      >
        {title}
      </Heading>

      {/* レインボー下線 */}
      <div
        className={`absolute bottom-0 h-0.75 w-[10%] max-w-21.75 bg-[url('/images/common/img-text-bg-rainbow.webp')] bg-cover bg-no-repeat ${
          isCenter ? 'left-1/2 -translate-x-1/2' : 'left-0'
        } ${isHiddenUnderLine ? 'hidden' : 'block'}`}
      />
    </div>
  );
};
