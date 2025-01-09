import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Carousel, IconButton } from "@material-tailwind/react"

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl'>
            Experiences
        </h3>
        <div className='relative h-screen w-screen overflow-x-hidden z-20'>
          <Carousel className="rounded-xl"
          transition={{ duration: 1 }}
          placeholder={<div />}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              placeholder={<span />}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
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
              placeholder={<span />}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
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
            <ExperienceCard title='CDI - Ingénieur SYstème' company='LMX Bikes' companyLogo='/images/Logo/lmx.png' startDate='septembre 2024' endDate='Aujourdh&apos;ui' summary={['Développement du firmware du speed bike', 'Création d\'outils Python (banc de fin de ligne, recalibration)', 'Conseil sur les codes de véhicules intermédiares', 'Réalisation de faisceaux']} skills={['/images/Logo/c++.svg', '/images/Logo/platformio.svg', '/images/Logo/python.svg']}/>
            <ExperienceCard title='Stage 5ème année : Développeur IoT' company='ECOMESURE' companyLogo='/images/Logo/ecomesure.png' startDate='janvier 2024' endDate='juillet 2024' summary={['Développement d\'un nouveau produit', 'Test et qualification de capteurs', 'Conception et design d\'une nouvelle carte électronique']} skills={['/images/Logo/python.svg', '/images/Logo/c.svg', '/images/Logo/raspberry.svg', '/images/Logo/STM.svg']}/>
            <ExperienceCard title='CTO - Chief Technical Officer' company='ARECE' companyLogo='/images/Logo/ARECE.svg' startDate='septembre 2022' endDate='septembre 2024' summary={['Speaker à la Google Devfest 2023                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ', 'Réalisation du site internet', 'Prise de décision sur la technologie chez ARECE en collaboration avec CTO', 'Création de projet pour les membres de l\'association', 'Gestion des outils de communications (Google Drive, Discord, Github)', 'Formation et gestion de la team des RSI']} skills={['/images/Logo/github.svg', '/images/Logo/ros.svg']}/>
            <ExperienceCard title='Stage 4ème année : Banc de test IoT' company='ECOMESURE' companyLogo='/images/Logo/ecomesure.png' startDate='avril 2023' endDate='aout 2023' summary={['Réalisation d\'un banc de test pour la carte électronique d\'un objet connecté mesurant la qualité de l\'air.', 'Conception d\'un banc de non-régression pour le firmware embarqué dans les objets connectés. Utilisation du framework Django pour la partie graphique et sauvegarde de donnée.', 'Développement d\'une intégration domotique Home Assistant pour les stations qualité de l\'air.', 'Réalisation d\'impression 3D industrielles et installation d\'Octoprint pour pilotage à distance de l\'outil.']} skills={['/images/Logo/python.svg', '/images/Logo/hass.svg', '/images/Logo/linux.svg']}/>
            <ExperienceCard title='Assistant de TP' company='ECE Paris' companyLogo='/images/Logo/ECE_Paris_Lyon.jpg' startDate='mars 2022' endDate='juillet 2023' summary={['Aide durant les TP (mentorat)', 'Cours d\'éléctronique', 'Cours de C']} skills={['/images/Logo/arduino.svg', '/images/Logo/kicad.png', '/images/Logo/c.svg', '/images/Logo/html.svg']}/>
          </Carousel>
        </div>
    </motion.div>
  )
}

export default WorkExperience