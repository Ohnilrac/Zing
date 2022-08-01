import { Container } from './styles'
import imgContact from '../../assets/img-contact.png'

export function Contact() {
  return (
    <Container>
      <section>
        <img src={imgContact} alt="" />
      </section>
      <section>
        <div>
          <h2></h2>
          <p></p>
        </div>
        <div>
          <form>
            <div>
              <label htmlFor=""></label>
              <input type="text" placeholder='Primeiro Nome' />
              <i></i>
              <i></i>
              <small>Erro</small>
            </div>
            <div>
              <label htmlFor=""></label>
              <input type="text" placeholder='Segundo Nome' />
              <i></i>
              <i></i>
              <small>Erro</small>
            </div>
            <div>
              <label htmlFor=""></label>
              <input type="email" placeholder='Digite seu E-mail' />
              <i></i>
              <i></i>
              <small>Erro</small>
            </div>
            <div>
              <textarea></textarea>
            </div>
            <button type='submit'>Enviar Mensagem</button>
          </form>
        </div>
      </section>
    </Container>
  )
}
