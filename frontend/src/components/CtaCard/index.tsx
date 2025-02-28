import { CtaCardProps } from '@/types/cta-card-type';
import { cn } from '@/utils/cn';

const CtaCard: React.FC<CtaCardProps> = ({
  number,
  text,
  icon: Icon,
  section,
}) => {
  return (
    <div
      className={cn(
        section
          ? 'min-w-[270px] min-h-[230px] flex flex-col items-center justify-center gap-4'
          : 'min-w-[270px] min-h-[230px] flex flex-col shadow-md items-center justify-center gap-4 hover:bg-[#DB4444] hover:text-white border-[1px] rounded-[4px] border-[#363738] transition duration-200 ease-linear hover:border-none',
      )}
    >
      <div className="text-4xl">
        <Icon />
      </div>
      <p className="font-bold text-3xl text-center">{number}</p>
      <p className="text-base">{text}</p>
    </div>
  );
};

export default CtaCard;
