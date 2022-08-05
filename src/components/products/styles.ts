import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 3rem auto;

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`

export const HeaderProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text);
  }

  ul {
    display: flex;
    margin-top: 2rem;

    li {
      margin: 0 0.25rem;
      font-size: 1.2rem;
      color: var(--sub-text);
      cursor: pointer;

      &:first-child {
        color: var(--orange);
        font-weight: 700;
      }
    }
  }
`

export const Itens = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 4rem;

  article {
    img {
      width: 12rem;
      height: 12rem;
    }

    h4 {
      font-size: 1.5rem;
      color: var(--text);
    }

    span {
      font-size: 1.1rem;
    }

    i {
      font-size: 1.3rem;
      font-weight: 700;
      position: relative;
      left: 6rem;
      bottom: 0;
      color: var(--orange);
    }
  }

  @media screen and (min-width: 540px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 760px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
