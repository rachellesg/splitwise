import styled from "styled-components";

import Header from "./components/Header";

import Home from "./pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container>
        <Header>THE SPLIGO APP</Header>
        <Switch>
          <Route path="/about">About</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
  padding: 50px 0;
  text-align: center;

  @media only screen and (max-width: 414px) {
    max-width: 414px;
  }
`;
