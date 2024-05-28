'use client';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

import { links } from '@/lib/links';
import Link from 'next/link';
import { Button } from './ui/button';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        {/* logo */}
        <div className='mt-20 mb-10 text-center text-2xl'>
          <Link href='/'>
            <h1 className='text-4xl font-semibold'>
              Mohamed<span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className='flex flex-col justify-center items-center gap-8 p-4'>
          {links.map(({ name, path }) => (
            <Link
              href={path}
              key={name}
              className={`${
                path === pathname && 'text-accent border-b-2 border-accent'
              } text-xl capitalize hover:text-accent-hover transition-colors duration-500`}
            >
              {name}
            </Link>
          ))}
          <Link href='/contact'>
            <Button variant='outline'>Hire Me</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
