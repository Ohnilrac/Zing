import { ClientTestimonial, Container, Content, ImgClient } from "./styles";
import client from "../../assets/img-testimonial.png"
import aspas from "../../assets/quote-up.svg"

export function Testimonials() {
  return(
    <Container id="testimonials">
      <Content>
        <h2>O que nossos clientes dizem...</h2>
        <div>
          <ImgClient>
            <img src={client} alt="Perfil do cliente" />
          </ImgClient>
          <ClientTestimonial>
            <i>
              <img src={aspas} alt="aspas" />
            </i>
            <h3>Serviço incrível</h3>
            <p>Como o mercado online pode ser um lugar assustador, a presença de avaliações de clientes em uma loja online ajuda a estabelecer autenticidade, confiança e confiança entre os compradores.</p>
            <cite>
              <h4>Wade Warren</h4>
              <p>Doctor</p>
            </cite>
          </ClientTestimonial>
        </div>
      </Content>
    </Container>
  )
}