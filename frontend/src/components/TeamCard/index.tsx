import { TeamCardType } from '@/types/team-card-type';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const TeamCard: React.FC<TeamCardType> = ({ url, alt, name, role }) => {
  return (
    <div className="min-h-[564px] min-w-[370px] flex flex-col gap-6">
      <Image src={url} width={370} height={564} alt={alt} />
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-medium">{name}</h3>
        <p className="text-lg">{role}</p>
        <div className="flex flex-row gap-4">
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
