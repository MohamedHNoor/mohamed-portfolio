import Link from 'next/link';

import { socialIcons } from '@/lib/socialIcons';

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialIcons.map(({ icon, path, id }) => (
        <Link href={path} className={iconStyles} key={id} target='_blank'>
          {icon}
        </Link>
      ))}
    </div>
  );
};
export default Socials;
