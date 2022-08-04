import { Container, HeaderProducts, Itens } from "./styles";
import { AiOutlineArrowRight } from "react-icons/ai";
import banco from '../../assets/banco.png'
import cabiceira from '../../assets/cabiceira.png'
import cadeiraClara from '../../assets/cadeira-clara.png'
import sofaEscuro from '../../assets/sofa-escuro.png'
import cadeira from '../../assets/cadeira.png'
import sofaClaro from '../../assets/sofa-claro.png'
import mesaPequena from '../../assets/mesa-pequena.png'
import lampada from '../../assets/lampada.png'


export function Products(){
  return(
    <Container id="products">
      <HeaderProducts>
        <h2>Produtos</h2>
        <ul>
          <li>Todos</li>
          <li>Cadeiras</li>
          <li>Sofá</li>
          <li>Mesas</li>
          <li>Camas</li>
          <li>Armários</li>
          <li>Gabinete</li>
        </ul>
      </HeaderProducts>
      <div>
        <Itens>
          <article>
            <img src={banco} alt="" />
            <h4>Banco</h4>
            <span>R$ - 200</span>
            <i><AiOutlineArrowRight /></i>
          </article>
          <article>
            <img src={mesaPequena} alt="" />
            <h4>Mesa de chá</h4>
            <span>R$ - 150</span>
            <i><AiOutlineArrowRight /></i>
          </article>
          <article>
            <img src={sofaClaro} alt="" />
            <h4>Sofá - Claro</h4>
            <span>R$ - 300</span>
            <i><AiOutlineArrowRight /></i>
          </article>
          <article>
            <img src={sofaEscuro} alt="" />
            <h4>Sofá - Escuro</h4>
            <span>R$ - 300</span>
            <i><AiOutlineArrowRight /></i>
          </article>
          <article>
            <img src={lampada} alt="" />
            <h4>Lâmpada de mesa</h4>
            <span>R$ - 50</span>
            <i><AiOutlineArrowRight /></i>
          </article>
          <article>
            <img src={cadeira} alt="" />
            <h4>Cadeira</h4>
            <span>R$ - 200</span>
            <i><AiOutlineArrowRight /></i>
          </article>
          <article>
            <img src={cabiceira} alt="" />
            <h4>Mesa de cabeceira</h4>
            <span>R$ - 100</span>
            <i><AiOutlineArrowRight /></i>
          </article>
          <article>
            <img src={cadeiraClara} alt="" />
            <h4>Cadeira - Clara</h4>
            <span>R$ - 80</span>
            <i><AiOutlineArrowRight /></i>
          </article>
        </Itens>
      </div>
    </Container>
  )
}