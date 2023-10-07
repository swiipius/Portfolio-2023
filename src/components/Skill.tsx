import React from 'react'
import Image from 'next/image';

type Props = {
  level: string
  logo: string
}

function Skill({level, logo}: Props) {
  return (
    <div className='group relative flex cursor-pointer aspect-square'>
        <Image src={logo} alt='' width={40} height={40} className='border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out h-10 w-10 md:w-16 md:h-16 object-contain' />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-full w-full rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-xs font-bold text-black opacity-100 md:text-xl'>{level}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill