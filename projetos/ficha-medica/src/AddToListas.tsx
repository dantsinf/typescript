import React from 'react'

const AddToListas = () => {
  return (
    <div className="AddToList" >
      <p>Lista de adicionar</p>
      <input type="text" placeholder="Nome" className="AddToList-input" />
      <input type="text" placeholder="Idade" className="AddToList-input" />
      <input type="text" placeholder="Imagem Url" className="AddToList-input" />
      <input type="text" placeholder="Descrição" className="AddToList-input" />
    </div>
  )
}

export default AddToListas
