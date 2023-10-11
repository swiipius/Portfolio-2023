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
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-80 md:w-[500px] lg:w-[600px] xl:w-[900px] snap-center bg-[#292929] py-10 cursor-pointer transition-opacity duration-200 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#94160d]/60'>
        <Image src={companyLogo} alt='' width={200} height={200} className='h-32 w-32 object-center object-contain xl:w-[200px] xl:h-[200px]'/>
        <div className='w-80 md:w-[500px] lg:w-[600px] xl:w-full px-5'>
            <h4 className='text-4xl font-bold'>{title}</h4>
            <p className='font-light text-2xl mt-1'>{company}</p>
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
    </article>
  )
}

export default ExperienceCard