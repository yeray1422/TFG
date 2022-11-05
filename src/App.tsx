import { ThemeProvider } from "@emotion/react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import GamePage from "./Pages/GamePage";
import Home from "./Pages/Home";
import theme from "./theme";
import constants from "./Utils/Constants";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={constants.BLACK_OPS_PAGE} element={<GamePage />} />
            <Route path={constants.BLACK_OPS_II_PAGE} element={<GamePage />} />
            <Route path={constants.BLACK_OPS_III.PAGE} element={<GamePage />} />
            <Route path={constants.BLACK_OPS_4_PAGE} element={<GamePage />} />
            <Route path={constants.BLACK_OPS_COLD_WAR_PAGE} element={<GamePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
