import { Contact, Container, Menu, MenuOpen, Navigation } from './styles'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'
import { useState } from 'react'

export function Header() {
  const [menuIsActive, setMenuIsActive] = useState(true)
  const ToggleMode = () => setMenuIsActive(!menuIsActive)

  return (
    <Container>
      <Navigation>
        <h2>
          <a href="#home">
            Zing<span>.</span>
          </a>
        </h2>
        <Menu>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre nós</a>
            </li>
            <li>
              <a href="#products">Produtos</a>
            </li>
            <li>
              <a href="#testemonials">Depoimentos</a>
            </li>
          </ul>
        </Menu>
        <Contact>
          <ul>
            <li>Contact</li>
            <li>Buy online</li>
          </ul>
        </Contact>
        <div
          className={menuIsActive ? 'icon' : 'iconMenu '}
          onClick={ToggleMode}
        >
          <span>
            <HiOutlineMenuAlt2 />
          </span>
        </div>
        <MenuOpen
          className={menuIsActive ? 'iconMenu' : 'icon transitionMenuClose'}
          onClick={ToggleMode}
        >
          <span>
            <IoCloseOutline />
          </span>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">Sobre nós</a>
            </li>
            <li>
              <a href="#products">Produtos</a>
            </li>
            <li>
              <a href="#testimonials">Depoimentos</a>
            </li>
          </ul>
        </MenuOpen>
      </Navigation>
    </Container>
  )
}
