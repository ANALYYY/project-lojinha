import React from 'react'
import { Div } from './style';

function Ordenar() {
  return (
    <Div>
      <h2>Resultados</h2>
      <select name="" id="">
        <option value="Selecione">Selecione</option>
        <option value="">Menor preço</option>
        <option value="">Maior preço</option>
        <option value="">A-Z</option>
        <option value="">Z-A</option>
      </select>
    </Div>
  )
}

export default Ordenar;
