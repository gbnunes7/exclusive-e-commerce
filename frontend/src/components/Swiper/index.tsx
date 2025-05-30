'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const SwiperBanner = () => {
  const slides = [
    { id: 1, title: 'Slide 1', image: '/images/slide1.jpg' },
    { id: 2, title: 'Slide 2', image: '/images/slide2.jpg' },
    { id: 3, title: 'Slide 3', image: '/images/slide3.jpg' },
    { id: 4, title: 'Slide 4', image: '/images/slide4.jpg' }
  ];

  return (
    <div className="relative flex-1 max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-full h-80"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative w-full h-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="bg-black bg-opacity-50 p-4 rounded-xl">{slide.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};