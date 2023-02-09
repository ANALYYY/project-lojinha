import React from 'react'
import { Button, CaixaCards, Imagens, CaixaTexto } from './StyleHome'

function Home({product}) {
  return (
    <div>
      <section>
            <CaixaCards>
                <Imagens src={product.imagem} alt={product.descricao}/>
                <CaixaTexto>
                  <h2>{product.loja}</h2>
                  <p>{product.descricao}</p>
                  <p>{"R$"+ " " +product.preco}</p>
                  <p>{"em"+ " " + "R$" + " "+ product.parcelas}</p>
                </CaixaTexto>
                <Button>Comprar</Button>
            </CaixaCards>
      </section>
    </div>
  )
}

export default Home
