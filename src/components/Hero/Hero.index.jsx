import React from 'react'
import Navbar from '../Navbar/Navbar.index'
import logo from '../../assets/logo.svg'
import HeroInfo from './Hero.info'
import map from '../../assets/map.svg'
import calendar from '../../assets/calendar.svg'
import arrow from '../../assets/arrow.svg'
import RegBtn from '../utils/Reg.btn'
import { motion } from 'framer-motion'
import spright from '../../assets/Spikes.svg'
import spleft from '../../assets/Spikesleft.svg'

export default function Hero() {
  return (
    <div id='hero' className="hero overflow-hidden w-screen flex flex-col gap-20 items-center relative">
        <div className="background -z-40 flex items-center justify-center gap-52 flex-row md:w-screen md:justify-between absolute">
                <img src={spright}  alt='back'></img>
                <img className='' src={spleft}  alt='back'></img>
        </div>
        <Navbar></Navbar>
        <div className="hero-elements flex flex-col gap-8 items-center justify-center">
                <img className='w-2/3 md:w-full' src={logo} alt="logo" />
                <div className="slogan text-shadow text-center text-white text-2xl md:text-3xl">
                        Scaling Your Innovation <br /> And Creativity!
                </div>
                <div className="infos flex flex-col md:flex-row gap-8">
                        <HeroInfo icon={map} text='ENSIA School' />
                        <HeroInfo icon={calendar} text='December 2nd' />
                </div>
        </div>
        <RegBtn title='Register NOW!'></RegBtn>
        <motion.button
        onClick={()=>{
                const section = document.getElementById('agenda');
                section.scrollIntoView({behavior:'smooth'})
        }}
         initial={{ y: 20 }}
         animate={{
             y: [0, 50, 0],
             transition: {
                 duration: 1,
                 repeat: Infinity,
                 repeatType: "loop",
                 ease: "easeOut"
             }
               }}
               className='flex w-fit items-center justify-center'
        >
                <img className='w-3/5' src={arrow} alt="arrow" />
        </motion.button>
       
    </div>
  )
}
