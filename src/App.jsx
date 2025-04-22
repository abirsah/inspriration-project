import React from 'react'
import Container from './components/Container'
import List from './components/List'
import Flex from './components/Flex'
import Images from './components/Images'
import Banner from './assets/banner.png'
import Heading from './components/Heading'

const App = () => {
  return (
    <div>
      <Container>
         <Flex className="gap-x-10">
             <List text="Featured"/>
             <List text="Tutorial"/>
             <List text="Freelance"/>
             <List text="Design"/>
         </Flex>
         <Images src={Banner}/>
         <Heading text="Freelancer & WFH"/> 
      </Container>
      </div>
  )
}

export default App