import React from 'react'
import { useState, useEffect } from 'react'
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import {getCurrentMonth} from './helpers/dateFilter';
const App = () => {

  const [list, setList] = useState(items);
  //const [list, setList] = useState<Item[]>(items); //se fosse necessário tipar aqui
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);//array de Item

  useEffect(()=>{
    
  }, [list, currentMonth])

  return (
    <div>
      <C.Container>
        <C.Header>
          <C.HeaderText>Sistema Finaceiro</C.HeaderText>
        </C.Header>
        <C.Body>
          
          {/* ÀREA DE INFORMAÇÕES */}

          {/* ÀREA DE INSERÇÃO */}

          {/* TABELA DE ITENS */}

        </C.Body>
      </C.Container>
    </div>
  )
}

export default App
