'use client';
import { useRouter } from 'next/navigation';

const NotFound404Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4">
      <div className="w-full max-w-4xl px-4 py-2 text-gray-500 flex gap-2 text-sm justify-center">
        <span
          className="cursor-pointer hover:underline"
          onClick={() => router.push('/')}
        >
          Home
        </span>
        <span>/</span>
        <span className="text-gray-700 font-semibold">404 Error</span>
      </div>

      <h1 style={{ fontSize: '110px' }} className="text-black">
        404 Not Found
      </h1>
      <p>Your visited page not found. You may go home page</p>
      <button
        onClick={() => router.push('/')}
        className="bg-[#DB4444] py-4 px-12 text-base rounded-[4px] text-white"
      >
        Back to home page
      </button>
    </div>
  );
};

export default NotFound404Page;
