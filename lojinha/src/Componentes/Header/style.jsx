import styled from "styled-components";

export const Cabecalho = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    /*background-color: #eb9057;*/
    width: 100%;
    height: 100px;
`

export const Input = styled.input `
    width: 25rem;
    height: 40px;
    border-radius: 5px;
    /*background-color: orange;*/
    text-align: center;
    border: none;
    outline: 0;
    box-shadow: 0 0 0 0;
    margin-left: 100px;
    margin-right: 100px;
    font-size: 1rem;
    background-color: #f1f0fa;
`

export const Logo = styled.img `
    width: 250px;
    height: 85px;
`

export const Login = styled.button `
    margin-right: 3px;
    border-color: #eb9057;
    color: #eb9057;
    background-color: transparent;
    width: 5rem;
    font-family: Inter,sans-serif;
    font-size: 1rem;
    align-items: center;;
    height: 2.4rem;
    border-radius: 5px;
    text-decoration: none;
    transition: all .2s ease-in-out;
    cursor: pointer;
    width: 105px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
`

export const Cadastrar = styled.button `
    font-family: Inter,sans-serif;
    font-size: 1rem;
    text-decoration: none;
    align-items: center;
    line-height: 1;
    justify-content: center;
    height: 2.5rem;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    width: 9rem;
    background-color: #eb9057;
    color: black;
`
