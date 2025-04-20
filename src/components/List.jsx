import React from 'react'

const List = ({text,className}) => {
  return (


    <li className={`font-inter bg-red-500 list-none text-[14px] font-medium text-first ${className}`}>{text}</li>


)
}

export default List