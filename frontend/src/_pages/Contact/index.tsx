'use client';

import FormContactUs from '@/components/FormContactUs';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const ContactPage = () => {
  return (
    <div className="my-40 flex flex-row items-center gap-60">
      <div className="bg-white min-h-[457px] rounded-[4px] min-w-[340px] shadow-md p-10 flex flex-col gap-6">
        <div className="flex flex-col h-full gap-6 border-b-[1px] pb-6 border-black">
          <span className="text-base font-medium flex items-center gap-4">
            <FaPhoneAlt className="text-3xl" />
            Call To Us
          </span>
          <p className="text-sm text-black">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-sm text-black">Phone: +8801611112222</p>
        </div>
        <div className="flex flex-col h-full gap-6">
          <span className="text-base font-medium flex items-center gap-4">
            <MdOutlineMail className="text-3xl" />
            Write To US
          </span>
          <p className="text-sm text-black">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm text-black">Emails: customer@exclusive.com</p>
          <p className="text-sm text-black">Emails: support@exclusive.com</p>
        </div>
      </div>
      <div>
        <FormContactUs />
      </div>
    </div>
  );
};

export default ContactPage;
