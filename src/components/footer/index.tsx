import { Container, Content } from './styles'

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <div>
            <h4>
              <a href="#home">
                Zing<span>.</span>
              </a>
            </h4>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <p>Gallery</p>
            <p>About us</p>
            <p>Buy online</p>
          </div>
          <div>
            <h4>Policy</h4>
            <p>Terms &#38; conditions</p>
            <p>Privacy policy</p>
          </div>
          <div>
            <h4>Social</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIN</p>
          </div>
        </div>
        <div>
          <p>Copyright ©2022 Zing Inc. Todos os direitos reservados.</p>
        </div>
      </Content>
    </Container>
  )
}
