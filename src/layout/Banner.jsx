import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import Bannerone from '../assets/banner.png'

const Banner = () => {
  return (
    <section className='bg-[#1F2937] py-15 relative'>
   
        <div className='w-[130px] h-[130px] bg-[#3B82F6] rounded-full blur-3xl absolute top-1/2 left-0'></div>
        <div className='w-[130px] h-[130px] bg-[#D946EF] rounded-full blur-3xl absolute top-1/2 left-1/2'></div>
        <div className='w-[180px] h-[180px] bg-[#2563EB] rounded-full blur-3xl absolute top-1/2 right-0'></div>
       
        <Container>
            
             <Flex>
                <div className='w-6/12'>
                 
                 <h1 className='text-[70px] bg-gradient-to-r bg-clip-text text-transparent from-[#3B82F6] to-[#D946EF] font-bold leading-[84px] tracking-[2%] pt-[150px]'>Inspiration is everywhere</h1>
                 
                 <p className='text-white py-7'>There is no passion to be found playing small in settling for a life that is less than the one you are capable of living</p>

                 <button className='font-bold text-white py-5 px-10 bg-gradient-to-r from-[#3B82F6] to-[#D946EF] rounded-[6px]'>Get started</button>
                
                
                </div>
               
                <div className='w-6/12'>
                  
                <div className='flex justify-center'>
                <Images src={Bannerone}/>
                </div>
                  

                </div>
             </Flex>
        </Container>


    </section>
    
  )
}

export default Banner