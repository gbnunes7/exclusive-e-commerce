'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import { contactSchema } from '@/schema/contact-schema';
import { ContactType } from '@/types/contact-type';

const FormContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactType>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const onSubmit = (data: ContactType) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col w-full min-h-[457px] rounded-[4px] shadow-md px-8 py-10 gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row gap-4">
        <input
          {...register('name')}
          className="min-h-[50px] rounded-[4px] min-w-[235px] bg-[#F5F5F5] px-6"
          placeholder="Your Name"
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

        <input
          {...register('email')}
          className="min-h-[50px] rounded-[4px] min-w-[235px] bg-[#F5F5F5] px-6"
          type="email"
          placeholder="Your Email"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <input
          {...register('phone')}
          className="min-h-[50px] rounded-[4px] min-w-[235px] bg-[#F5F5F5] px-6"
          type="text"
          placeholder="Your Phone"
        />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
      </div>

      <textarea
        {...register('message')}
        className="min-h-[240px] rounded-[4px] min-w-[235px] bg-[#F5F5F5] px-6 py-4"
        placeholder="Your Message"
      />

      <button className="bg-[#DB4444] py-4 px-12 text-base rounded-[4px] text-white w-1/4 self-end">
        Send Message
      </button>
    </form>
  );
};

export default FormContactUs;
