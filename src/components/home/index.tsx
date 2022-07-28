import { Container } from "./styles";
import bgHome from "../../assets/bg-home.png"

export function Home(){
  return (
    <Container>
      <h1>Móveis incríveis para sua casa</h1>
      <p>Acreditamos que a cadeira é o móvel mais importante da sua casa. Porque se você ama a cadeira em que está sentado, é provável que você ame o resto da sala.</p>
      <div>
        <input type="text" />
        <i></i>
      </div>
      <img src={bgHome} alt="Uma sala com alguns jarros de plantas, uma poltrona laranja e um apoio para as pernas" />
    </Container>
  )
}