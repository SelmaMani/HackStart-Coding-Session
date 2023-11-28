import React from 'react'

export default function HeroInfo(props) {
  return (
    <div className="info flex gap-4 justify-center items-center ">
        <img className='icon-shadow w-1/6 md:w-fit' src={props.icon} alt="icon" />
        <div className="info-text text-shadow text-start text-xl md:text-2xl text-white">
                {props.text}
        </div>

    </div>
  )
}
