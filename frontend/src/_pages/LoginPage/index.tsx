'use client'
import Image from "next/image";
import FormLogin from "../../components/FormLogin";
import img from '../../../public/dl.beatsnoop 1.svg';

const LoginPage = () => {
  return (
    <div className="my-20 flex flex-row items-center gap-60">
      <Image src={img} alt="logo" width={780} height={780} />
      <div className="w-[25%] gap-20 flex flex-col">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-medium">Log in to Exclusive</h2>
          <p className="text-base">Enter your details below</p>
        </div>
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginPage;
