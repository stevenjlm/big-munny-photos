"use client";

import Image from 'next/image'
import Link from 'next/link';
import { Tab } from '@headlessui/react'
import { Calculator, BaseRate } from './calculator';
import { Collapse, Text, Grid} from '@nextui-org/react';
import React from 'react';

import logo from '../public/main_logo.svg'
// import allMenu from '../public/menu_text/menu-01.svg'
// import portMenu from '../public/menu_text/menu-02.svg'
// import travelMenu from '../public/menu_text/menu-03.svg'
// import autoMenu from '../public/menu_text/menu-04.svg'
// import danceMenu from '../public/menu_text/menu-05.svg'
// import ratesMenu from '../public/menu_text/menu-06.svg'
//import contactMenu from '../public/menu/menu-07.svg'


// for all tab
import img1 from '../public/all/cablecar.jpg';
import img2 from '../public/all/me_portrait.jpg';
import img3 from '../public/all/cth_one.jpg';
import img4 from '../public/all/sf_rainbow.jpg';
import img5 from '../public/all/sf.jpg';
import img6 from '../public/all/cars.jpg';
import img7 from '../public/all/Kev-scaled.jpg';
import img8 from '../public/all/saori.jpg';
import img9 from '../public/all/yane_com.jpg';
import img10 from '../public/all/IMG_6535-Edit-scaled.jpg';
import img11 from '../public/all/sb.jpg';
import img12 from '../public/all/alaska.jpg';

// for travel tab
import img101 from '../public/travel/sears.jpg';
import img102 from '../public/travel/philly.jpg';
import img103 from '../public/travel/paramount.jpg';
import img104 from '../public/travel/chicago_night.jpg';
import img105 from '../public/travel/bonnieux.jpg';
import img106 from '../public/travel/ggbridge.jpg';
import img107 from '../public/travel/blueangles.jpg';
import img108 from '../public/travel/philly_2.jpg';
import img109 from '../public/travel/provencale.jpg';
import img110 from '../public/travel/chicago_day.jpg';
import img111 from '../public/travel/fox.jpg';
import img112 from '../public/travel/fushimi.jpg';

// for protraits tab
import img201 from '../public/portraits/nay.jpg';
import img202 from '../public/portraits/portrait1.jpg';
import img203 from '../public/portraits/cth_two.jpg';
import img204 from '../public/portraits/fna.jpg';
import img205 from '../public/portraits/jna.jpg';
import img206 from '../public/portraits/jul.jpg';
import img207 from '../public/portraits/larry.jpg';
import img208 from '../public/portraits/ben.jpg';
import img209 from '../public/portraits/nette.jpg';
import img210 from '../public/portraits/work.jpg';
import img211 from '../public/portraits/yane.jpg';
import img212 from '../public/portraits/yane_light.jpg';

// for automotive tab
import img301 from '../public/automotive/DSC02499-Edit-scaled.jpg';
import img302 from '../public/automotive/DSC02504-Edit-scaled.jpg';
import img303 from '../public/automotive/IMG_2431-Edit-scaled.jpg';
import img304 from '../public/automotive/IMG_2460-Edit-scaled.jpg';
import img305 from '../public/automotive/IMG_8343-Edit-scaled.jpg';
import img306 from '../public/automotive/IMG_8368-Edit-1-scaled.jpg';
import img307 from '../public/automotive/IMG_9748-Edit-scaled.jpg';
import img308 from '../public/automotive/IMG_9760-Edit.jpg';
import img309 from '../public/all/nissan.jpg';
// import img310 from '../public/automotive/work.jpg';
// import img311 from '../public/automotive/yane.jpg';
// import img312 from '../public/automotive/yane_light.jpg';

import img401 from '../public/dance/IMG_3120-Edit-1-scaled.jpg';
import img402 from '../public/dance/IMG_6016-Edit-2-scaled.jpg';
import img403 from '../public/dance/IMG_6546-Edit-1-scaled.jpg';
import img404 from '../public/dance/IMG_6593-1-scaled.jpg';
import img405 from '../public/dance/IMG_6804-Edit-2-4-scaled.jpg';
import img406 from '../public/all/saori.jpg';
// import img407 from '../public/dance/IMG_9748-Edit-scaled.jpg';
// import img408 from '../public/dance/IMG_9760-Edit.jpg';
// import img409 from '../public/dance/nissan.jpg';

