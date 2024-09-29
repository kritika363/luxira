import React from 'react';
import Image from 'next/image';
import { navLinks } from '@/app/libs/constants';
import Link from 'next/link';

const Leftside  = () => {
  return (
    <div className='h-screen left-0 sticky p-10 flex flex-col gap-16 bg-blue-200'>
        <Image src="/images/logo.png" width={150} height={70} alt='logo dasboard'></Image>
        <div className='flex flex-col gap-12 left-menu'>
        {navLinks.map((links) => (
          <Link href={links.url} key={links.label} className='text-body-medium flex gap-3\'> {links.icon} <span>{links.label}</span></Link>
        ))}
        </div>
        <div className='flex align-middle profile-link'>
            <Link href="/"><span className='profile-pic'></span>Edit Profile</Link>
        </div>
     </div>
  )
}

export default Leftside 