import styled from 'styled-components'

export const Container = styled.div`
  background: var(--text);
`

export const Content = styled.div`
  width: 80%;
  margin: 3rem auto;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--background);
    padding-top: 3rem;
  }
`
export const ImgClient = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 3rem;

  img {
    width: 15rem;
    height: 15rem;
  }
`
export const ClientTestimonial = styled.section`
  i{
    img{
      width: 3rem;
      height: 3rem;
    }
  }

  h3,p{
    color: var(--background);
  }
  h3{
    font-size: 2.2rem;
  }

  p{
    font-size: 1.4rem;
    margin: 2rem 0;
  }

  cite{
    h4{
      font-size: 1.4rem;
      color: var(--orange);
    }

    p{
      font-size: 1.2rem;
      margin-top: 0.2rem;
    }
  }
`
