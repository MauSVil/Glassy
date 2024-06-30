"use client";

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '../ui/button';

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center justify-between px-4 md:px-8 mx-auto py-7">
      <div className='md:col-span-3'>
        <Link href={'/'}>
          <h1 className="text-2xl font-semibold cursor-pointer">Gla<span className='text-primary'>ssy.</span></h1>
        </Link>
      </div>
      <div className='md:col-span-9 flex justify-end'>
        <SignedIn>
          <UserButton showName />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        {isSignedIn && (
          <Button variant="outline" className='ml-4'>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Header;