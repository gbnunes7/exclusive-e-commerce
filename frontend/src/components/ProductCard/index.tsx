'use client';
import { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';

type ProductCardProps = {
  image: string;
  discount?: number;
  onWishlist: () => void;
  onView: () => void;
  onAddToCart: () => void;
  productName: string;
  productPriceWithDiscount?: number;
  productPriceWithoutDiscount: number;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  discount,
  onWishlist,
  onView,
  onAddToCart,
  productName,
  productPriceWithDiscount,
  productPriceWithoutDiscount,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-64 bg-[#F5F5F5] shadow-md rounded-lg text-center">
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discount}%
          </span>
        )}
        <img
          src={image}
          alt="Product"
          className="w-full h-40 object-cover mb-4"
        />
        <div className="flex flex-col mb-4 mr-2 items-end gap-2">
          <button onClick={onWishlist} className="p-2 bg-white rounded-full">
            <MdFavoriteBorder />
          </button>
          <button onClick={onView} className="p-2 bg-white rounded-full">
            <IoEyeOutline />
          </button>
        </div>
        <button
          onClick={onAddToCart}
          className={`w-full bg-black text-white rounded-b py-2 transition-opacity duration-500 ease-in-out transform ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0'}`}
        >
          Add To Cart
        </button>
      </div>
      <div>
        <p className="text-black">{productName}</p>
        <div className="flex flex-row gap-3">
          {discount && (
            <p className="text-[#DB4444]">${productPriceWithDiscount}</p>
          )}

          <p className={`text-gray-700 ${discount && 'line-through'}`}>
            ${productPriceWithoutDiscount}
          </p>
        </div>
      </div>
    </div>
  );
};
