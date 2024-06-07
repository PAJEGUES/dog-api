import Cabecalho from "./components/cabecalho";
import Conteudo from "./components/conteudo";
import Produtos from "./components/produtos";
import Rodape from "./components/rodape";
import "./globals.css"

export default function Home() {
  return (
    <div> 
      
      <Cabecalho/>

      <Conteudo/>

      <Produtos/>

      <Rodape/>
        
    </div>
  );
}
