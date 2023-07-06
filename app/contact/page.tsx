import Image from 'next/image'
import Link from 'next/link';

import logo from '../../public/main_logo.svg'

export default function Home() {
    return (
      <div className='h-full'>
        <header className='flex justify-between items-center px-12 py-6'>
          <div><Image
                  src={logo}
                  alt=""
                  className='w-25'
                  priority
                /></div>
          <Link href="/" className='text-4xl md:text-lg lg:text-base rounded bg-white text-mybase-900 font-medium px-5 py-2 hover:bg-red'>Back</Link>
        </header>
        <main>
            Hi
        </main>
      </div>
    )
  }
  