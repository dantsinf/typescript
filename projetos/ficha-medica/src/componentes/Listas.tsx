import React from 'react'

interface IProps {
  pessoas: {
      nome: string
      idade: number
      url: string
      descricao?: string
  }[]
}

const Listas = (props: IProps) => {
  return (
    <div>
      <p>Aqui uma lista</p>
    </div>
  )
}

export default Listas
