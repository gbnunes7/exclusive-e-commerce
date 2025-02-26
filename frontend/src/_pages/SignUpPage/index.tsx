'use client';
import Image from 'next/image';
import FormSignUp from '../../components/FormSignUp';

import img from '../../../public/dl.beatsnoop 1.svg';

const SignUpPage = () => {
  return (
    <div className="my-20 flex flex-row items-center gap-60">
      <Image src={img} alt="logo" width={780} height={780} />
      <div className="w-[25%] gap-20 flex flex-col">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-medium">Create an account</h2>
          <p className="text-base">Enter your details below</p>
        </div>
        <FormSignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
