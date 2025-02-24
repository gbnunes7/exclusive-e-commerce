import { BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
      <footer className="min-h-[440px] w-full bg-black text-white grid grid-cols-5 px-[160px] pt-14">
        <div className="flex flex-col gap-6">
          <p className="font-bold text-2xl">Exclusive</p>
          <p className="font-medium text-2xl">Subscribe</p>
          <p className="font-normal text-xl">Get 10% off your first order</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-[250px] h-[50px] bg-transparent text-white border-white border-2 rounded-md focus:border-2 focus:outline-none px-2"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold text-xl">Support</p>
          <p className="font-medium text-xl">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="font-normal text-xl">exclusive@gmail.com</p>
          <p className="font-normal text-xl">+88015-88888-9999</p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold text-xl">Account</p>
          <p className="font-medium text-xl">My account</p>
          <p className="font-normal text-xl">Login / Register</p>
          <p className="font-normal text-xl">Cart</p>
          <p className="font-normal text-xl">Wishlist</p>
          <p className="font-normal text-xl">Shop</p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold text-xl">Quick Links</p>
          <p className="font-medium text-xl">Privacy Policy</p>
          <p className="font-normal text-xl">Terms of Use</p>
          <p className="font-normal text-xl">FAQ</p>
          <p className="font-normal text-xl">Contact</p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold text-xl">Social Medias</p>
          <div className="flex-row flex gap-4">
            <BsInstagram />
            <FaGithub />
            <FaLinkedinIn />
            <FaTiktok />
          </div>
        </div>
      </footer>
  );
};

export default Footer;
