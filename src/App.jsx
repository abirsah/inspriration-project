import React from 'react'
import Container from './components/Container'
import List from './components/List'
import Flex from './components/Flex'


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
      </Container>
      </div>
  )
}

export default App