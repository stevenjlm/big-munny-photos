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
        <div><Image
                src="/main_logo.svg"
                width={screen.width*.25}
                height={screen.height*.25}
                alt={""}
              /></div>
        <button className='text-4xl md:text-lg lg:text-base rounded bg-white text-mybase-900 font-medium px-5 py-2 hover:bg-green-500'>Contact</button>
      </header>
      <main>
        <div className="flex flex-col items-center mx-12">
          <Tab.Group>
          <Tab.List className="flex items-center text-4xl sm:text-2xl md:text-base lg:text-base xl:text-xs">
            <Tab className={({ selected }) => TabLogic(selected)}>All</Tab>
            <Tab className={({ selected }) => TabLogic(selected)}>Portraits</Tab>
            <Tab className={({ selected }) => TabLogic(selected)}>Travel</Tab>
            <Tab className={({ selected }) => TabLogic(selected)}>Automotive</Tab>
            <Tab className={({ selected }) => TabLogic(selected)}>Dance</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="py-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-4">
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

export function TabLogic(selected: boolean): string {
  return selected ? 'bg-mybase-300 text-mybase-900 px-2 lg:px-8 md:px-4 sm:px-2 font-bold' : 'bg-mybase-700 text-white px-2 lg:px-8 md:px-4 sm:px-2 font-bold';
}


export function ImageColumn(firstImg: any, secondImg: any, thirdImg: any) {
  return(
    <div className="grid gap-4">
        <div>
            <Image src={firstImg} alt=" " className='rounded'/>
        </div>
        <div>
            <Image src={secondImg} alt=" " className='rounded'/>
        </div>
        <div>
            <Image src={thirdImg} alt=" " className='rounded'/>
        </div>
    </div>
  )
}
