import React from 'react' 
import { Column } from 'components';

type ListProps = {
  items: []
}
export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <Column>
      {items.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </Column>
  )
}
 
