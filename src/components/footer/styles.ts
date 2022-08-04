import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const Content = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 5rem;
`

export const FooterInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  div > h4 > a {
    font-size: 1.4rem;
    color: var(--text);

    span {
      color: var(--orange);
    }
  }

  div > h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text);
  }

  div > p {
    color: var(--text);
    margin: 0.4rem 0;
  }
`
export const Copyright = styled.div`
  p{
    color: var(--text);
    font-size: 0.9rem;
  }
`
