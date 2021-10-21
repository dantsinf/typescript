import React from "react";
import * as C from "./styles";
import { FormatCurrentMonth } from "../../helpers/dateFilter";
import  ResumeItem  from '../ResumeItem'

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

const InfoArea = ({ currentMonth, onMonthChange, income,expense }: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month)-1,1);
    currentDate.setMonth(currentDate.getMonth()-1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month)-1,1);
    currentDate.setMonth(currentDate.getMonth()+1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅</C.MonthArrow>
        <C.MonthTitle>{FormatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Receita" value={income} />
        <ResumeItem title="Despensa" value={expense} />
        <ResumeItem title="Balanço" value={income - expense} />
      </C.ResumeArea>
    </C.Container>
  );
};

export default InfoArea;