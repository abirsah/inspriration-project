import React from 'react'

const Container = ({children}) => {
  return ( 
    <div className='max-w-[1200px] mx-auto bg-blue-500 h-[500px]'>
        {children}
    </div>
  )
}

export default Container