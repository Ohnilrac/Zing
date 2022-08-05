import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 3rem auto;

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`
export const Content = styled.div`
  width: 100%;

  img {
    width: 100%;
    display: none;
  }

  @media screen and (min-width: 760px) {
    display: flex;
    width: 80%;

    div > img {
      display: inline-block;
      padding: 10rem 0 0 0;
      margin: 0 0 0 1rem;
      width: 165%;
    }
  }
`
export const TittleSection = styled.div`
  text-align: center;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.4rem;
    color: var(--sub-text);
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 760px) {
    width: 75%;
    text-align: left;
  }
`

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  article {
    display: grid;
    gap: 0.5rem;

    span {
      font-size: 3rem;
      font-weight: 700;
      color: var(--orange);
    }

    strong {
      font-size: 1.5rem;
      color: #000000;
    }

    p {
      font-size: 1.4rem;
      color: var(--sub-text);
    }
  }
`
