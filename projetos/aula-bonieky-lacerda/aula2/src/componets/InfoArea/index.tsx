import React from "react";
import * as C from "./styles";
import { FormatCurrentMonth } from "../../helpers/dateFilter";
type Props = {
  currentMonth: string;
};

const InfoArea = ({ currentMonth }: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
  };

  const handleNextMonth = () => {};

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅</C.MonthArrow>
        <C.MonthTitle>{FormatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea></C.ResumeArea>
    </C.Container>
  );
};

export default InfoArea;
