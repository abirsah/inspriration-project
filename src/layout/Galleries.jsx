import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import Galleries1 from '../assets/galleries1.png'
import Galleries2 from '../assets/galleries2.png'
import Galleries3 from '../assets/galleries3.png'
import Galleries4 from '../assets/galleries4.png'


const Galleries = () => {
  return (
    <section className='bg-[#1F2937] py-[40px]'>
        <Container>
            <Flex className="justify-between pb-16">
            <p>Galleries</p>
            <p>view all</p>
            </Flex>

            <Flex className="gap-x-6">
             
                
             <Images src={Galleries1}/>
             <Images src={Galleries2}/>
             <Images src={Galleries3}/>
             <Images src={Galleries4}/>
         

            </Flex>
            
        </Container>
    </section>
  )
}

export default Galleries