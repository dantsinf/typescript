import React from 'react'

interface IProps {
  pessoas: {
      nome: string
      idade: number
      url: string
      descricao?: string
  }[]
}

const Listas: React.FC<IProps> = ({ pessoas }) => {

  const renderListas = (): JSX.Element[] => {
    return pessoas.map((pessoa) => {
        return (
          <li className="List" >
            <div className="List-header" >
              <img className="List-img" src="{pessoa.url}" alt="" />
              <h2>{pessoa.nome}</h2>
            </div>
            <p>{pessoa.idade} anos</p>
            <p className="List-note">{pessoa.descricao}</p>
           </li>
        )
    })
  }

  return (
    <div>
      <ul>
        {renderListas()}
      </ul>
    </div>
  )
}

export default Listas
