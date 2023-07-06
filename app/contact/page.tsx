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
          <div className="flex flex-col 
                    items-center justify-center">
            <p className='py-2'>
              Send a message to Big Munny Photos
            </p>
  
            <form className='py-3 text-4xl md:text-sm'>
                <input aria-label="Enter your email address" 
                       type="text" placeholder="Email address" 
                       className="w-full
                              mr-1 md:mr-3 py-8 px-4 h-2 border 
                              rounded mb-2" />
                <input aria-label="Enter your name/nickname/alias/CIA agent #/etc." 
                       type="text" placeholder="Name or (nickname/alias/CIA agent #/etc.)"
                       className="w-full
                        mr-3 py-8 px-4 h-2 border 
                        rounded mb-2" />
                <input aria-label="What is the subject of this message?" 
                       type="text" placeholder="Subject"
                       className="w-full
                        mr-3 py-8 px-4 h-2 border 
                        rounded mb-2" />
  
                <button type="submit"
                        className="w-full mt-4">
                    Login
                </button>
            </form>
        </div>
        </main>
      </div>
    )
  }

