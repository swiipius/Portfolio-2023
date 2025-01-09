import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Project from './Project'
import { Carousel, IconButton } from "@material-tailwind/react"

type Props = {}

function Projects({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flex-row max-w-80 xl:px-5 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl'>
            Projets
        </h3>

        <div className='relative w-screen overflow-y-hidden z-20'>
          <Carousel
            className="rounded-xl"
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
            )}
          >
            <Project title='Compétition Formula Student UK 2023' 
              skills={[]} 
              image='/images/Projects/Silverstone.jpg' 
              description='Durant ma deuxième année de cycle ingénieur, j&apos;ai rejoint l&apos;association ARECE. Pour l&apos;aspect technique, vous pouvez vous référer au projet de perception et localisation. Ce projet, à la base scolaire, s&apos;est continué durant l&apos;été. Nous avons intégré les modules des autres équipes et ajouté des fonctionnalités. Le but était de participer mi-juillet à la Formula Student UK. Chaque jour, durant une semaine, nous avions accès à la voiture 2-3 fois en créneaux de 30 min. Ce temps était précieux,  car ils étaient les seuls instants de réelle intégration sur le véhicule. L&apos;objectif était de passer les trois inspections. Chaque inspection visait à vérifier que nous étions capable de maitriser la voiture. Le dimanche matin, nous avons réussi à passer la dernière inspection, ce qui fait de nous la première écurie de la FS UK à passer toutes les inspections la première année. À cela s&apos;ajoute qu&apos;ARECE est la première écurie francaise de FS en catégorie autonome.' 
              />
            <Project title='LED mqtt' 
              skills={['/images/Logo/mqtt.svg', '/images/Logo/esp32.svg', '/images/Logo/hass.svg']} 
              image='/images/Projects/mqttDoctorStrange.png' 
              description='Ce projet a pour but de connecter des LED via le protocole MQTT en utilisant la bibliothèque FastLED. J&apos;utilise MQTT, un protocole de messagerie léger, pour permettre la communication entre les LED et un serveur Homeassisatnt. J&apos;ai utilisé un contrôleur Wemos D1 Mini pour connecter les LED et pour gérer la communication MQTT. Ce projet nous a permis de développer mes compétences en matière de développement de systèmes embarqués, en utilisant des protocoles de communication tels que MQTT et en utilisant des bibliothèques pour contrôler des périphériques matériels tels que des LED.' 
              />
            <Project title='Serveur Home Assistant' 
              skills={['/images/Logo/hass.svg', '/images/Logo/raspberry.svg', '/images/Logo/docker.svg']} 
              image='/images/Projects/rasp3.png' 
              description='Ce projet a pour but de créer un serveur Homeassistant pour connecter tous mes appareils entre eux et pourvoir en concevoir de nouveaux par moi-même. Ce serveur est pour l&apos;instant dans une raspberry pi 3b, cependant je suis en train de changer les choses et de préparer un serveur TrueNAS ou il sera stocké dans un docker.' 
              />
            <Project title='Percpetion and Localisation d&apos;une voiture de course autonome' 
              skills={['/images/Logo/ros.svg', '/images/Logo/linux.svg', '/images/Logo/gazebo.png', '/images/Logo/c++.svg', '/images/Logo/python.svg']} 
              image='/images/Projects/gazebo.png' 
              description='Ce projet a pour but de concevoir le système de reconnaissance de l&apos;environnement d&apos;une voiture autonome pour la compétition Formula Student. Il utilise le simulateur de physique Gazebo et vise principalement à concevoir un circuit pour l&apos;ordinateur de bord en utilisant une caméra stéréo et un lidar. Le but est de permettre à la voiture de détecter et de comprendre les obstacles et les éléments de son environnement pour naviguer en toute sécurité. Au final ce circuit est envoyé à l&apos;équipe de génération de trajectoire puis à l&apos;équipe qui s&apos;occupe du hardware.' 
              />
            <Project title='Site web d&apos;association' 
              skills={['/images/Logo/react.svg', '/images/Logo/css.svg']} 
              image='/images/Projects/TeamPage.png' 
              description='Ce projet, réalisé en collaboration avec une association de Formula Student (une compétition étudiante de voitures). Le but est de concevoir un site vitrine. Ce site, réalisé en React, présente l&apos;équipe, les compétitions, la voiture, etc. Il a été réalisé au sein de l&apos;équipe RSI de cette association dont je faisais partie.' 
              />
            <Project title='Commande vocal Arduino' 
              skills={['/images/Logo/arduino.svg', '/images/Logo/github.svg']} 
              image='/images/Projects/micro+ampli.jpeg' 
              description='Notre projet étudiant vise à concevoir un appareil de reconnaissance vocale utilisant un Arduino. Il permettra de contrôler 3 LED en utilisant des commandes vocales prédéfinies ou de les éteindre d&apos;un clap des mains.' 
              />
            <Project title='3D Printing' 
              skills={['/images/Logo/raspberry.svg','/images/Logo/fusion.png',]} 
              image='/images/Projects/3dprint.png' 
              description='Durant mon stage de seconde année je me suis aussi occupé de réaliser des impressions 3D. Que ce soit des boitiers pour le banc de test ou des supports de batterie pour la carte, je les réalisais avec fusion 360 puis les imprimais avec Octoprint. Octoprint était une solution que j&apos;ai proposé afin de faciliter le processus d&apos;impressions 3D. Il permet de contrôler l&apos;imprimante même si elle est dans une autre pièce, facilite l&apos;upload des fichiers et muni d&apos;une caméra il permet de suivre l&apos;état de l&apos;impression.' 
              />
            <Project title='Ambilight and web server' 
              skills={['/images/Logo/raspberry.svg',]} 
              image='/images/Projects/ambi.png' 
              description='Ce projet avait pour but de concevoir un système ambilight pour une télé. Un système Ambilight est une technologie d&apos;éclairage intégrée à un téléviseur qui projette des couleurs correspondant au contenu affiché à l&apos;écran. Pour ce faire, je me suis équipé d&apos;une raspeberry pi 2B et j&apos;y ai intégré hyperion qui est une solution open source qui permet de gérer un bandeau LED en fonction d&apos;une source vidéo. Ce projet n&apos;a pas été si simple, car il a fallu trouver et compiler une version 32bit d&apos;hyperion, parce que la raspberry pi 2B n&apos;est pas 64b. De plus je ne pouvais pas installer l&apos;image faite pour raspberry comme il fallait aussi y installer un serveur web.' 
              />
            <Project title='Intégration Home Assistant' 
              skills={['/images/Logo/hass.svg',]} 
              image='/images/Projects/hass_integration.png' 
              description='Durant mon stage de seconde année, j&apos;ai été chargé de faire de la veille technologique sur l&apos;intégration des cartes éléctroniques dans un environnement domotique. La première piste a été d&apos;intégrer la carte au travers d&apos;HomeAssistant. Pour ce faire, j&apos;ai réalisé une proof of concept d&apos;intégration qui va fetch les données du serveur via un call api, pour ensuite les afficher dans l&apos;interface HomeAssistant. Par la suite, je me suis renseigné sur les possibilités d&apos;intégration dans HomeKit ou Google Home.' 
              />
            <Project title='Jeu de société en C' 
              skills={['/images/Logo/c.svg', '/images/Logo/github.svg']} 
              image='/images/Projects/Game.png' 
              description='Ce projet consistait à créer une version en ligne de commande du jeu Quoridor en utilisant le langage C. Le jeu se déroulera dans le terminal, et nous utiliserons les fonctions de terminal pour créer une interface utilisateur graphique. Le jeu permettra à deux joueurs de s&apos;affronter en utilisant des "murs" pour bloquer le passage de l&apos;adversaire, mais il sera également possible de jouer seul contre une intelligence artificielle (IA) développée par nos soins. Nous avons implémenté une logique de jeu solide pour gérer les règles et les conditions de victoire, et nous avons également inclus des fonctionnalités telles que la sauvegarde et la reprise de partie.' 
              />
            <Project title='Cardiofréquencemètre' 
              skills={['/images/Logo/arduino.svg', '/images/Logo/github.svg']} 
              image='/images/Projects/cardio1.jpeg' 
              description='Notre projet visait à concevoir un capteur cardiaque utilisant un Arduino. Ce capteur enregistrera les battements cardiaques de l&apos;utilisateur et les affichera sur un écran OLED incorporé. Il comprend également un système d&apos;affichage de l&apos;heure et de sauvegarde des données enregistrées dans la mémoire interne de l&apos;Arduino.' 
              />
            <Project title='ESP32 cam' 
              skills={['/images/Logo/hass.svg']} 
              image='/images/Projects/esp32_cam.png' 
              description='Ce projet a pour but de concevoir le système de reconnaissance de l&apos;environnement d&apos;une voiture autonome pour la compétition Formula Student. Il utilise le simulateur de physique Gazebo et vise principalement à concevoir un circuit pour l&apos;ordinateur de bord en utilisant une caméra stéréo et un lidar. Le but est de permettre à la voiture de détecter et de comprendre les obstacles et les éléments de son environnement pour naviguer en toute sécurité. Au final, ce circuit est envoyé à l&apos;équipe de génération de trajectoire puis à l&apos;équipe qui s&apos;occupe du hardware.' 
              />
            <Project title='Manette de drone' 
              skills={['/images/Logo/arduino.svg', '/images/Logo/kicad.png', '/images/Logo/fusion.png', '/images/Logo/github.svg']} 
              image='/images/Projects/3dModel.JPG' 
              description='Notre projet étudiant est une manette de drone conçue pour être utilisée avec un microcontrôleur ATmega328P. Nous avons utilisé un module NRF24 pour la communication entre la manette et le drone, permettant une transmission de données fiable et à faible consommation d&apos;énergie. La manette comprend des joysticks pour les commandes de mouvement, ainsi qu&apos;un écran OLED pour afficher les informations de vol en temps réel. Ce projet nous a permis de développer nos compétences en matière de programmation embarquée et de conception électronique, ainsi que d&apos;apprendre à travailler avec des modules de communication sans fil.' 
              />
            <Project title='Site web d&apos;une salle de gym (fictive)'
              skills={['/images/Logo/html.svg', '/images/Logo/css.svg', '/images/Logo/github.svg']} 
              image='/images/Projects/Messagerie.png' 
              description='Notre projet étudiant est un site web pour une salle de sport qui permet aux utilisateurs de consulter les horaires des cours, les tarifs d&apos;abonnement et les services proposés. Nous avons utilisé HTML et CSS pour créer l&apos;apparence visuelle du site et PHP pour la gestion des données via une base de données. Nous avons également inclus des fonctionnalités de messagerie pour permettre aux utilisateurs de communiquer directement avec les instructeurs et les administrateurs de la salle de sport.' 
              />
            <Project title='Mon site web' 
              skills={['/images/Logo/react.svg', '/images/Logo/tailwind.svg', '/images/Logo/github.svg']} 
              image='/images/Projects/my_website.png' 
              description='Afin de rendre plus simple le partage de mon portfolio j&apos;ai réalisé ce site. Ce site est codé en React avec Tailwind. Le déploiement s&apos;est fait de manière simple sur vercel avec une redirection DNS.' 
              />
            <Project title='Management d&apos;équipe de Formula Student' 
              skills={[]} 
              image='/images/Projects/groupe_fsuk23.jpg' 
              description='Durant ma dernière année, j&apos;ai continué le projet ARECE mais cette fois-ci en tant que manager. Le but était de gérer la future équipe de FS et de leur transmettre tout ce que j&apos;avais l&apos;année précédente.' 
              />
            <Project title='Testbench' 
              skills={['/images/Logo/python.svg','/images/Logo/django.svg',]} 
              image='/images/Projects/django_scenario.png' 
              description='Ce projet a réalisé durant mon stage de seconde année. Le but était de concevoir un banc de test pour des cartes électroniques. Il fallait tester ces cartes avant qu&apos;elles ne partent de chez le sous-traitant qui fabrique les pcb afin qu&apos;elles arrivent à l&apos;entreprise en état fonctionnel. Une première version du banc de test simple a été faite en python avec une interface Tkinter. Puis, dans l&apos;optique d&apos;en faire aussi un banc de non-régression, une seconde version a été faite avec Django. Django est un framework python qui permet de se passer du design d&apos;interface et qui intègre une connexion avec une base de donnée pour stocker les résultats des différents tests.' 
              />
            <Project title='Application iOS' 
              skills={['/images/Logo/react.svg', '/images/Logo/figma.svg']} 
              image='/images/Projects/iosApp.png' 
              description='Le but de ce projet était de faire une maquette d&apos;application qui devait intégrer de la rélité mixte adaptée à l&apos;essayage de vêtements. Le challenge a été développé une application iOS sans environnement MacOS. Pour faire, je me suis servi de React Native qui m&apos;a permis de coder sur mon pc tandis que l&apos;application était compilée sur mon iPhone' 
              />
          </Carousel>
        </div>

        <div className='w-full absolute top-[30%] bg-[#8B7E7E]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects