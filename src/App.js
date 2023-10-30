import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Routes, Route, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
