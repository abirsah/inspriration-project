import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import Logo from '../assets/logo.png'
import List from '../components/List'

const Navber = () => {
  return (
       <nav className='bg-[#1F2937] py-[40px]'>
           <Container>  
             <Flex className='items-center'>
              <div className='w-3/12'>
                <Images src={Logo}/>
              </div>
              <div className='w-6/12'>
                <Flex className="gap-x-10">
                    <List text="Featured"/>
                    <List text="Tutorial"/>
                    <List text="Freelance"/>
                    <List text="Design"/>
                    <List text="Freebies"/>
                </Flex>
              </div>



              <div className='w-3/12'>
              <Flex className="gap-x-2 justify-end">
                   <button className='text-sm text-[#F9FAFB] font-inter font-medium bg-[#f9fafb40] py-3 px-6 rounded-[5px] hover:bg-[#2563EB] duration-500'>Login</button>

                   <button className='text-sm text-[#F9FAFB] font-inter font-medium bg-[#f9fafb40] py-3 px-6 rounded-[5px] hover:bg-[#2563EB] duration-500'>Sign up</button>


              </Flex>
              </div>

              </Flex>
           </Container>


       </nav>
  )
}

export default Navber


