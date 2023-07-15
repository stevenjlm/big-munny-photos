import { Input } from '@nextui-org/react';
import React from 'react';

export let BaseRate = '90.00';

export function Calculator() {
  const [sHours, setSHours] = React.useState(1.0);
  const [dHours, setDHours] = React.useState(30);

  function computeTotal() {
    return Math.floor(parseFloat(BaseRate) * (sHours + Math.max(dHours-30, 0) * 2 / 60.0)) + ".00"
  }
    
  return(
    <div>
      <h1 className='text-mybase-900 py-6'>Calculator:</h1>
      <div className='flex justify-between items-center px-8 py-6 mr-8'>
        <div className='w-2/5'>
          <label className="block mb-2 text-sm font-medium text-mybase-900">Hours of photography: {sHours}</label>
          <input id="steps-range" type="range" min="0" max="8" value={sHours} step="0.5" className="w-full h-2 rounded-lg cursor-pointer" onChange={ e => setSHours(parseFloat(e.target.value))} />
        </div>
        <div className='w-2/5'>
          <label className="block mb-2 text-sm font-medium text-mybase-900">Minutes of Driving**: {dHours}</label>
          <input id="steps-range" type="range" min="0" max="120" value={dHours} step="15" className="w-full h-2 rounded-lg cursor-pointer" onChange={ e => setDHours(parseFloat(e.target.value))} />
        </div>
      </div>
      <div className='flex justify-between items-center px-8 py-6 mr-8'>
        {/* <Input disabled label="Rate" placeholder={"$" + Math.round(parseFloat(BaseRate)) + ".00 / hour"} /> */}
        <label className="block mb-2 text-sm font-medium text-mybase-900">Total Cost:</label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg className="w-6 h-6 text-mybase-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"/>
            </svg>
          </div>
          <input className="pl-10 p-2.5 rounded-xl border-red text-mybase-900 text-lg font-bold" readOnly value={computeTotal()}/>
        </div>
      </div>
      <p className='text-mybase-900 text-sm'>** One-way from Oakland, CA</p>
    </div>
  )

}
