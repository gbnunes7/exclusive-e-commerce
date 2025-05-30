'use client';
import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
} from 'react-icons/fa';
import ListItemNavigate from '../../components/ListItemNavigate';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const pathName = usePathname();

  const isActive = (path: string) => pathName === path;

  const isLogged = false;

  return (
    <header className="bg-white border-b-[1px] border-gray-200 h-[140px]">
      <div className="bg-black py-2">
        <p className="text-white text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
        </p>
      </div>
      <div className="flex flex-row justify-between px-24 pt-10 items-center">
        <h1 className="text-2xl font-bold text-gray-800">Exclusive</h1>
        <ul className="flex flex-row gap-10">
          <ListItemNavigate href="/" active={isActive('/')}>
            Home
          </ListItemNavigate>
          <ListItemNavigate href="/contact" active={isActive('/contact')}>
            Contact
          </ListItemNavigate>
          <ListItemNavigate href="/about" active={isActive('/about')}>
            About
          </ListItemNavigate>
          <ListItemNavigate href="/signup" active={isActive('/signup')}>
            Sign Up
          </ListItemNavigate>
        </ul>
        <div className="flex flex-row items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#F5F5F5] rounded-md pl-5 pr-10 py-2"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch />
            </span>
          </div>
          {isLogged && (
            <div className="flex flex-row gap-3">
              <Link href="/wishlist">
                <FaHeart className="text-xl" />
              </Link>
              <Link href="/cart">
                <FaShoppingCart className="text-xl" />
              </Link>
              <Link href="/profile">
                <FaUserCircle className="text-xl" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
