import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 3rem auto;
`
export const Content = styled.div`
  width: 100%;

  img{
    width: 100%;
    display: none;
  }
`
export const TittleSection = styled.div`
  text-align: center;

  h2{
    font-size: 3rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 1rem;
  }

  p{
    font-size: 1.4rem;
    color: var(--sub-text);
    margin-bottom: 3rem;
  }
`

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  article{
    display: grid;
    gap: 0.5rem;

    span{
      font-size: 3rem;
      font-weight: 700;
      color: var(--orange);
    }

    strong{
      font-size: 1.5rem;
      color: #000000;
    }

    p{
      font-size: 1.4rem;
      color: var(--sub-text);
    }
  }
`
