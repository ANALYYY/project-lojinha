import Home from "./pages/Home"
import Header from "./Componentes/Header/Header"
import { GlobalStyle } from "./GlobalStyle";
import { CaixasFiltros, DivSection, H2, Img } from "./AppStyle";
import Ordenar from "./Componentes/Ordenar/Ordenar"
import Filter from "./Componentes/Filter/Filter"
import Products from "./data/data"

function App() {
  const Imagem = "https://images.tcdn.com.br/img/img_prod/1138374/1673991787_liquida_vero_desktop.png"
  return (
   <div>
    <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Img src={Imagem}></Img>

      <CaixasFiltros>
         <div>
           <Filter></Filter>
         </div>

         <DivSection>
           <Ordenar></Ordenar>
           <H2>Recomendados</H2>
           <div>
             {Products.map((product) => (
             <Home
             product={product}
             key={product.id}
             />
             ))}
           </div>
         </DivSection>
      </CaixasFiltros>
    
  
   </div>
  );
}

export default App;

