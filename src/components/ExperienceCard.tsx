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
        <Image src={companyLogo} alt='' width={100} height={100} className='h-24 w-24 object-center object-contain'/>
        <div className='w-full px-5'>
            <h4 className='uppercase text-sm md:text-lg font-bold'>{title}</h4>
            <p className='font-light text-sm md:text-lg mt-1'>{company}</p>
            <div className='flex space-x-2 my-2'>
                {skills.map((skill, i) => (
                <Image key={i} src={skill} alt='' width={200} height={200} className='h-10 w-10 '/> 
                ))}
            </div>
            <p className='uppercase py-5 text-gray-500'>{startDate} - {endDate}</p>
            <ul className='list-disc space-y-4 ml-5 text-xs md:text-sm'>
                {summary.map((point, i) => (
                <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ExperienceCard