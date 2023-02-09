import Nav from "../Nav/Nav"
import Imagem from "./ImgLogo/logo.webp"
import { Cabecalho, Logo, Input, Cadastrar, Login } from "./style";

function Header () {
    
    return (
        <Header>
            <Cabecalho>
              <Logo src={Imagem} alt="Logo"></Logo> 
                <section>
                    <form action="" autoComplete="off">
                        <Input type="text" placeholder="O que você está procurando?"></Input>
                    </form>
                </section>

                <form>
                <Login>Login</Login>
                <Cadastrar >Cadastrar</Cadastrar>
                </form>
            </Cabecalho>
            <Nav></Nav>
        </Header>
    )
}

export default Header;