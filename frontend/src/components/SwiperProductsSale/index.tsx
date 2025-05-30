'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductCard } from '../ProductCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const SwiperProductsSales = () => {
  const productsSales = [
    //TODO: get this from API
    {
      image: '/globe.svg',
      discount: 40,
      productName: 'HAVIT HV-992 Gamepad',
      productPriceWithDiscount: 120,
      productPriceWithoutDiscount: 160,
    },
    {
      image: '/globe.svg',
      discount: 35,
      productName: 'AK-900 Wired Keyboard',
      productPriceWithDiscount: 960,
      productPriceWithoutDiscount: 1160,
    },
    {
      image: '/globe.svg',
      discount: 30,
      productName: 'IPS LCD Gaming Monitor',
      productPriceWithDiscount: 370,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      discount: 25,
      productName: 'S-Series Comfort Chair',
      productPriceWithDiscount: 375,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      discount: 25,
      productName: 'S-Series',
      productPriceWithDiscount: 375,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      discount: 25,
      productName: 'S Comfort Chair',
      productPriceWithDiscount: 375,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      discount: 25,
      productName: 'Comfort Chair',
      productPriceWithDiscount: 375,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      discount: 25,
      productName: 'S',
      productPriceWithDiscount: 375,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      discount: 25,
      productName: 'S Chair',
      productPriceWithDiscount: 375,
      productPriceWithoutDiscount: 400,
    },
  ];

  return (
    <div className="relative w-full flex flex-col gap-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {productsSales.map((product, index) => (
          <SwiperSlide key={product.productName}>
            <ProductCard
              key={index}
              image={product.image}
              discount={product.discount}
              productName={product.productName}
              productPriceWithDiscount={product.productPriceWithDiscount}
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
