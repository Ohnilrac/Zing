import { Container, FormContainer, Img, NameArea, Title } from './styles'
import imgContact from '../../assets/img-contact.png'

export function Contact() {
  return (
    <Container id="contact">
      <Img>
        <img src={imgContact} alt="" />
      </Img>
      <section>
        <Title>
          <h2>Contate-nos</h2>
          <p>Adorariamos lhe ouvir!</p>
        </Title>
        <div>
          <FormContainer>
              <div>
                <label htmlFor="">Nome:</label>
                <input type="text" placeholder="Primeiro Nome" />
              </div>
              <div>
                <label htmlFor="">Sobrenome:</label>
                <input type="text" placeholder="Segundo Nome" />
              </div>
            <div>
              <label htmlFor="">E-mail:</label>
              <input type="email" placeholder="Digite seu E-mail" />
            </div>
            <div>
              <label htmlFor="">Mensagem:</label>
              <textarea placeholder="Digite aqui sua mensagem..."></textarea>
            </div>
            <button type="submit">Enviar Mensagem</button>
          </FormContainer>
        </div>
      </section>
    </Container>
  )
}
