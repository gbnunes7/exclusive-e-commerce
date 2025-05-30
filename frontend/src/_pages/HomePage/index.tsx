'use client';
import { CountdownTimer } from '@/components/CountdownTimer';
import CtaCard from '@/components/CtaCard';
import ListItemNavigate from '@/components/ListItemNavigate';
import { ProductCard } from '@/components/ProductCard';
import { SwiperBanner } from '@/components/Swiper';
import { SwiperBestSellingProducts } from '@/components/SwiperBestSellingProducts';
import { SwiperProductsSales } from '@/components/SwiperProductsSale';
import { CtaCardProps } from '@/types/cta-card-type';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { FaHeadphones } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
const HomePage = () => {
  const categoriesArr = [
    {
      title: "Woman's Fashion",
      href: '/',
    },
    {
      title: "Men's Fashion",
      href: '/',
    },
    {
      title: 'Electronics',
      href: '/',
    },
    {
      title: 'Home & Lifestyle',
      href: '/',
    },
    {
      title: 'Medicine',
      href: '/',
    },
    {
      title: 'Sports & Outdoor',
      href: '/',
    },
    {
      title: "Baby's & Toys",
      href: '/',
    },
    {
      title: 'Groceries & Pets',
      href: '/',
    },
    {
      title: 'Health & Beauty',
      href: '/',
    },
  ]; //TODO: get this from API
  const products = [
    {
      image: '/globe.svg',
      productName: 'HAVIT HV-992 Gamepad',
      productPriceWithDiscount: 120,
      productPriceWithoutDiscount: 160,
    },
    {
      image: '/globe.svg',
      productName: 'AK-900 Wired Keyboard',
      productPriceWithDiscount: 960,
      productPriceWithoutDiscount: 1160,
    },
    {
      image: '/globe.svg',
      productName: 'IPS LCD Gaming Monitor',
      productPriceWithDiscount: 370,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      productName: 'S-Series Comfort Chair',
      productPriceWithDiscount: 375,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      productName: 'IPS LCD Gaming Monitor',
      productPriceWithDiscount: 370,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      productName: 'S-Series Comfort Chair',
      productPriceWithDiscount: 375,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      productName: 'IPS LCD Gaming Monitor',
      productPriceWithDiscount: 370,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      productName: 'S-Series Comfort Chair',
      productPriceWithDiscount: 375,
      productPriceWithoutDiscount: 400,
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

  const router = useRouter();

  return (
    <div className="my-20 flex flex-col gap-20 px-40">
      <section className="flex flex-row">
        <ul className="flex flex-col gap-4 border-r-[1px] pr-10 w-[250px]">
          {categoriesArr.map((category, index) => (
            <ListItemNavigate key={index} href={category.href}>
              {category.title}
            </ListItemNavigate>
          ))}
        </ul>
        <SwiperBanner />
      </section>
      <section className="flex flex-col gap-4">
        <span className=" text-[#DB4444] border-l-[14px] border-l-[#DB4444] pl-2">
          Today's
        </span>
        <div className="flex flex-row gap-20 items-center">
          <h3 className="text-[36px] font-semibold">Flash Sales</h3>
          <CountdownTimer />
        </div>
        <div className="flex flex-row gap-8 mt-8 ">
          <SwiperProductsSales />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <span className=" text-[#DB4444] border-l-[14px] border-l-[#DB4444] pl-2">
          This Month
        </span>
        <h3 className="text-[36px] font-semibold">Best Selling Products</h3>
        <div className="flex flex-row mt-8 ">
          <SwiperBestSellingProducts />
        </div>
      </section>
      <section className="w-full my-10">
        <Image src="/Frame 600.svg" alt="banner" width={1920} height={400} />
      </section>
      <section className="flex flex-col gap-4">
        <span className=" text-[#DB4444] border-l-[14px] border-l-[#DB4444] pl-2">
          Our Products
        </span>
        <h3 className="text-[36px] font-semibold">Explore Our Products</h3>
        <div className="grid grid-cols-4 mt-8 gap-y-20">
          {products.map((product, index) => (
            <ProductCard
              image={product.image}
              productName={product.productName}
              productPriceWithDiscount={product.productPriceWithDiscount}
              productPriceWithoutDiscount={product.productPriceWithoutDiscount}
              key={index}
              onAddToCart={() => {}}
              onView={() => {}}
              onWishlist={() => {}}
            />
          ))}
        </div>
        <button
          onClick={() => router.push('/products')}
          className="bg-[#DB4444] py-4 px-12 text-base rounded-[4px] text-white mx-auto mt-10"
        >
          View All Products
        </button>
      </section>
      <section className="flex flex-col gap-4">
        <span className=" text-[#DB4444] border-l-[14px] border-l-[#DB4444] pl-2">
          Featured
        </span>
        <h3 className="text-[36px] font-semibold">New Arrival</h3>
        <div className="flex flex-row mt-8 gap-8">
          <Image
            src="/new-arrival-ps5.svg"
            alt="banner"
            width={570}
            height={600}
          />
          <div className="flex flex-col gap-8">
            <Image
              src="/new-arrival-woman.svg"
              alt="banner"
              width={570}
              height={284}
            />
            <div className="gap-8 flex flex-row">
              <Image
                src="/speakers.svg"
                alt="banner"
                width={270}
                height={284}
              />
              <Image src="/perfume.svg" alt="banner" width={270} height={284} />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-center gap-20 my-20">
        {ctaCardCustomerExperienceArray.map((ctaCard, index) => (
          <CtaCard key={index} {...ctaCard} section={true} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
