import { Container, Content, SectionContainer, TittleSection } from './styles'
import aboutImg from '../../assets/img-about.png'

export function About() {
  return (
    <Container>
      <Content>
        <div>
          <TittleSection>
            <h2>Sobre nós</h2>
            <p>
              O conforto é fundamental e como você se sente sobre sua cadeira
              afetará como você se sente e seu humor.
            </p>
          </TittleSection>

            <SectionContainer>
              <article>
                <span>1</span>
                <strong>Missão</strong>
                <p>
                  Deixar as pessoas com conforto e que elas sintam-se em um
                  ambiente tranquilizador.
                </p>
              </article>
              <article>
                <span>2</span>
                <strong>Motivação</strong>
                <p>Uma complementação perfeita para o quarto ou sala. Tudo para acomodação do cliente.</p>
              </article>
              <article>
                <span>3</span>
                <strong>Visão</strong>
                <p>
                  Juntos, dar uma dose de uma visão e espaço saudável para os
                  olhos que observam.
                </p>
              </article>
              <article>
                <span>4</span>
                <strong>Meta</strong>
                <p>
                  Ter significado para as pessoas que vivem no espaço em que
                  habitam nossas artes.
                </p>
              </article>
            </SectionContainer>
        </div>
        <div>
          <img src={aboutImg} alt="Quato imagens de partes de uma sala decorada com cadeiras, poltronas, jarros e etc." />
        </div>
      </Content>
    </Container>
  )
}
