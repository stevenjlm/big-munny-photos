"use client";

import Image from 'next/image'
import Link from 'next/link';
import { Tab } from '@headlessui/react'
import { Auth, Storage } from 'aws-amplify';
import { useState, useEffect } from 'react'
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import AWS from 'aws-sdk'

import logo from '../public/main_logo.svg'

// for all tab
// import img1 from '../public/all/cablecar.jpg';
// import img2 from '../public/all/me_portrait.jpg';
// import img3 from '../public/all/ciel.jpg';
// import img4 from '../public/all/sf_rainbow.jpg';
// import img5 from '../public/all/pelican.jpg';
// import img6 from '../public/all/sb.jpg';
// import img7 from '../public/all/nissan.jpg';
// import img8 from '../public/all/portrait1.jpg';
// import img9 from '../public/all/yane.jpg';
// import img10 from '../public/all/saori.jpg';
// import img11 from '../public/all/cars.jpg';
// import img12 from '../public/all/alaska.jpg';

// const [images, getImages] = useState<any | undefined>()
// const getUploadedImage = async () => {
//     const file = await Storage.get("/main_logo.svg", {
//         level: "public"
//     });
//     getImages(file)
// }
// useEffect(() => {
//     getUploadedImage()
// }, [])


Amplify.configure({ ...awsconfig, ssr: true });

const credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-west-1_G8Y3n6SVq"
});

export default async function Home() {

  const [images, getImages] = useState<any | string>([])

  const getUploadedImage = async () => {
    const file = await Storage.get("all/ben.jpg", {
        level: "public"
    });
    getImages(file)
  }
  useEffect(() => {
      getUploadedImage()
  }, [])

  return (
    <div className='h-full'>
      <header className='flex justify-between items-center px-24 py-6'>
        <div><Image
                src={logo}
                alt=""
                className='w-25'
                priority
              /></div>
        <Link href="/contact" className='text-4xl md:text-base lg:text-base-sm
          rounded-lg bg-white text-mybase-900 font-medium  hover:bg-green-500
          px-8 py-8 md:px-5 md:py-4 lg:px-3 lg:py-1 xl:px-3 xl:py-0'>Contact</Link>
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
            <Tab.Panel className="py-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-2 px-24">
            <Image src={images} alt=" " className='rounded-sm'/>
              {/* {ImageColumn([img1, img2, img3])}
              {ImageColumn([img4, img5, img6])}
              {ImageColumn([img7, img8, img9])}
              {ImageColumn([img10, img11, img12])} */}
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

function TabLogic(selected: boolean): string {
  return selected ? 'text-white px-2 lg:px-8 md:px-4 sm:px-2' : 'text-mybase-400 text-opacity-60 px-2 lg:px-8 md:px-4 sm:px-2 hover:text-green-500';
}


function ImageColumn(images: Array<any>) {
  return(
    <div className="grid gap-2">
      { images.map( (img, idx) => <div key={"img" + idx.toString()}>
            <Image src={img} alt=" " className='rounded-sm' placeholder='blur'/>
        </div>)}
    </div>
  )
}
