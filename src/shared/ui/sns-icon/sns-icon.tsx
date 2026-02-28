import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  href: string;
  icon: string;
  label: string;
}

export const SnsIcon: FC<Props> = ({ href, icon, label }) => {
  return (
    <Link to={href} target="_blank" rel="noopener noreferrer">
      <div className="size-8.75 rounded-full overflow-hidden">
        <img src={icon} alt={label} />
      </div>
    </Link>
  );
};
