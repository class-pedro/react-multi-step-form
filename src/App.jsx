import styled from "styled-components"
import Header from "./components/Header/Header"
import StepContainer from "./components/StepContainer/StepContainer"

const MainContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

function App() {

  return (
    <>
      <Header />
      <MainContainer>
        <StepContainer>
          <h1>Teste fonte</h1>
          <h1>Teste fonte</h1>
          <h1>Teste fonte</h1>
          <h1>Teste fonte</h1>
          <h1>Teste fonte</h1>
          <h1>Teste fonte</h1>
          <h1>Teste fonte</h1>
          <h1>Teste fonte</h1>
          <h1>Teste fonte</h1>
          <h1>Teste fonte</h1>
          <h1>Teste fonte</h1>
          <h1>Teste fonte</h1>
          <h1>Teste fonte</h1>
        </StepContainer>
      </MainContainer>
    </>
  )
}

export default App
