import React from 'react';
import Image from 'next/image';
import CartWidget from './CartWidget';
import Link from 'next/link'; // Importar Link de Next.js

const Header = () => {
  return (
    <header className='w-full bg-gray-600'>
      <div className='container m-auto py-6 flex justify-between items-center'>
        <Link href="/" passHref>
          <Image
            src={'/logo.png'}
            alt='Logo Image'
            width={250}
            height={250}
            priority
          />
        </Link>

        <nav className='flex justify-between gap-2'>
          <Link className='text-base text-slate-100 p-3' href="/" passHref>
            Inicio
          </Link>
          <Link className='text-base text-slate-100 p-3' href="/productos/todos" passHref>
            Productos
          </Link>
          <Link className='text-base text-slate-100 p-3' href="/admin" passHref>
            Admin
          </Link>
          <Link href="/cart" passHref>
            <CartWidget
              src={'/cart.png'}
              alt='Cart Image'
              width={50}
              height={50}
              priority
            />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;