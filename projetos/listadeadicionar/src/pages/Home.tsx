import React from 'react'
import { Input, Text, Button, Row, Column, List } from 'components';

 export const Home = () => {
  return (
    <Column width="600px" margin="0 auto">
      <Text fontWeight="bold" fontSize="bodyLarge" my="10px" pl="10px" >Tasks</Text>
      <Row width="100%">
      <Input flex={1 } placeholder="Digite um nome aqui..." />
      <Button>OK</Button>
      </Row>

      <List items={[ 
        {label: 'Task 1'},
        {label: 'Task 2'},
        {label: 'Task 3'},
       ]} />

    </Column>
  )
} 
