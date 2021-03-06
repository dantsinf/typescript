import React from "react";
import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./componets/TableArea";
import InfoArea from "./componets/InfoArea";
import  InputArea  from "./componets/InputArea";
const App = () => {
  const [list, setList] = useState(items);
  //const [list, setList] = useState<Item[]>(items); //se fosse necessário tipar aqui
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]); //array de Item
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount  = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  },[filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <div>
      <C.Container>
        <C.Header>
          <C.HeaderText>Sistema Finaceiro</C.HeaderText>
        </C.Header>
        <C.Body>
          {/* ÀREA DE INFORMAÇÕES */}
          <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} expense={expense} income={income} />          

          {/* ÀREA DE INSERÇÃO */}
          <InputArea onAdd={handleAddItem} />

          {/* TABELA DE ITENS */}
          <TableArea list={filteredList} />
        </C.Body>
      </C.Container>
    </div>
  );
};

export default App;
