import React from 'react'
import * as C from './styles'
import { Item } from '../../types/Item'

type Props = {
  item: Item
}

 export const TableItem = ({item}:Props) => {
  return (
    <div>
      <C.TableLine>
        <C.TableColumn></C.TableColumn>
      </C.TableLine>
    </div>
  )
} 
