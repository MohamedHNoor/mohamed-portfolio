'use client';

import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

// libs
import { services } from '@/lib/services';

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-[60px] md:grid-cols-2'>
          {services.map(({ num, title, description, href }) => (
            <div
              key={num}
              className='flex-1 flex flex-col gap-6 justify-center group'
            >
              {/* top */}
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                  {num}
                </div>
                <Link
                  href={href}
                  className='w-[70px] h-[70px] rounded-full group-hover:bg-accent bg-white flex justify-center items-center hover:-rotate-45 transition-all duration-500 '
                >
                  <BsArrowDownRight className='text-primary text-3xl' />
                </Link>
              </div>
              {/* title */}
              <h2 className='text-[42px] text-white font-bold leading-none group-hover:text-accent transition-all duration-500 '>
                {title}
              </h2>
              <p className='text-white/60'>{description}</p>
              {/* border */}
              <div className='border-b border-white/20 w-full' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
