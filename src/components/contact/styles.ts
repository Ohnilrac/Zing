import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const Img = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90%;
    height: 90%;
  }
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 2rem 0;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text);
  }

  p {
    font-size: 1.4rem;
    color: var(--sub-text);
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 0.3rem 0;

    label {
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 0.3rem;
    }

    input {
      width: 20rem;
      height: 2.7rem;
      border: 1px solid rgba(17, 43, 60, 0.3);

      &::placeholder {
        font-size: 1.2rem;
      }
    }
  }

  div > textarea {
    width: 20rem;
    height: 15rem;
    margin-bottom: 0.5rem;
    resize: none;
    border: 1px solid rgba(17, 43, 60, 0.3);

    &::placeholder {
      font-size: 1.2rem;
    }
  }

  button {
    width: 20rem;
    height: 3rem;
    font-size: 1.2rem;
    font-weight: 700;
    border: none;

    color: var(--background);
    background: var(--orange);
  }
`
