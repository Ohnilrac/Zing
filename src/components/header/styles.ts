import styled from 'styled-components'

export const Container = styled.header`
  width: 80%;
  margin: 0 auto;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  h2 {
    font-size: 2.4rem;
    font-stretch: 700;
    color: var(--text);

    span {
      color: var(--orange);
    }
  }

  .icon{
    font-size: 2.4rem;
    color: var(--orange);

    position: fixed;
    top: 2rem;
    right: 2rem;
  }

  .iconMenu{
    visibility: visible;
  }

  .closeMenu{
    visibility: hidden;
  }
`
export const Menu = styled.div`
  visibility: hidden;

  ul {
    display: flex;
    flex-direction: column;
  }
`

export const Contact = styled.div`
  visibility: hidden;
`
