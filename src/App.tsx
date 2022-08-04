import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { Products } from "./components/products";
import { Testimonials } from "./components/testimonials";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <div>
      <Header />
      <Home />
      <About/>
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
      <GlobalStyles />
    </div>
  )
}
