"use client";

import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import {Text} from '@nextui-org/react';
import { ContactGrid } from '@/utils/contactForm';

import logo from '../../public/main_logo.svg'

export default function Home() {
  const [emailField, setEmailField] = React.useState('');
  const [nameField, setNameField] = React.useState('');
  const [subjectField, setSubjectField] = React.useState('');
  const [messageField, setMessageField] = React.useState('');
  let tipMsg: string = "Please enter a valid email.";

  function SubmitButton(){
    if (ContactGrid.validateEmail(emailField) &&
      ContactGrid.validateName(nameField).isValid
      && ContactGrid.validateSubject(subjectField).isValid
      && ContactGrid.validateMessage(messageField).isValid){
      tipMsg = "";  
      return <button type="button" className="sendButton" onClick={(e) => handleSubmit(e as unknown as MouseEvent)}>Send</button>
    } else {
      if (!ContactGrid.validateEmail(emailField)) {
        tipMsg = "Please enter a valid email.";
      } else if (!(ContactGrid.validateName(nameField).isValid)) {
        tipMsg = "Name " + ContactGrid.validateName(nameField).msg;
      } else if (!(ContactGrid.validateSubject(subjectField).isValid)) {
        tipMsg = "Subject " + ContactGrid.validateSubject(subjectField).msg;
      } else if (!(ContactGrid.validateMessage(messageField).isValid)) {
        tipMsg = "Message " + ContactGrid.validateMessage(messageField).msg;
      }
      return <button type="button" className="sendButton" disabled>Send</button>
    };
  };

  function TipMessageField() {
    return <p className='text-white'>{tipMsg}</p>
  }

  async function handleSubmit(e: MouseEvent) {
    e.preventDefault();
    
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: emailField,
        fullname: nameField,
        subject: subjectField,
        message: messageField,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      tipMsg = "error";
      return;
    } else {
      tipMsg = "form submitted";
      console.log(tipMsg)
    }
  };

  return (
    <div className='h-full'>
      <header className='flex justify-between items-center px-24 py-6'>
        <div>
          <Link href={'/'}>
            <Image
              src={logo}
              alt=""
              className='w-25'
              priority
            />
          </Link>
        </div>
        <Link href="/" className='text-4xl md:text-lg lg:text-base rounded bg-white text-mybase-900 font-medium px-5 py-2 hover:bg-red'>
          <div className='flex ustify-between items-center'>
            <svg className="w-12 h-12 md:w-8 md:h-8 lg:w-6 lg:h-6 text-mybase-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.293 1.707 1.707 7.293a1 1 0 0 0 0 1.414l5.586 5.586A1 1 0 0 0 9 13.586V2.414a1 1 0 0 0-1.707-.707Z"/>
            </svg>
            <Text className='px-3'>Back</Text>
          </div>
        </Link>
      </header>

      <main>
        <div className="flex flex-col 
                  items-center justify-center mx-12">
          <p className='py-2'>
            Send a message to Big Munny Photos
          </p>

          <form className='form' >
              <br /><input id="email" aria-label="Enter your email address" 
                      type="email" placeholder="Email address" 
                      value={emailField} onChange={ e => setEmailField(e.target.value)}
                      className="input" required={true}/>
              <br /><input id="name" aria-label="Enter your name/nickname/alias/CIA agent #/etc." 
                      type="text" placeholder="Name or (nickname/alias/CIA agent #/etc.)"
                      value={nameField} onChange={ e => setNameField(e.target.value)}
                      className="input" required={true} minLength={2} maxLength={69}/>
              <br /><input id="subject" aria-label="What is the subject of this message?" 
                      type="text" placeholder="Subject (e.g. Photoshoot in Oakland)"
                      value={subjectField} onChange={ e => setSubjectField(e.target.value)}
                      className="input"
                      required={true} minLength={2} maxLength={69}/>
              <br /><textarea id="message" aria-label="Message..." rows={5} placeholder="Message..."
                      value={messageField} onChange={ e => setMessageField(e.target.value)}
                      className="textarea" 
                      required={true} minLength={1} maxLength={400}/>

              <br /><div className='flex justify-end'><SubmitButton/></div>
              <TipMessageField />
          </form>
      </div>
      </main>
    </div>
  )
}
