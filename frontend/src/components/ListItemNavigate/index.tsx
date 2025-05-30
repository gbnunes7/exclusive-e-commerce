import Link from 'next/link';
import { cn } from '../../utils/cn';

type ListItemNavigateProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
};

const ListItemNavigate: React.FC<ListItemNavigateProps> = ({
  href,
  children,
  active,
}) => {
  return (
    <Link href={href} className="group">
      <li
        className={cn(
          'relative cursor-pointer text-black',
          active && 'border-b-[1px] border-black text-black',
        )}
      >
        {children}
        <span
          className={cn(
            'absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full',
            active && 'hidden',
          )}
        />
      </li>
    </Link>
  );
};

export default ListItemNavigate;
