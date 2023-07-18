"use client";

import Image from 'next/image';
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
        <div>
          <Image
            src={logo}
            alt="Big Munny Logo"
            className='w-2/5 md:w-44'
            priority
          />
        </div>
          <Link href="/contact" className='text-4xl md:text-base lg:text-base-sm
            rounded-lg bg-white text-mybase-900 font-medium  hover:bg-green-500
            px-8 py-8 md:px-5 md:py-4 lg:px-3 lg:py-1 xl:px-3 xl:py-1'>
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
          <Tab.List className="flex items-center text-5xl sm:text-2xl md:text-lg lg:text-lg xl:text-base">
            <Tab className={({ selected }) => TabLogic(selected)}>All</Tab>
            <Tab className={({ selected }) => TabLogic(selected)}>People</Tab>
            <Tab className={({ selected }) => TabLogic(selected)}>Travel</Tab>
            <Tab className={({ selected }) => TabLogic(selected)}>Cars</Tab>
            <Tab className={({ selected }) => TabLogic(selected)}>Dance</Tab>
            <Tab className={({ selected }) => TabLogic(selected)}>Rates & Info</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="py-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-2 px-24">
              {ImageColumn([img1, img2, img4], ["Cable car at night with lights","Person sitting", "San Francisco from Twin Peaks"])}
              {ImageColumn([img3, img8, img6], ["Couple dancing", "Ballerina dancing", "4 cars"])}
              {ImageColumn([img5, img7, img12], ["Sunset over San Francisco", "Person standing", "Woman studio photo"])}
              {ImageColumn([img10, img11, img9], ["Cat looking at camera", "Golden hour over Santa Barbara beach", "Woman cosplaying"])}
            </div>
            </Tab.Panel>
            <Tab.Panel className="py-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-2 px-24">
                {ImageColumn([img203, img212, img201], ["Couple in wedding gown and suit", "Woman posing in from of store sign", "Woman studio shot"])}
                {ImageColumn([img207, img205, img206], ["Man studio shot", "Couple outdoors", "Woman outdoors"])}
                {ImageColumn([img208, img204, img209], ["Man standing in from of Stop sign", "Woman outdoors, bright", "Woman on a bridge in Paris"])}
                {ImageColumn([img202, img210, img211], ["Woman outdoors", "Man studio photo", "Woman urban style photo"])}
              </div>
            </Tab.Panel>
            <Tab.Panel className="py-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-2 px-24">
                {ImageColumn([img101, img102, img103], ["Chicago, view from above", "Philladelphia stairway", "Oakland Paramount theater"])}
                {ImageColumn([img104, img105, img106], ["Chicago from the L train", "Bonnieux in France", "Golden gate bridge"])}
                {ImageColumn([img108, img107, img109], ["Philadephia street view", "Blue angles in front of Golden Gate bridge", "Village south of France"])}
                {ImageColumn([img110, img111, img112], ["Chicago from the river", "Fox theater in Oakland", "Fushimi Inari temple in Japan"])}
              </div>
            </Tab.Panel>
            <Tab.Panel className="py-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-2 px-24">
                {ImageColumn([img306, img307], ["Corvet sunset", "Orange McLaren"])}
                {ImageColumn([img303, img305, img304], ["Blue Subaru WRX at night", "90s BMW M-series cars", "White Subaru WRX up close"])}
                {ImageColumn([img309, img301], ["Red Nissan drift car", "Blue Subaru WRX up close"])}
                {ImageColumn([img302, img308], ["Blue Subaru WRX from behind", "Subaru WRXs at night"])}
              </div>
            </Tab.Panel>
            <Tab.Panel className="py-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-2 px-24">
                {ImageColumn([img401], ["Balerinra outdoors"])}
                {ImageColumn([img405], ["Breakdancing b-girl"])}
                {ImageColumn([img403, img404], ["Dance pose hanging", "Dance pose, man"])}
                {ImageColumn([img406], ["Balerina outdoors on beach"])}
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
      <footer>
        <div className='flex justify-between items-center px-24 py-6'>
          <p className='invisible'>t</p>       
          <p className='text-2xl sm:text-xl md:text-base lg:text-sm xl:text-2xs'>&copy; 2023 Steven Munn, All Rights Reserved</p>
          <div className='flex justify-between items-center'>
            <Link href="https://goo.gl/maps/e656Kug3YrXXXk6N6">
              <svg className='footericn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#ffffff"/>
                <path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#ffffff"/>
                <path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#ffffff"/>
                <path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ffffff"/>
              </svg>
            </Link>
            <Link href="https://www.yelp.com/biz/big-munny-photos-oakland-3">
              <svg className='footericn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1016.09 1333.33" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M25.87 641.95C4.22 676.65-4.93 785.94 2.59 858.47c2.65 23.94 6.98 43.91 13.29 55.81 8.66 16.48 23.22 26.28 39.81 26.88 10.64.54 17.26-1.26 217.43-65.62 0 0 88.96-28.39 89.31-28.57 22.19-5.65 37.11-26.05 38.56-52.09 1.44-26.7-12.33-50.28-35.07-58.82 0 0-62.73-25.56-62.85-25.56-215.08-88.71-224.76-92.2-235.59-92.32-16.59-.67-31.33 7.7-41.62 23.76zM515.4 545.6c-3.91-90.1-31.04-491.27-34.22-509.86-4.57-16.84-17.74-28.87-36.63-33.62-58.04-14.37-279.86 47.76-320.94 90.16-13.23 13.78-18.1 30.74-14.14 45.78 6.5 13.29 281.3 445.68 281.3 445.68 40.6 65.86 73.74 55.63 84.63 52.2 10.76-3.31 43.72-13.54 40-90.34zm228.19 187.72c227.35-55.1 236.13-57.98 245.09-63.88 13.78-9.26 20.69-24.78 19.49-43.67 0-.6.12-1.27 0-1.93-5.84-55.81-103.63-201.01-151.81-224.58-17.08-8.19-34.16-7.64-48.35 1.86-8.78 5.71-15.22 14.38-136.95 180.86 0 0-54.97 74.88-55.63 75.6-14.49 17.62-14.73 42.88-.54 64.54 14.68 22.44 39.46 33.38 62.19 27.07 0 0-.91 1.62-1.15 1.93 11.19-4.21 31.22-9.15 67.66-17.8zm103.39 496.44c50.52-20.15 160.71-160.35 168.47-214.3 2.7-18.77-3.19-34.94-16.12-45.29-8.48-6.37-14.92-8.84-214.96-74.52 0 0-87.75-28.99-88.9-29.53-21.23-8.24-45.47-.61-61.77 19.48-16.96 20.63-19.49 47.88-5.96 68.45l35.31 57.5c118.73 192.83 127.81 206.48 136.35 213.16 13.23 10.4 30.07 12.09 47.57 5.05zm-339.94 73.2c3.49-10.11 3.91-17.02 4.51-227.3 0 0 .48-92.93.54-93.83 1.44-22.8-13.29-43.54-37.41-52.81-24.84-9.56-51.6-3.67-66.64 15.04 0 0-43.9 52.09-44.03 52.09-150.66 177.01-156.97 185.19-160.65 195.65-2.23 6.13-3.13 12.75-2.41 19.31.91 9.38 5.17 18.64 12.21 27.3 34.95 41.5 202.51 103.15 256.04 94.01 18.58-3.37 32.12-13.83 37.83-29.47z" fill="#ffffff" fill-rule="nonzero"/>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/bgmunny/">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88" className='footericn'>
                <path d="M61.45,0C44.76,0,42.66.07,36.11.37A45.08,45.08,0,0,0,21.2,3.23a29.86,29.86,0,0,0-10.88,7.08,30.26,30.26,0,0,0-7.1,10.88A44.92,44.92,0,0,0,.37,36.11C.08,42.66,0,44.75,0,61.44S.07,80.21.37,86.77a45.08,45.08,0,0,0,2.86,14.91,30.12,30.12,0,0,0,7.08,10.88,30.13,30.13,0,0,0,10.88,7.1,45.17,45.17,0,0,0,14.92,2.85c6.55.3,8.64.37,25.33.37s18.77-.07,25.33-.37a45.17,45.17,0,0,0,14.92-2.85,31.54,31.54,0,0,0,18-18,45.6,45.6,0,0,0,2.86-14.91c.29-6.55.37-8.64.37-25.33s-.08-18.78-.37-25.33a45.66,45.66,0,0,0-2.86-14.92,30.1,30.1,0,0,0-7.09-10.88,29.77,29.77,0,0,0-10.88-7.08A45.14,45.14,0,0,0,86.76.37C80.2.07,78.12,0,61.43,0ZM55.93,11.07h5.52c16.4,0,18.34.06,24.82.36a34,34,0,0,1,11.41,2.11,19,19,0,0,1,7.06,4.6,19.16,19.16,0,0,1,4.6,7.06,34,34,0,0,1,2.11,11.41c.3,6.47.36,8.42.36,24.82s-.06,18.34-.36,24.82a33.89,33.89,0,0,1-2.11,11.4A20.35,20.35,0,0,1,97.68,109.3a33.64,33.64,0,0,1-11.41,2.12c-6.47.3-8.42.36-24.82.36s-18.35-.06-24.83-.36a34,34,0,0,1-11.41-2.12,19,19,0,0,1-7.07-4.59,19,19,0,0,1-4.59-7.06,34,34,0,0,1-2.12-11.41c-.29-6.48-.35-8.42-.35-24.83s.06-18.34.35-24.82a33.7,33.7,0,0,1,2.12-11.41,19,19,0,0,1,4.59-7.06,19.12,19.12,0,0,1,7.07-4.6A34.22,34.22,0,0,1,36.62,11.4c5.67-.25,7.86-.33,19.31-.34Zm38.31,10.2a7.38,7.38,0,1,0,7.38,7.37,7.37,7.37,0,0,0-7.38-7.37ZM61.45,29.89A31.55,31.55,0,1,0,93,61.44,31.56,31.56,0,0,0,61.45,29.89Zm0,11.07A20.48,20.48,0,1,1,41,61.44,20.48,20.48,0,0,1,61.45,41Z"/>
              </svg>
            </Link>
            <Link href="https://www.facebook.com/bgmunny/">
              <svg xmlns="http://www.w3.org/2000/svg" className='footericn' shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640">
                <path d="M380.001 120.001h99.993V0h-99.993c-77.186 0-139.986 62.8-139.986 139.986v60h-80.009V320h79.985v320h120.013V320h99.994l19.996-120.013h-119.99v-60.001c0-10.843 9.154-19.996 19.996-19.996v.012z"/>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TabLogic(selected: boolean): string {
  return selected ? 'text-white px-2 lg:px-8 md:px-4 sm:px-2' : 'text-mybase-400 text-opacity-60 px-2 lg:px-8 md:px-4 sm:px-2 hover:text-green-500';
}


function ImageColumn(images: Array<any>, altCaptions: Array<string>) {
  return(
    <div className="grid gap-2">
      { images.map( (img, idx) => <div key={"img" + idx.toString()}>
          <a href={img.src}>
            <Image src={img} alt={altCaptions[idx]} className='rounded-sm'
              placeholder='blur' width={500} loading={loadingType(altCaptions[idx])} />
          </a>
        </div>)}
    </div>
  )
}

function loadingType(caption: string) {
  if (caption == "Person sitting") {
    return "eager";
  } else {
    "lazy";
  }
}
