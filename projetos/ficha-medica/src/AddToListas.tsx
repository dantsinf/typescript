import React, { useState } from 'react'

const AddToListas = () => {

  const [input, setInput] =  useState({
    nome: "",
    idade: "",
    descricao: "",
    img: ""
  })

  const handleChange = () => {

  }

  return (
    <div className="AddToList" >
      <p>Lista de adicionar</p>
      <input type="text" placeholder="Nome" value={input.nome} onClick={handleChange} className="AddToList-input" name="nome" />
      <input type="text" placeholder="Idade" value={input.idade} onClick={handleChange} className="AddToList-input" name="idade" />
      <input type="text" placeholder="Imagem Url" value={input.img} onClick={handleChange} className="AddToList-input" name="img" />
      <textarea placeholder="Descrição" value={input.descricao} onClick={handleChange} className="AddToList-input" name="descricao" />
    </div>
  )
}

export default AddToListas
