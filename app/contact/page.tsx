"use client";

import Image from 'next/image'
import Link from 'next/link';
import {useRouter} from 'next/navigation'
import React from 'react';
import {Text} from '@nextui-org/react';
import { ContactGrid } from '@/utils/contactForm';

import logo from '../../public/main_logo.svg'

export default function Home() {
  const [emailField, setEmailField] = React.useState('');
  const [nameField, setNameField] = React.useState('');
  const [subjectField, setSubjectField] = React.useState('');
  const [messageField, setMessageField] = React.useState('');
  const [tipMsg, setTipMessage] = React.useState('Please enter a valid email.');
  const router = useRouter();

  function SubmitButton(){
    if (ContactGrid.validateEmail(emailField) &&
      ContactGrid.validateName(nameField).isValid
      && ContactGrid.validateSubject(subjectField).isValid
      && ContactGrid.validateMessage(messageField).isValid){
      setTipMessage("");
      return <button id="sendbtn" type="button" className="text-mybase-900 bg-white rounded-lg hover:bg-green-500 px-6 py-3 text-sm font-bold text-center" onClick={(e) => handleSubmit(e as unknown as MouseEvent)}>Send</button>
    } else {
      if (!ContactGrid.validateEmail(emailField)) {
        setTipMessage("Please enter a valid email.");
      } else if (!(ContactGrid.validateName(nameField).isValid)) {
        setTipMessage("Name " + ContactGrid.validateName(nameField).msg); 
      } else if (!(ContactGrid.validateSubject(subjectField).isValid)) {
        setTipMessage("Subject " + ContactGrid.validateSubject(subjectField).msg);
      } else if (!(ContactGrid.validateMessage(messageField).isValid)) {
        setTipMessage("Message " + ContactGrid.validateMessage(messageField).msg);
      }
      return <button type="button" className="text-mybase-400 bg-mybase-700 cursor-not-allowed rounded-lg hover:bg-red px-6 py-3 text-sm text-center" disabled>Send</button>
    };
  };

  function TipMessageField() {
    return <p id="tipmessage" className='text-white'>{tipMsg}</p>
  }

  async function handleSubmit(e: MouseEvent) {

    e.preventDefault();
    let sendButton = document.getElementById("sendbtn");
    if (sendButton) {
      sendButton.innerHTML = `<svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Sending...`;
    }
    
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: emailField,
        name: nameField,
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
      router.push("/sendStatus?" + "message=" + JSON.stringify(error));
    } else {
      router.push("/sendStatus");
    }
  };

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
        <div className="flex flex-col 
                  items-center justify-center mx-12">
          <p className='py-2 text-white'>
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
                      className="input" required={true} minLength={1} maxLength={69}/>
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
