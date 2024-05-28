'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { links } from '@/lib/links';

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex gap-8'>
      {links.map(({ name, path }) => (
        <Link
          href={path}
          key={name}
          className={`${
            path === pathname && 'text-accent border-b-2 border-accent'
          } capitalize font-medium hover:text-accent-hover transition-colors duration-500`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
