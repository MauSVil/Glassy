import { Button } from '@/components/ui/button'
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center justify-between px-4 md:px-8 mx-auto py-7">
      <div className='md:col-span-3'>
        <Link href={'/'}>
          <h1 className="text-2xl font-semibold cursor-pointer">Gla<span className='text-primary'>ssy.</span></h1>
        </Link>
      </div>
      <div className='md:col-span-9 flex justify-end'>
        <Link href={'/login'}>
          <Button className='mr-4 text-white'>Login</Button>
        </Link>
        <Link href={'/signup'}>
          <Button variant='secondary'>Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;