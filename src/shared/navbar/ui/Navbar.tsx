import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="text-black w-full h-16 border-t-2 bottom-0 px-6 border-t-black fixed flex justify-center bg-white dark:border-t-white dark:bg-black">
      <div className="w-full md: h-full max-w-[768px] flex items-center justify-center">
        <Link className="dark:invert text-center" href={''}>
          Here might be a link to webring someday
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
