import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h3 className={`text-[28px] text-[#111827] font-semibold font-inter ${className}`}>{text}</h3>
  )
}

export default Heading