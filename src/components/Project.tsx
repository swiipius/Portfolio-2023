import React from 'react'
import Image from 'next/image'

type Props = {
    title: string
    image: string
    description: string
    skills: Array<string>
}

function Project({title, image, description, skills}: Props) {
  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center py-20 px-10 h-screen'>
        <Image src={image} alt='' width={500} height={500} className='max-h-36 md:max-h-52 object-contain' />
        <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
            <h4 className='md:text-4xl font-semibold text-center'>
                <span className='underline decoration-[#94160d]/50'>{title}</span>
            </h4>

            <div className='flex flex-row space-x-2 flex-wrap'>
                { skills.length > 0 ? (
                    skills.map((skill, index) => (
                        <Image src={skill} alt='' key={index} width={30} height={30} className='object-contain md:w-16 md:h-16' />
                    ))
                ) : (
                    <></>
                )
                }
                
            </div>

            <p className='md:text-lg text-sm text-justify whitespace-pre-line'>
                {description}
            </p>
            
        </div>
    </div>
  )
}

export default Project