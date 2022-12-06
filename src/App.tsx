import { ThemeProvider } from "@emotion/react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import GamePage from "./Pages/GamePage";
import Home from "./Pages/Home";
import MapPage from "./Pages/MapPage";
import NotFound from "./Pages/NotFound";
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
            {/* <Route path={constants.BLACK_OPS_II_PAGE} element={<GamePage />} /> */}
            <Route path={constants.BLACK_OPS_III.PAGE} element={<GamePage />} />
            <Route
              path={`${constants.BLACK_OPS_III.PAGE}/${constants.BLACK_OPS_III.SHADOWS_OF_EVIL}`}
              element={<MapPage />}
            />
            {/* <Route path={constants.BLACK_OPS_4_PAGE} element={<GamePage />} /> */}
            {/* <Route
              path={constants.BLACK_OPS_COLD_WAR_PAGE}
              element={<GamePage />}
            /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
