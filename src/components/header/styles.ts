import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  margin: 0 auto;
  padding: 0.875rem;

  background: var(--background);
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.3);

  .icon {
    font-size: 2.4rem;
    color: var(--orange);
    transition: all 0.3s;
  }

  .iconMenu {
    visibility: hidden;
    transition: 0.7s;
    transform: translateX(100%)
  }

  .transitionMenuClose{
    transform: translateX(0)
  }

  div {
    span {
      position: fixed;
      top: 2rem;
      right: 2rem;
    }
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  h2 {
    a{
      font-size: 2.4rem;
      font-weight: 700;
      color: var(--text);
  
      span {
        color: var(--orange);
      }
    }
  }
`
export const Menu = styled.div`
  display: none;
  transform: translateY(100%);

  ul {
    display: flex;
    flex-direction: column;
  }
`

export const Contact = styled.div`
  visibility: hidden;
`
export const MenuOpen = styled.div`
  display: grid;
  place-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: var(--background);
  z-index: 100;

  span {
    position: fixed;
    top: 2rem;
    right: 2rem;
  }

  ul {
    display: grid;
    gap: 5rem;
    text-align: center;

    li {
      a {
        color: var(--orange);
        font-weight: 700;
      }
    }
  }
`
