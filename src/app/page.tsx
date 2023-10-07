'use client';
import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export default function Home() {
  return (
    <div className='bg-[#202020] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#94160d]/60'>
      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      <section id='contact' className='snap-center'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-0.5 w-full cursor-pointer z-30'>
          <div className='flex items-center justify-center'>
            <ChevronUpIcon className='w-10 h-10 rounded-full opacity-5 animate-pulse cursor-pointer' />
          </div>
        </footer>
      </Link>
    </div>
  )
}
