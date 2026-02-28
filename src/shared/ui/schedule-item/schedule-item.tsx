import { Link } from 'react-router-dom';

interface Props {
  url?: string;
  title: string;
  startDate: string;
  endDate?: string;
  location: string;
}

export const ScheduleItem = ({
  url,
  title,
  startDate,
  endDate,
  location,
}: Props) => {
  return (
    <div className="group relative h-20 w-full">
      <Link to={url || ''}>
        {/* 前面カード（影付き） */}
        <div className="absolute -bottom-1.5 -left-1.5 z-1 flex h-full w-full cursor-pointer items-center justify-between bg-[#808080]">
          {/* 六角形アイコン */}
          <div className="absolute -left-4.5 top-[55%] size-14.5 -translate-y-1/2">
            <img
              className="block w-full"
              src="/images/schedule/ico-hexagon-black.svg"
              alt=""
            />
          </div>

          {/* コンテンツ本体 */}
          <div className="flex w-[calc(100%-48px)] items-center pl-10.5 md:w-[calc(100%-62px)] md:pl-12.5">
            {/* 日付 */}
            <div className="mr-3 flex w-12.5 flex-[0_0_40px] flex-col items-center justify-center text-center md:mr-4.5 md:flex-[0_0_64px]">
              <span className="text-[10px] sm:text-[11px] md:text-xs">
                {startDate}
              </span>
              <span className="inline-block rotate-90 text-xs">
                {endDate ? '〜' : ''}
              </span>
              <span className="text-[10px] sm:text-[11px] md:text-xs">
                {endDate || ''}
              </span>
            </div>

            {/* タイトル・場所 */}
            <div className="w-[calc(100%-48px)] overflow-hidden md:w-[calc(100%-80px)]">
              <p className="truncate text-xs md:text-base">{title}</p>
              <div className="flex items-center">
                <div className="mr-1.5">
                  <img src="/images/schedule/ico-pin-green.svg" alt="" />
                </div>
                <span className="text-[10px] md:text-xs">{location || ''}</span>
              </div>
            </div>
          </div>

          {/* 矢印 */}
          <div className="ml-2 flex flex-[0_0_40px] items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 md:flex-[0_0_50px]">
            <img
              className="w-2.75 h-6.25"
              src="/images/common/ico-arrow-white-brock.svg"
              alt=""
            />
          </div>
        </div>

        {/* 背面カード（影） */}
        <div className="h-full w-full bg-[#707070] transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
      </Link>
    </div>
  );
};
