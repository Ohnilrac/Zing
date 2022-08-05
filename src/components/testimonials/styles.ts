import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  background: var(--text);

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`

export const Content = styled.div`
  width: 80%;
  margin: 3rem auto;
  padding: 2.5rem 0;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--background);
  }

  @media screen and (min-width: 760px) {
    div {
      display: flex;
      align-items: center;
    }
  }
`
export const ImgClient = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 3rem;

  img {
    width: 15rem;
    height: 100%;
  }

  @media screen and (min-width: 760px) {
    justify-content: flex-start;

    img {
      width: 25rem;
      height: 100%;
    }
  }
`
export const ClientTestimonial = styled.section`
  i {
    img {
      width: 3rem;
      height: 3rem;
    }
  }

  h3,
  p {
    color: var(--background);
  }
  h3 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1.4rem;
    margin: 2rem 0;
  }

  cite {
    h4 {
      font-size: 1.4rem;
      color: var(--orange);
    }

    p {
      font-size: 1.2rem;
      margin-top: 0.2rem;
    }
  }

  @media screen and (min-width: 760px) {
    padding-left: 7rem;
  }

  @media screen and (min-width: 1000px) {
    padding-right: 11rem;
  }
`
