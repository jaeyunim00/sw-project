import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { Routes, Route, Link } from "react-router-dom";

// COMPONENTS
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import theme from "./components/Theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
