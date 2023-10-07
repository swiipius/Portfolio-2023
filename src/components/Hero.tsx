import React from 'react'
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hello, I'm Pierre", "I love IoT"],
    loop: true,
    delaySpeed: 50,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image src='/images/pp.png' alt='profil picture' width={200} height={200} className='rounded-full relative h-32 w-32 mx-auto object-cover' />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gay-500 pb-2 tracking-[15px]'> Embedded Systems Engineer</h2>
        <h1 className='text-5xl lg:6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#94160d' />
        </h1>

        <div className='pt-5'>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>      
    </div>
  )
}