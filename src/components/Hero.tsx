import React from 'react'
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Moi c'est Pierre", "Passionné d\'IoT"],
    loop: true,
    delaySpeed: 300,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image src='/images/pp.png' alt='profil picture' width={200} height={200} className='rounded-full relative h-32 w-32 mx-auto object-cover select-none' />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gay-500 pb-2 tracking-[1rem] select-none'>Ingénieur Systèmes emabrqués</h2>
        <h1 className='text-2xl md:text-5xl lg:text-6xl font-semibold px-10 select-none'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#94160d' />
        </h1>

        <div className='pt-5'>
          <Link href='#experience'>
            <button className='heroButton'><p className='select-none'>Experiences</p></button>
          </Link>
          <Link href='#scolarite'>
            <button className='heroButton'><p className='select-none'>Scolarité</p></button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'><p className='select-none'>Compétences</p></button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'><p className='select-none'>Projets</p></button>
          </Link>
        </div>
      </div>      
    </div>
  )
}