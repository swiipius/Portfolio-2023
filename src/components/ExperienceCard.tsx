import React from 'react'
import Image from 'next/image'

type Props = {
    title: string
    company: string
    companyLogo: string
    startDate: string
    endDate: string
    summary: Array<string>
    skills: Array<string>
  }

function ExperienceCard({title, company, companyLogo, startDate, endDate, summary, skills}: Props) {
  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center py-20 px-8 md:px-20 h-screen'>
        <Image src={companyLogo} alt='' width={200} height={200} className='h-32 w-32 object-center object-contain xl:w-[200px] xl:h-[200px]'/>
        <div className='w-full px-5'>
            <h4 className='text-lg md:text-4xl font-bold'>{title}</h4>
            <p className='font-light text-md md:text-2xl mt-1'>{company}</p>
            <div className='flex space-x-2 my-2'>
                {skills.map((skill, i) => (
                <Image key={i} src={skill} alt='' width={200} height={200} className='h-10 w-10 '/> 
                ))}
            </div>
            <p className='uppercase py-5 text-gray-500'>{startDate} - {endDate}</p>
            <ul className='list-disc space-y-4 ml-5 text-sm md:text-lg'>
                {summary.map((point, i) => (
                <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ExperienceCard