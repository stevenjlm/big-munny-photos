"use client"

import Image from 'next/image'
import Link from 'next/link';
import {Text} from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';

import logo from '../../public/main_logo.svg'

export default function Home() {
  const searchParams = useSearchParams()
  console.log(searchParams.toString())

  function GenerateMessage() {
    if (searchParams.toString() == "") {
      return (
      <div className="flex flex-col mx-24">
        <h1 className='text-5xl py-8 text-white'>
          Success!
        </h1>
        <div className='flex items-center'>
          <svg className="h-8 w-8 text-green-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12l2 2l4 -4" />
          </svg>
          <p className='px-4 text-white'>Your message has been sent. Big Munny Photos will reach out as soon as possible.</p>
        </div>
      </div>)
    } else {
      return (
      <div className="flex flex-col mx-24">
        <h1 className='text-5xl py-8 text-white'>
            Error Sending Message
        </h1>
        <div className='flex items-center'>
          <svg className="h-8 w-8 text-red"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"> 
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /> 
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          <p className='px-4 text-white'>Error message: {searchParams.get("message")}</p>
        </div>
      </div>
      )
    }
  }

  return (
    <div className='h-full'>
      <header className='flex justify-between items-center px-24 py-6'>
        <div>
          <Link href={'/'}>
            <Image
              src={logo}
              alt="Big Munny Logo"
              className='w-25'
              priority
            />
          </Link>
        </div>
        <Link href="/" className='text-4xl md:text-lg lg:text-base rounded bg-white text-mybase-900 font-medium px-5 py-2 hover:bg-red'>
          <div className='flex justify-between items-center'>
            <svg className="w-12 h-12 md:w-8 md:h-8 lg:w-6 lg:h-6 text-mybase-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.293 1.707 1.707 7.293a1 1 0 0 0 0 1.414l5.586 5.586A1 1 0 0 0 9 13.586V2.414a1 1 0 0 0-1.707-.707Z"/>
            </svg>
            <Text className='px-3'>Back</Text>
          </div>
        </Link>
      </header>
      <main>
        <GenerateMessage />
      </main>
    </div>
  )
  }
  