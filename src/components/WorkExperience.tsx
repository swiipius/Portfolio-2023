import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

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
        <div className='w-full flex space-x-5 overflow-x-scroll px-10 pb-20 md:pb-10 pt-36 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#94160d]/60'>
            <ExperienceCard title='Stage 4ème année : Banc de test IoT' company='ECOMESURE' companyLogo='/images/Logo/ecomesure.png' startDate='avril 2023' endDate='aout 2023' summary={['Réalisation d\'un banc de test pour la carte électronique d\'un objet connecté mesurant la qualité de l\'air.', 'Conception d\'un banc de non-régression pour le firmware embarqué dans les objets connectés. Utilisation du framework Django pour la partie graphique et sauvegarde de donnée.', 'Développement d\'une intégration domotique Home Assistant pour les stations qualité de l\'air.', 'Réalisation d\'impression 3D industrielles et installation d\'Octoprint pour pilotage à distance de l\'outil.']} skills={['/images/Logo/python.svg', '/images/Logo/hass.svg', '/images/Logo/linux.svg']}/>
            <ExperienceCard title='Assistant buraliste' company='Tabac Presse de Gron' companyLogo='/images/Logo/Tabac-Presse.png' startDate='janvier 2022' endDate='fevrier 2022' summary={['Vente de marchandises', 'Gestion des stocks', 'Création d\'une application de gestionn de stock pour un article précis', 'Réalisation d\'un compteur/trieur de pièces', 'Réalisation d\'un systèmes pour maintenir les produits le plus avancé possible dans le rack']} skills={['/images/Logo/shortcut.svg', '/images/Logo/html.svg', '/images/Logo/css.svg', '/images/Logo/php.svg', '/images/Logo/arduino.svg']}/>
            <ExperienceCard title='Assistant de TP' company='ECE Paris' companyLogo='/images/Logo/ECE_Paris_Lyon.jpg' startDate='mars 2022' endDate='juillet 2023' summary={['Aide dureant les TP (mentorat)', 'Cours d\'éléctronique', 'Cours de C']} skills={['/images/Logo/arduino.svg', '/images/Logo/kicad.png', '/images/Logo/c.svg', '/images/Logo/html.svg']}/>
            <ExperienceCard title='Préparateur de commande' company='E. Leclerc' companyLogo='/images/Logo/leclerc.png' startDate='juillet 2021' endDate='aout 2022' summary={['Préparation de commandes dans un Leclerc Drive durant 2 étés', 'Gestion des stocks']} skills={[]}/>
        </div>
    </motion.div>
  )
}

export default WorkExperience