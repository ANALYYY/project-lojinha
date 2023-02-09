
import React from 'react'
import { Button, Div, Filtro, Input, MaiorPreco, Sticky } from './style'

function Filter() {
  return (
    <Sticky>
        <Div>
            <Filtro>
                <h2>Filtros</h2>
            </Filtro>
            
            <div>
                <label htmlFor="">Menor preço:</label>
                <Input type="number" />
            </div>

            <MaiorPreco>
                <label htmlFor="">Maior preço:</label>
                <Input type="number" />
            </MaiorPreco>

            <div>
                <Button>Buscar</Button>
            </div>
        </Div>
    </Sticky>
  )
}

export default Filter;
