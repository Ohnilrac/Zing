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
          Zing<span>.</span>
        </h2>
        <Menu>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Products</li>
            <li>Testimonials</li>
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
          <span><HiOutlineMenuAlt2 /></span>
        </div>
        <MenuOpen
          className={menuIsActive ? 'iconMenu' : 'icon transitionMenuClose'}
          onClick={ToggleMode}
        >
          <span>
            <IoCloseOutline />
          </span>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
        </MenuOpen>
      </Navigation>
    </Container>
  )
}
