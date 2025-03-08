'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Minus, Plus, Truck } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const products = [
    {
      image: '/globe.svg',
      id: 1,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi, voluptatem ratione esse labore itaque modi perferendis tempore aliquam quidem? Aperiam voluptas blanditiis perspiciatis assumenda quae, dicta temporibus aliquam ducimus.',
      quantity: 3,
      productName: 'HAVIT HV-992',
      productPriceWithDiscount: 120,
      productPriceWithoutDiscount: 160,
    },
    {
      image: '/globe.svg',
      id: 2,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi, voluptatem ratione esse labore itaque modi perferendis tempore aliquam quidem? Aperiam voluptas blanditiis perspiciatis assumenda quae, dicta temporibus aliquam ducimus.',
      quantity: 3,
      productName: 'HAVIT HV-92 Gamepad',
      productPriceWithDiscount: 120,
      productPriceWithoutDiscount: 160,
    },
    {
      image: '/globe.svg',
      id: 3,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi, voluptatem ratione esse labore itaque modi perferendis tempore aliquam quidem? Aperiam voluptas blanditiis perspiciatis assumenda quae, dicta temporibus aliquam ducimus.',
      quantity: 3,
      productName: 'HAVI HV-992 Gamepad',
      productPriceWithDiscount: 120,
      productPriceWithoutDiscount: 160,
    },
    {
      image: '/globe.svg',
      id: 4,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi, voluptatem ratione esse labore itaque modi perferendis tempore aliquam quidem? Aperiam voluptas blanditiis perspiciatis assumenda quae, dicta temporibus aliquam ducimus.',
      quantity: 3,
      productName: 'HAVIT H-992 Gamepad',
      productPriceWithDiscount: 120,
      productPriceWithoutDiscount: 160,
    },
    {
      image: '/globe.svg',
      id: 5,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi, voluptatem ratione esse labore itaque modi perferendis tempore aliquam quidem? Aperiam voluptas blanditiis perspiciatis assumenda quae, dicta temporibus aliquam ducimus.',
      quantity: 3,
      productName: 'HAV HV-992 Gamepad',
      productPriceWithDiscount: 120,
      productPriceWithoutDiscount: 160,
    },
    {
      image: '/globe.svg',
      id: 6,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi, voluptatem ratione esse labore itaque modi perferendis tempore aliquam quidem? Aperiam voluptas blanditiis perspiciatis assumenda quae, dicta temporibus aliquam ducimus.',
      quantity: 3,
      productName: 'AK-900 Wired Keyboard',
      productPriceWithDiscount: 960,
      productPriceWithoutDiscount: 1160,
    },
    {
      image: '/globe.svg',
      id: 7,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi, voluptatem ratione esse labore itaque modi perferendis tempore aliquam quidem? Aperiam voluptas blanditiis perspiciatis assumenda quae, dicta temporibus aliquam ducimus.',
      quantity: 3,
      productName: 'IPS LCD Gaming Monitor',
      productPriceWithDiscount: 370,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      id: 8,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi, voluptatem ratione esse labore itaque modi perferendis tempore aliquam quidem? Aperiam voluptas blanditiis perspiciatis assumenda quae, dicta temporibus aliquam ducimus.',
      quantity: 3,
      productName: 'S-Series Comfort Chair',
      productPriceWithDiscount: 375,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      id: 9,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi, voluptatem ratione esse labore itaque modi perferendis tempore aliquam quidem? Aperiam voluptas blanditiis perspiciatis assumenda quae, dicta temporibus aliquam ducimus.',
      quantity: 3,
      productName: 'IPS LCD Gaming Monitor',
      productPriceWithDiscount: 370,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      id: 10,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi, voluptatem ratione esse labore itaque modi perferendis tempore aliquam quidem? Aperiam voluptas blanditiis perspiciatis assumenda quae, dicta temporibus aliquam ducimus.',
      quantity: 3,
      productName: 'S-Series Comfort Chair',
      productPriceWithDiscount: 375,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      id: 11,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi, voluptatem ratione esse labore itaque modi perferendis tempore aliquam quidem? Aperiam voluptas blanditiis perspiciatis assumenda quae, dicta temporibus aliquam ducimus.',
      quantity: 3,
      productName: 'IPS LCD Gaming Monitor',
      productPriceWithDiscount: 370,
      productPriceWithoutDiscount: 400,
    },
    {
      image: '/globe.svg',
      id: 12,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi, voluptatem ratione esse labore itaque modi perferendis tempore aliquam quidem? Aperiam voluptas blanditiis perspiciatis assumenda quae, dicta temporibus aliquam ducimus.',
      quantity: 3,
      productName: 'S-Series Comfort Chair',
      productPriceWithDiscount: 375,
      productPriceWithoutDiscount: 400,
    },
  ];

  useEffect(() => {
    const product = products.find((product) => product.id === Number(id));
    setProduct(product);
  }, [id]);

  //TODO: get from API and change ID for SLUG

  return (
    <div className="flex flex-col flex-1 items-center gap-4 my-20">
      <div className="self-start w-full max-w-4xl px-5 py-2 text-gray-500 flex gap-2 text-sm">
        <span className="cursor-pointer hover:underline">Home</span>
        <span>/</span>
        <span className="text-gray-700 ">Products</span>
        <span>/</span>
        <span className="text-gray-700 font-semibold">Product Detail</span>
        <span>/</span>
        <span className="text-gray-700 ">{id}</span>
      </div>
      <div className="flex flex-row gap-20">
        <div className="h-[600px] min-w-[500px] bg-gray-300 rounded-[4px] flex items-center justify-center">
          <Image src="/globe.svg" width={400} height={400} alt="logo" />
        </div>
        <div className="flex flex-col gap-4 max-w-[400px]">
          <div className="flex flex-col gap-2 border-b-[1px] border-gray-200 pb-6">
            <span className="font-semibold text-2xl">
              {product?.productName}
            </span>
            <span>${product?.productPriceWithoutDiscount.toFixed(2)}</span>
            <span className="text-sm">{product?.description}</span>
          </div>
          <div className="flex items-center rounded-md gap-4">
            <div className="flex items-center rounded-md border">
              <button
                className="px-3 py-2"
                disabled={product?.quantity! <= 1}
                aria-label="Decrease quantity"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                className="px-3 py-2"
                aria-label="Increase quantity"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button className="flex-1" size="lg">
              Buy Now
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsFavorite((prev) => !prev)}
              aria-label={
                isFavorite ? 'Remove from wishlist' : 'Add to wishlist'
              }
            >
              <Heart
                className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
              />
            </Button>
          </div>
          <div className="space-y-4 mt-6">
            <Card className="p-4">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Free Delivery</h4>
                  <p className="text-sm text-gray-500">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <div>
                  <h4 className="font-medium">Return Delivery</h4>
                  <p className="text-sm text-gray-500">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
