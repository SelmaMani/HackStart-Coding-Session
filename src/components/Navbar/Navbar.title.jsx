import React from 'react'
import { motion } from 'framer-motion'

export default function NavbarTitle(props) {
        const scrollIntoSection = () => {
                const section = document.getElementById(props.id);
                if (section) {
                        section.scrollIntoView({behavior: 'smooth'});
                }
        }
  return (
    <motion.button
    whileHover={{
        scale: 1.2,
        textShadow: "0px 2px 2px #04BEFE"
    }}
    onClick={()=>{
        scrollIntoSection();
    }}
     className="navbar-title font-alexandria text-center text-xs md:text-xl text-white">
                {props.title}
    </motion.button>
  )
}
