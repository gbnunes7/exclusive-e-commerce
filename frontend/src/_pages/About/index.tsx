'use client';
import { useRouter } from 'next/navigation';
import image from '../../../public/Side Image.svg';
import Image from 'next/image';
import CtaCard from '@/components/CtaCard';
import { FaHeadphones, FaMoneyBill, FaUserFriends } from 'react-icons/fa';
import type { CtaCardProps } from '@/types/cta-card-type';
import { FaShop } from 'react-icons/fa6';
import { IoBagOutline } from 'react-icons/io5';
import { TbMoneybag, TbTruckDelivery } from 'react-icons/tb';
import { TeamCardType } from '@/types/team-card-type';
import TeamCard from '@/components/TeamCard';
import { AiFillSafetyCertificate } from 'react-icons/ai';

const AboutPage = () => {
  const router = useRouter();

  const ctaCardArray: CtaCardProps[] = [
    {
      icon: FaShop,
      number: '10.5k',
      text: 'Sallers active our site',
    },
    {
      icon: FaMoneyBill,
      number: '33k',
      text: 'Mopnthly Produduct Sale',
    },
    {
      icon: IoBagOutline,
      number: '45.5k',
      text: 'Customer active in our site',
    },
    {
      icon: TbMoneybag,
      number: '25k',
      text: 'Anual gross sale in our site',
    },
  ];

  const teamArray: TeamCardType[] = [
    {
      url: '/photo-man.svg',
      alt: 'Tom Cruise',
      name: 'Tom Cruise',
      role: 'Founder & Chairman',
    },
    {
      url: '/photo-woman.svg',
      alt: 'Emma Watson',
      name: 'Emma Watson',
      role: 'Managing Director',
    },
    {
      url: '/photo-man-2.svg',
      alt: 'Will Smith',
      name: 'Will Smith',
      role: 'Product Designer',
    },
  ];

  const ctaCardCustomerExperienceArray: CtaCardProps[] = [
    {
      icon: TbTruckDelivery,
      number: 'FREE AND FAST DELIVERY',
      text: 'Free delivery for all orders over $140',
    },
    {
      icon: FaHeadphones,
      number: '24/7 CUSTOMER SERVICE',
      text: 'Friendly 24/7 customer support',
    },
    {
      icon: AiFillSafetyCertificate,
      number: 'MONEY BACK GUARANTEE',
      text: 'We reurn money within 30 days',
    },
  ];

  return (
    <div className="my-20 flex flex-col items-center gap-20">
      <div className="self-start w-full max-w-4xl px-5 py-2 text-gray-500 flex gap-2 text-sm">
        <span
          className="cursor-pointer hover:underline"
          onClick={() => router.push('/')}
        >
          Home
        </span>
        <span>/</span>
        <span className="text-gray-700 font-semibold">About</span>
      </div>
      <section className="flex flex-row-reverse justify-between gap-60">
        <Image src={image} alt="About" width={700} height={600} />
        <div className="flex flex-col gap-4 max-w-[525px]">
          <h2 className="font-semibold text-5xl">Our Story</h2>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{' '}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </section>
      <section className="flex flex-row gap-8 my-20">
        {ctaCardArray.map((ctaCard, index) => (
          <CtaCard key={index} {...ctaCard} />
        ))}
      </section>
      <section className="flex flex-row gap-8 my-20">
        {teamArray.map((teamCard, index) => (
          <TeamCard key={index} {...teamCard} />
        ))}
      </section>
      <section className="flex flex-row gap-8 my-20">
        {ctaCardCustomerExperienceArray.map((ctaCard, index) => (
          <CtaCard key={index} {...ctaCard} section={true}/>
        ))}
      </section>
    </div>
  );
};

export default AboutPage;
