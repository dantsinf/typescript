import React from 'react'
import * as C from './styles'

type Props = {
  title: string;
  value: number;

}

const ResumeItem = ({ title, value }: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info>R$ {value}</C.Info>
    </C.Container>
  );
}

export default ResumeItem
