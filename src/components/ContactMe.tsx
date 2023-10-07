import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/20/solid'

type Props = {}

function ContactMe({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got what you need.{" "}
                <span className='underline decoration-[#94160d]/50'>Let&apos;s talk!</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#94160d] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+33 6 70 05 03 34</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#94160d] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>pierre.simond@edu.ece.fr</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#94160d] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>Boulogne Billancourt</p>
                </div>
            </div>
        </div>

    </motion.div>
  )
}

export default ContactMe