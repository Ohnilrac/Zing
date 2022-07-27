import { Contact, Container, Menu, Navigation } from "./styles";

export function Header(){
  return (
    <Container>
      <Navigation>
        <h2>Zing<span>.</span></h2>
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
      </Navigation>
    </Container>
    )
}