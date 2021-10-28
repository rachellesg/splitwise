import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

import Form from "./components/Form/index.jsx";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">Rachelle's Splitwise</header>
      </div>
      <Container>
        <Form />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
  padding: 50px 0;

  @media only screen and (max-width: 414px) {
    max-width: 414px;
  }
`;
