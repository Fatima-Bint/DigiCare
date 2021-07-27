import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Intro from "./pages/Intro";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div>
      <AppContainer>
        <AccountBox />
      </AppContainer>

      <Intro />
    </div>
  );
}

export default App;
