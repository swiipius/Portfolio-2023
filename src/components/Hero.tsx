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
    delaySpeed: 300,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image src='/images/pp.png' alt='profil picture' width={200} height={200} className='rounded-full relative h-32 w-32 mx-auto object-cover select-none' />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gay-500 pb-2 tracking-[15px] select-none'> Embedded Systems Engineer</h2>
        <h1 className='text-2xl md:text-5xl lg:text-6xl font-semibold px-10 select-none'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#94160d' />
        </h1>

        <div className='pt-5'>
          <Link href='#experience'>
            <button className='heroButton'><p className='select-none'>Experience</p></button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'><p className='select-none'>Skills</p></button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'><p className='select-none'>Projects</p></button>
          </Link>
        </div>
      </div>      
    </div>
  )
}