import React from 'react'
import { motion } from 'framer-motion';

export default function RegBtn(props) {

  return (
    <motion.button
    onClick={()=>{
        window.location.href = 'https://reactnavigation.org/docs/use-route/';
    }}
    whileHover={{
        scale: 1.2,
        backgroundColor: '#0080AC'
    }}
     className='reg-btn bg-blue text-white font-bold font-alexandria text-xl  md:text-2xl rounded-3xl px-10 py-4 '>
                {props.title}
    </motion.button>
  )
}
