'use client';

import CountUp from 'react-countup';

// libs
import { stats } from '@/lib/stats';

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap max-w-[80vw] xl:max-w-none mx-auto gap-6'>
          {stats.map(({ num, text, id }) => (
            <div
              key={id}
              className='flex-1 flex gap-4 items-center justify-center xl:justify-start'
            >
              <CountUp
                end={num}
                duration={5}
                delay={0.05}
                formattingFn={(value) =>
                  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '')
                }
                className='text-4xl xl:text-6xl font-extrabold'
              />
              <p
                className={`${
                  text.length > 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                } leading-snug text-white/80`}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;
