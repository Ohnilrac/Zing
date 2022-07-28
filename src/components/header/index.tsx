import {
  CloseMenu,
  Contact,
  Container,
  Menu,
  Navigation,
  OpenMenu
} from './styles'
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
        <div className={menuIsActive ? 'icon' : 'closeMenu'} onClick={ToggleMode}>
          <HiOutlineMenuAlt2 />
        </div>
        <div >
          <IoCloseOutline className={menuIsActive ? 'closeMenu' : 'icon'} onClick={ToggleMode} />
        </div>
      </Navigation>
    </Container>
  )
}
