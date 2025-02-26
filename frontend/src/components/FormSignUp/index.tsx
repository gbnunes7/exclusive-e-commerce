'use client';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import { signUpSchema } from '@/schema/sign-up-schema';
import { SignUpType } from '@/types/sign-up-schema';
import Link from 'next/link';

const FormSignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
    defaultValues: { email: '', password: '', confirmPassword: '', name: '' },
  });

  const onSubmit = (data: SignUpType) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-6 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register('name')}
        className="border-b-2 text-base py-2 placeholder:text-[#7D8184] focus:ring-0 focus:outline-none"
        placeholder="Name"
      />
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      <input
        {...register('email')}
        className="border-b-2 text-base py-2 placeholder:text-[#7D8184] focus:ring-0 focus:outline-none"
        placeholder="Email"
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <input
        {...register('password')}
        className="border-b-2 text-base py-2 placeholder:text-[#7D8184] focus:ring-0 focus:outline-none"
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      <input
        {...register('confirmPassword')}
        className="border-b-2 text-base py-2 placeholder:text-[#7D8184] focus:ring-0 focus:outline-none"
        type="password"
        placeholder="Confirme the password"
      />
      {errors.confirmPassword && (
        <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
      )}

      <button className="bg-[#DB4444] py-4 px-12 text-base rounded-[4px] text-white" type='submit'>
        Create account
      </button>
      <span className='text-black'>Already have account? <Link href={"/(auth)/login"} className='font-semibold border-b-[1px] py-1 border-black'>Log in</Link></span>
    </form>
  );
};

export default FormSignUp;
