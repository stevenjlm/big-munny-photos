"use client";

import Image from 'next/image'
import { Tab } from '@headlessui/react'

// for all tab
import img1 from '../public/all/cablecar.jpg';
import img2 from '../public/all/me_portrait.jpg';
import img3 from '../public/all/ciel.jpg';
import img4 from '../public/all/sf_rainbow.jpg';
import img5 from '../public/all/pelican.jpg';
import img6 from '../public/all/sb.jpg';
import img7 from '../public/all/nissan.jpg';
import img8 from '../public/all/portrait1.jpg';
import img9 from '../public/all/yane.jpg';
import img10 from '../public/all/saori.jpg';
import img11 from '../public/all/cars.jpg';
import img12 from '../public/all/alaska.jpg';



export default function Home() {
  return (
    <div className='h-full'>
      <header className='flex justify-between items-center px-12 py-6'>
        <div><Image src="/main_logo.svg" alt="Main logo" width={300} height={200}/></div>
        <button className='rounded-xl bg-white text-slate-950 text-4xl font-medium px-5 py-2 hover:bg-emerald-800 '>Contact</button>
      </header>
      <main>
        <div className="flex flex-col items-center mx-12">
          <Tab.Group>
          <Tab.List className="flex items-center gap-4 py-0 text-slate-200">
            <Tab>All</Tab>
            <Tab>Portraits</Tab>
            <Tab>Travel</Tab>
            <Tab>Automotive</Tab>
            <Tab>Dance</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-1 gap-4">
              {ImageColumn(img1, img2, img3)}
              {ImageColumn(img4, img5, img6)}
              {ImageColumn(img7, img8, img9)}
              {ImageColumn(img10, img11, img12)}
            </div>
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        </div>
      </main>
    </div>
  )
}


export function ImageColumn(firstImg: any, secondImg: any, thirdImg: any) {
  return(
    <div className="grid gap-4">
        <div>
            <Image src={firstImg} alt=" "/>
        </div>
        <div>
            <Image src={secondImg} alt=" "/>
        </div>
        <div>
            <Image src={thirdImg} alt=" "/>
        </div>
    </div>
  )
}
