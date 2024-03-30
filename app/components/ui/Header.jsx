import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='w-full bg-gray-600'>
      <div className='container m-auto py-6 flex justify-between items-center'>
        <Image 
        src={'/logo.png'}
        alt='Logo Image'
        width={250}
        height={250}
        priority
        />

        <nav className='flex justify-between gap-2'>
            <a href="#" className='text-base text-slate-100 p-3'>
                Enlace 1
            </a>
            <a href="#" className='text-base text-slate-100 p-3'>
                Enlace 2
            </a>
            <a href="#" className='text-base text-slate-100 p-3'>
                Enlace 3
            </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
