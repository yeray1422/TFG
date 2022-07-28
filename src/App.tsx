import { ThemeProvider } from "@emotion/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import theme from "./theme";
import "./styles.css"
import constants from "./Utils/Constants";
import BlackOpsPage from "./Pages/Black-Ops/BlackOpsPage";
import BlackOps2Page from "./Pages/Black-Ops-II/BlackOps2Page";
import BlackOps3Page from "./Pages/Black-Ops-III/BlackOp3Page";
import BlackOps4Page from "./Pages/Black-Ops-4/BlackOps4Page";
import ColdWarPage from "./Pages/Black-Ops-Cold-War/ColdWarPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path={constants.BLACK_OPS_PAGE} element={<BlackOpsPage />} />
              <Route path={constants.BLACK_OPS_II_PAGE} element={<BlackOps2Page />} />
              <Route path={constants.BLACK_OPS_III_PAGE} element={<BlackOps3Page />} />
              <Route path={constants.BLACK_OPS_4_PAGE} element={<BlackOps4Page />} />
              <Route path={constants.BLACK_OPS_COLD_WAR_PAGE} element={<ColdWarPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
