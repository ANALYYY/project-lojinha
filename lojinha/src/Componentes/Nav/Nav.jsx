//import styled from "styled-com
import { Navegador, A, CaixaButton, ParagrafoNav, ButtonNav } from "./style";
import { VscListUnordered } from "react-icons/vsc";

function Nav () {
    return (
        <Navegador>
            <CaixaButton>
                <ParagrafoNav> <VscListUnordered/> Todas as categorias</ParagrafoNav>
            </CaixaButton>
            <A href="#" target={"_blank"}>Bebês (0-36 meses)</A>
            <A href="#" target={"_blank"}>Kids (2-12 anos)</A>
            <A href="#" target={"_blank"}>Teen (13-16 anos)</A>
        </Navegador>
    )
}

export default Nav
















