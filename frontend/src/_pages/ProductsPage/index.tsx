'use client';

import Filters from '@/components/Filters';
import { PaginationComponent } from '@/components/Pagination/inedx';
import { ProductCard } from '@/components/ProductCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ProductsPage = () => {
  const products = [
    {
      image: '/globe.svg',
      productName: 'HAVIT HV-992',
      productPriceWithDiscount: 120,
      productPriceWithoutDiscount: 160,
    },
    {
      image: '/globe.svg',
      productName: 'HAVIT HV-92 Gamepad',
      productPriceWithDiscount: 120,
      productPriceWithoutDiscount: 160,
    },
    {
      image: '/globe.svg',
      productName: 'HAVI HV-992 Gamepad',
      productPriceWithDiscount: 120,
      productPriceWithoutDiscount: 160,
    },
    {
      image: '/globe.svg',
      productName: 'HAVIT H-992 Gamepad',
      productPriceWithDiscount: 120,
      productPriceWithoutDiscount: 160,
    },
    {
      image: '/globe.svg',
      productName: 'HAV HV-992 Gamepad',
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

  const productsLength = 10;
  return (
    <div className="my-20 flex flex-col">
      <div className="flex flex-row w-full gap-10">
        <Filters />
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-3 bg-[#F5F5F5] py-4 px-10 rounded-lg">
            <span className="text-sm">{productsLength} Products</span>
            <div className="h-4 w-px bg-gray-700"></div>
            <Select defaultValue="popular">
              <SelectTrigger className="w-[180px] border-gray-700 bg-transparent">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 gap-10 mt-10">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                onAddToCart={() => {}}
                onView={() => {}}
                onWishlist={() => {}}
                productName={product.productName}
                productPriceWithoutDiscount={
                  product.productPriceWithoutDiscount
                }
              />
            ))}
          </div>
          <div className='mt-6'>
            <PaginationComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
