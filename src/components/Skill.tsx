import React from 'react'
import Image from 'next/image';

type Props = {
  level: string
  logo: string
  css?: string
  name: string
}

function Skill({level, logo, css, name}: Props) {
  return (
    <div className='group relative flex cursor-pointer aspect-square items-center justify-center overflow-hidden'>
        <Image src={logo} alt='' width={100} height={100} className={'border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out h-10 w-10 md:w-28 md:h-28 object-fill ' + css} />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-full w-full rounded-md z-0'>
            <div className='flex flex-col items-center justify-center h-full'>
                <p className='text-md font-bold text-black opacity-100 md:text-xl'>{level}</p>
                <p className='text-[0.5rem] text-black opacity-100 md:text-base text-center'>{name}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill