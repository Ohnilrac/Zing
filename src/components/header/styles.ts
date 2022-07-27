import styled from 'styled-components'

export const Container = styled.header`
  width: 80%;
  margin: 0 auto;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 2.4rem;
    font-stretch: 700;
    color: var(--text);

    span {
      color: var(--orange);
    }
  }
`
export const Menu = styled.div`
  display: none;

  ul {
    display: flex;
    flex-direction: column;
  }
`

export const Contact = styled.div`
  display: none;
`
