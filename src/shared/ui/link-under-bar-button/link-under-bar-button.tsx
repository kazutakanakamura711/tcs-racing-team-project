import { Link } from 'react-router-dom';

interface Props {
  text: string;
  url: string;
  isCenter?: boolean;
}

export const LinkUnderBarButton = ({ text, url, isCenter }: Props) => {
  return (
    <div className={`flex ${isCenter ? 'justify-center' : 'justify-start'}`}>
      <Link to={url} className="inline-block text-white">
        <div className="flex items-center gap-2 border-b! border-accent-pink!">
          <span className="text-[10px] text-white lg:text-xs">{text}</span>
          <img
            className="h-1 w-1.5"
            src="/images/common/ico-arrow-white-brock.svg"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};
