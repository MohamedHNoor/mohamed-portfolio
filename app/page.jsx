import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

// components
import Photo from '@/components/Photo';
import Socials from '@/components/Socials';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Full Stack Developer</span>
            <h1 className='h1 mb-6'>
              Hello I&#39;m <br />{' '}
              <span className='text-accent'>Mohamed Noor</span>
            </h1>
            <p className='max-w-[500px] text-white/80 mb-9'>
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* btn and social icons */}
            <div className='flex flex-col xl:flex-row gap-8 items-center'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
              >
                <span>Download CV</span>
                <FiDownload className='text-xl' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials
                  containerStyles='flex flex-row gap-6'
                  iconStyles='w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
