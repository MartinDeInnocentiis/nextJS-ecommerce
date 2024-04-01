import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='w-full bg-gray-600'>
      <div className='container m-auto py-6 flex justify-between items-center'>
        <a href="/">
          <Image
            src={'/logo.png'}
            alt='Logo Image'
            width={250}
            height={250}
            priority
          />
        </a>

        <nav className='flex justify-between gap-2'>
          <a href="/" className='text-base text-slate-100 p-3'>
            Inicio
          </a>
          <a href="/productos/todos" className='text-base text-slate-100 p-3'>
            Productos
          </a>
          <a href="/admin" className='text-base text-slate-100 p-3'>
            Admin
          </a>
          <a href="/cart">
            <Image
              src={'/cart.png'}
              alt='Logo Image'
              width={50}
              height={50}
              priority
            />
          </a>
        </nav>

      </div>
    </header>
  )
}

export default Header
