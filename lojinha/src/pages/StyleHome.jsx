import styled from "styled-components";

export const CaixaCards = styled.div `
    width: 250px;
    height: 350px;
    margin: 10px;
    border-radius: 6px;
   /* transition: all 0.5s ease 0s;*/
    box-shadow: rgb(231 231 231) 1px 2px 16px;
   `
   
   export const Imagens = styled.img `
       width: 220px;
       height: 200px;
       padding: 0.6rem;
       border-radius: 20px;
       margin-left: 15px;
   `

   export const CaixaTexto = styled.div `
        margin-left: 30px;
   `

   export const Button =styled.button `
        width: 120px;
        height: 30px;
        margin-top: 15px;
        margin-left: 65px;
        border-radius: 5px;

        :hover {
            background-color: #eb9057;
        }
   `


