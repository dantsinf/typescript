import React from 'react'
import { Input, Text, Button, Row, Column, List } from 'components';

 export const Home = () => {
  const [taskName, setTaskName] = React.useState('');
  const [tasks, setTasks] = React.useState<{ label: string }[]>([]);

  const handleOKButton = () => {
    if(!taskName) return;

    setTasks((previous) => {
      const copy = [...previous];
      copy.push({ label: taskName })
      return copy
    })
    setTaskName('')
  }

  return (
    <Column width="600px" margin="0 auto">
      <Text fontWeight="bold" fontSize="bodyLarge" my="10px" pl="10px" >Tasks</Text>
      <Row width="100%">
      <Input flex={1} placeholder="Digite um nome aqui..." value={taskName} onChange={e => setTaskName(e.target.value)} />
      <Button onClick={handleOKButton} >OK</Button>
      </Row>

      {taskName}

      <List items={tasks} />

    </Column>
  )
} 
