import React from 'react'
import { Column, Text } from 'components';

type ListItemProps = {
  label: string;
}

export const ListItem: React.FC<ListItemProps> = ({ label }) => {
  return (
    <Column>
      <Text>{label}</Text>
    </Column>
  )
}
 
