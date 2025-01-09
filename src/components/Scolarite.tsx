import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Carousel, IconButton } from "@material-tailwind/react"

type Props = {}

function Scolarite({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl'>
            Scolarité
        </h3>
        <div className='relative h-screen w-screen overflow-x-hidden z-20'>
          <Carousel className="rounded-xl"
          transition={{ duration: 1 }}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-3/4 md:top-2/4 left-1 md:left-4 -translate-y-2/4  flex items-center justify-center rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="#94160d"
                className="h-6 w-6 md:w-16 md:h-16 stroke-[3] md:stroke-[2]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-3/4 md:top-2/4 !right-1 md:right-4  -translate-y-2/4 flex items-center justify-center rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="#94160d"
                className="h-6 w-6 md:w-16 md:h-16 stroke-[3] md:stroke-[2]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </IconButton>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-14 md:bottom-16 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-2 md:w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}>
            <ExperienceCard title='Ingénieur Systèmes Embarqués' company='Ecole Centrale d&apos;Electronique' companyLogo='/images/Logo/ECE_Paris_Lyon.jpg' startDate='2021' endDate='2024' summary={['Développeur dans l\'écurie ARECE', 'Capteur cardiaque', 'Prototype d\'application iOS', 'Assistant de cours électronique et informatique']} skills={[]}/>
            <ExperienceCard title='Semestre d&apos;échange' company='Ecole de Technologie' companyLogo='/images/Logo/ets.jpg' startDate='septembre 2023' endDate='decembre 2023' summary={['Capteur de température connecté', 'Chargeur solaire urbain connecté']} skills={[]}/>
            <ExperienceCard title='Classe Préparatoire' company='Lycée Carnot' companyLogo='/images/Logo/carnot.png' startDate='2019' endDate='2021' summary={['MPSI - MP']} skills={[]}/>
          </Carousel>
        </div>
    </motion.div>
  )
}

export default Scolarite