export default function Home() {

  return (
    <div className='h-full'>
      <header className='flex justify-between items-center px-24 py-6'>
        <div><Image
                src={logo}
                alt=""
                className='w-25'
                priority
              />
        </div>
        <Link href="/contact" className='text-4xl md:text-base lg:text-base-sm
          rounded-lg bg-white text-mybase-900 font-medium  hover:bg-green-500
          px-8 py-8 md:px-5 md:py-4 lg:px-3 lg:py-1 xl:px-3 xl:py-0'>
            <div className='flex ustify-between items-center'>
              <svg className="w-12 h-12 md:w-8 md:h-8 lg:w-6 lg:h-6 text-mybase-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
              <Text className='px-3'>Contact</Text>
            </div>
        </Link>
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
            <Tab className={({ selected }) => TabLogic(selected)}>Rates & Info</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="py-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-2 px-24">
              {ImageColumn([img1, img2, img4])}
              {ImageColumn([img3, img8, img6])}
              {ImageColumn([img5, img7, img12])}
              {ImageColumn([img10, img11, img9])}
            </div>
            </Tab.Panel>
            <Tab.Panel className="py-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-2 px-24">
                {ImageColumn([img203, img212, img201])}
                {ImageColumn([img207, img205, img206])}
                {ImageColumn([img208, img204, img209])}
                {ImageColumn([img202, img210, img211])}
              </div>
            </Tab.Panel>
            <Tab.Panel className="py-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-2 px-24">
                {ImageColumn([img101, img102, img103])}
                {ImageColumn([img104, img105, img106])}
                {ImageColumn([img108, img107, img109])}
                {ImageColumn([img110, img111, img112])}
              </div>
            </Tab.Panel>
            <Tab.Panel className="py-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-2 px-24">
                {ImageColumn([img306, img307])}
                {ImageColumn([img303, img305, img304])}
                {ImageColumn([img309, img301])}
                {ImageColumn([img302, img308])}
              </div>
            </Tab.Panel>
            <Tab.Panel className="py-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-2 px-24">
                {ImageColumn([img401])}
                {ImageColumn([img405])}
                {ImageColumn([img403, img404])}
                {ImageColumn([img406])}
              </div>
            </Tab.Panel>
            <Tab.Panel className="py-8 mx-12">
              <Grid.Container gap={2}>
                <Grid>
                  <Collapse.Group shadow>
                    <Collapse title="Rates" className='text-xl'>
                      <Text className='py-2'>I will always confirm rates before booking.</Text>
                      <Text className='py-2'>
                        The formula is:
                      </Text>
                      <Text className='py-2'>
                        ${BaseRate} (/hour) * (hours of shooting + hours of round-trip transportation beyond 1 hr)
                      </Text>
                    </Collapse>

                    <Collapse title="Quote/Estimate" className='text-xl'>
                      <Calculator></Calculator>
                    </Collapse>

                    <Collapse title="What is included" className='text-xl'>          
                      <Text className='py-2'>
                        My editing policy is flexible, please inquire if you have special requirements. Otherwise, generally, I proceed as follows:
                      </Text>
                      <Text className='py-2'>
                        After the photo shoot, I will send you all the photos with basic editing. You then select 10 photos per hour we spent shooting. I edited those photos in final form. The photos will be edited to fit your goals: edited for online, or for print, for example.
                      </Text>
                    </Collapse>

                    <Collapse title="FAQ" className='text-xl'>
                      <Text h1 weight={'bold'}>What locations do you serve?</Text>
                      <Text>Oakland, CA and anywhere within a 30 min drive/transit of Oakland.</Text>
                      <Text>Anywhere else in the Bay Area is possible, but I will charge a higher rate. See the &quot;Rates&quot; tab for estimates.</Text>

                      <Text h1 weight={'bold'}>Privacy Protection:</Text>
                      <Text>All photos are stored locally on fully encrypted hard drives. Photos are also backed-up and shared with clients via end-to-end encrypted cloud storage (see <Link href={'https://www.sync.com/'}>sync.com</Link>).</Text>
                      <Text>For enhanced confidentiality, please ask for my <Link href={'https://signal.org/'}>Signal</Link> number when contacting me.</Text>
                    </Collapse>
                    <Collapse title="About Me" className='text-xl'>
                      <Image src={img2} alt="Photo of Big Munny" width={200} className='rounded-sm' />
                      <Text className='py-3'>
                        One day, I went to retrieve a pizza my roommates had ordered, and it was under the name “$tev€n Munn¥.” I was already known as Big Steven among friends, so Big Munny became the new name.
                      </Text>

                      <Text className='py-3'>
                        This was just around the same time I became interested in photography (2017). Thanks to a lively community of photographers at UC Santa Barbara, I quickly grew fond of this awesome activity.
                      </Text>

                      <Text className='py-3'>
                        A trip to Japan later in 2017 prompted me to invest heavily in my photography gear and take my newfound hobby seriously. Landscapes and travel photography are a core aspect of my work; however, I love the challenge of shooting portraits and I practice every chance I can get.
                      </Text>
                    </Collapse>
                  </Collapse.Group>
                </Grid>
              </Grid.Container>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        </div>
      </main>
      <footer className='flex justify-between items-center px-24 py-6'>
        <p className='invisible'>t</p>
        <p className='text-4xl sm:text-2xl md:text-base lg:text-base xl:text-xs'>&copy; 2023 Steven Munn, All Rights Reserved</p>
        <p className='invisible'>t</p>
      </footer>
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
