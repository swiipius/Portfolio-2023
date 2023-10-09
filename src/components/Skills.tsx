import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        <h3 className='top-36 uppercase tracking-[3px] text-gray-500 text-sm absolute'>
            Hover a skill for current proficiency
        </h3>

        <div className='grid grid-cols-6 gap-5 mx-5'>
            <Skill level='90%' logo='/images/Logo/vs.svg' />
            <Skill level='90%' logo='/images/Logo/shortcut.svg' />
            <Skill level='90%' logo='/images/Logo/github.svg' />
            <Skill level='90%' logo='/images/Logo/homekit.png' />
            <Skill level='80%' logo='/images/Logo/arduino.svg' />
            <Skill level='80%' logo='/images/Logo/esp32.svg' />
            <Skill level='80%' logo='/images/Logo/python.svg' />
            <Skill level='80%' logo='/images/Logo/raspberry.svg' />
            <Skill level='80%' logo='/images/Logo/fusion.png' />
            <Skill level='70%' logo='/images/Logo/hass.svg' />
            <Skill level='70%' logo='/images/Logo/kicad.png' />
            <Skill level='70%' logo='/images/Logo/ros2.png'  css='bg-white rounded-xl object-contain' />
            <Skill level='70%' logo='/images/Logo/css.svg' />
            <Skill level='70%' logo='/images/Logo/figma.svg' />
            <Skill level='65%' logo='/images/Logo/c.svg' />
            <Skill level='65%' logo='/images/Logo/html.svg' />
            <Skill level='65%' logo='/images/Logo/linux.svg' />
            <Skill level='60%' logo='/images/Logo/react.svg' />
            <Skill level='50%' logo='/images/Logo/mqtt.svg' />
            <Skill level='10%' logo='/images/Logo/thread.svg' />
            <Skill level='45%' logo='/images/Logo/c++.svg' />
            <Skill level='30%' logo='/images/Logo/gazebo.png' />
            <Skill level='30%' logo='/images/Logo/php.svg' />
            <Skill level='20%' logo='/images/Logo/docker.svg' />
            <Skill level='10%' logo='/images/Logo/matter.svg' css='bg-white rounded-xl object-contain'/> 
        </div>
    </motion.div>
  )
}

export default Skills