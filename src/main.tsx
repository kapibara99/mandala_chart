import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./tailwind.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Base from "./components/base";
import BackendCircleAnimation from "./components/backgroundAnimation";
import MainRouter from "./pages/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Base>
      <BrowserRouter>
        <Header />
        <script src="https://adm.shinobi.jp/s/420990a4d8d0114365e83e26ab63788c"></script>
        <BackendCircleAnimation>
          <MainRouter />
        </BackendCircleAnimation>
        <Footer />
      </BrowserRouter>
    </Base>
  </StrictMode>
);
