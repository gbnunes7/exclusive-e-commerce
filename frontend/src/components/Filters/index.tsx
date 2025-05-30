'use client'
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '../ui/checkbox';

const Filters = () => {
  const categoriesArr = [
    //TODO CHANGE FOR API
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
  ];
  return (
    <div className="h-full w-96 flex flex-col bg-[#F5F5F5] rounded-md p-8 shadow-md gap-4 py-12">
      <span className="text-black text-2xl font-semibold">Filters</span>
      <div className="flex flex-col border-b-[1px] border-[#c9c6c6] pb-4">
        <span className="text-black text-lg font-semibold">Price Range</span>
        <Slider defaultValue={[250]} max={1000} step={10} className="mt-4" />
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-black">$0</span>
          <span className="text-sm text-black">$1000</span>
        </div>
      </div>
      <div className="flex flex-col border-b-[1px] border-[#c9c6c6] pb-4 gap-2">
        <span className="text-black text-lg font-semibold">Categories</span>
        {categoriesArr.map((category, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox id={category.title} />
            <label
              htmlFor={category.title}
              className="text-sm text-black font-medium"
            >
              {category.title}
            </label>
          </div>
        ))}
      </div>
      <button
        
        className="bg-[#DB4444] py-4 px-12 text-md rounded-[4px] text-white font-semibold mx-auto w-full"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
