import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
  import { navLinks } from '@/app/libs/constants';

const Topbar = () => {
  return (
    <div className='sticky top-0'>
      <Image src="/images/logo.png" width={150} height={70} alt='logo dasboard'></Image>
        <div className='flex flex-col gap-12 left-menu top-menu'>
        {navLinks.map((links) => (
          <Link href={links.url} key={links.label} className='text-body-medium flex gap-3\'> {links.icon} <span>{links.label}</span></Link>
        ))}
        </div>
        <div className='flex align-middle top-menu-bar'>
          <menu></menu>
        </div>
    </div>
  )
}

export default Topbar