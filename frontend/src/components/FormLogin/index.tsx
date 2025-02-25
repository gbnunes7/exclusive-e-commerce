'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schema/login-schema';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import { LoginType } from '@/types/login-type';

const FormLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (data: LoginType) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit(onSubmit)}>
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

      <div className="flex flex-row items-center justify-between mt-6">
        <button className="bg-[#DB4444] py-4 px-12 text-base rounded-[4px] text-white">
          Login
        </button>
        <button className="bg-transparent text-[#db4444]">
          Forget Password?
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
