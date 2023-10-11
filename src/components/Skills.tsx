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
        <h3 className='absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl'>
            Compétences
        </h3>
        <h3 className='top-36 uppercase tracking-[3px] text-gray-500 text-sm absolute'>
            Survolez une compétence pour connaître son niveau actuel
        </h3>

        <div className='grid md:grid-cols-6 grid-cols-4 gap-5 mx-5'>
            <Skill level='90%' logo='/images/Logo/vs.svg' name='vs code'/>
            <Skill level='90%' logo='/images/Logo/github.svg' name='Github'/>
            <Skill level='90%' logo='/images/Logo/homekit.png' name='HomeKit'/>
            <Skill level='80%' logo='/images/Logo/arduino.svg' name='Arduino' />
            <Skill level='80%' logo='/images/Logo/esp32.svg' name='ESP32' />
            <Skill level='80%' logo='/images/Logo/python.svg' name='Python' />
            <Skill level='80%' logo='/images/Logo/raspberry.svg' name='Raspberry Pi' />
            <Skill level='80%' logo='/images/Logo/fusion.png' name='Fusion 360' />
            <Skill level='70%' logo='/images/Logo/hass.svg' name='Home Assistant' />
            <Skill level='70%' logo='/images/Logo/kicad.png' name='Kicad' />
            <Skill level='70%' logo='/images/Logo/ros.svg' name='ROS 2' />
            <Skill level='70%' logo='/images/Logo/css.svg' name='CSS' />
            <Skill level='65%' logo='/images/Logo/c.svg' name='Ce' />
            <Skill level='65%' logo='/images/Logo/html.svg' name='HTML' />
            <Skill level='65%' logo='/images/Logo/linux.svg' name='Linux' />
            <Skill level='50%' logo='/images/Logo/mqtt.svg' name='MQTT' />
            <Skill level='10%' logo='/images/Logo/thread.svg' name='Thread' />
            <Skill level='45%' logo='/images/Logo/c++.svg' name='C++' />
            <Skill level='10%' logo='/images/Logo/matter.svg' css='bg-white rounded-xl object-contain' name='Matter' /> 
            <Skill level='20%' logo='/images/Logo/docker.svg' name='Docker' />
            <Skill level='60%' logo='/images/Logo/react.svg' name='React' />
            <Skill level='90%' logo='/images/Logo/shortcut.svg' name='Apple Shortcut' />
            <Skill level='70%' logo='/images/Logo/figma.svg' name='Figma' />
        </div>
    </motion.div>
  )
}

export default Skills