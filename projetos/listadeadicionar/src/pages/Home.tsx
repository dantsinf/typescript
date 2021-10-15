import React from 'react'
import { Input, Text, Button, Row, Column } from 'components';

 export const Home = () => {
  return (
    <Column width="600px">
      <Text fontWeight="bold">Tasks</Text>
      <Row>
      <Input placeholder="Digite um nome aqui..." />
      <Button>OK</Button>
      </Row>
    </Column>
  )
} 
