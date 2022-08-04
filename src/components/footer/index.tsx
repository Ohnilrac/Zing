import { Container, Content, Copyright, FooterInfo } from './styles'

export function Footer() {
  return (
    <Container>
      <Content>
        <FooterInfo>
          <div>
            <h4>
              <a href="#home">
                Zing<span>.</span>
              </a>
            </h4>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
          <div>
            <h4>links</h4>
            <p><a>Galeria</a></p>
            <p><a>Sobre nós</a></p>
            <p><a>Comprar online</a></p>
          </div>
          <div>
            <h4>Política</h4>
            <p><a>Termos &#38; condições</a></p>
            <p><a>Política de privacidade</a></p>
          </div>
          <div>
            <h4>Social</h4>
            <p><a></a>Facebook</p>
            <p><a></a>Instagram</p>
            <p><a></a>LinkedIN</p>
          </div>
        </FooterInfo>
        <Copyright>
          <p>Copyright ©2022 Zing Inc. Todos os direitos reservados.</p>
        </Copyright>
      </Content>
    </Container>
  )
}
