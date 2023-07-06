"use client";

import Image from 'next/image'
import { Tab } from '@headlessui/react'


export default function Home() {
  return (
    <div className='h-full'>
      <header className='flex justify-between items-center px-12 py-6'>
        <div><Image src="/main_logo.svg" alt="Main logo" width={300} height={200}/></div>
        <button className='rounded-xl bg-white text-slate-950 text-4xl font-medium px-5 py-2 hover:bg-emerald-800 '>Contact</button>
      </header>
      <main>
        <div className="flex flex-col items-center">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {FirstColumn()}
                  <div className="grid gap-4">
                      <div>
                          <img className="h-auto max-w-full rounded-s" src="/IMG_1134-Edit.jpg" alt="Sunset along Mendocino coast"/>
                      </div>
                      <div>
                          <img className="h-auto max-w-full rounded-s" src="/IMG_5795-Edit.jpg" alt="Night photo of Fushimi Inari"/>
                      </div>
                      <div>
                          <img className="h-auto max-w-full rounded-s" src="/IMG_8189-Edit.jpg" alt="Sunset along Santa Barbara coast"/>
                      </div>
                  </div>
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


export function FirstColumn() {
  return(
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-s" src="/CableCar-8by12.jpg" alt="Cable car in San Francisco"/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-s" src="/IMG_2425-Edit.jpg" alt="Drift car at night"/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-s" src="/IMG_8368-Edit.jpg" alt="Two Pelicans diving"/>
        </div>
    </div>
  )
}
