import { About } from "./components/about";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <div>
      <Header />
      <Home />
      <About/>
      <GlobalStyles />
    </div>
  )
}
