'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductCard } from '../ProductCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const SwiperBestSellingProducts = () => {
  const productsSales = [
    //TODO: get this from API
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
    }
  ];

  return (
    <div className="relative w-full">
      <div className="absolute top-[-40px] right-0 flex gap-3">
        <div className="swiper-button-next cursor-pointer">
          <FaChevronLeft className="text-black" />
        </div>
        <div className=" swiper-button-prev cursor-pointer">
          <FaChevronRight className="text-black" />
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        className="w-full h-full"
      >
        {productsSales.map((product, index) => (
          <SwiperSlide key={product.productName}>
            <ProductCard
              key={index}
              image={product.image}
              productName={product.productName}
              productPriceWithoutDiscount={product.productPriceWithoutDiscount}
              onWishlist={() => {}}
              onView={() => {}}
              onAddToCart={() => {}}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
