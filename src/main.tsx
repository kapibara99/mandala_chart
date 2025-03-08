import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./tailwind.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Base from "./components/base";
import BackendCircleAnimation from "./components/backgroundAnimation";
import MainRouter from "./pages/router";
import AdmaxContent from "./components/admaxContents";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Base>
      <BrowserRouter>
        <Header />
        <AdmaxContent id="5fdaac5f4d9a06e1edd26ec8a5cdc705" />
        <AdmaxContent id="420990a4d8d0114365e83e26ab63788c" />
        <script src="https://adm.shinobi.jp/s/420990a4d8d0114365e83e26ab63788c"></script>
        <BackendCircleAnimation>
          <MainRouter />
        </BackendCircleAnimation>
        <Footer />
      </BrowserRouter>
    </Base>
  </StrictMode>
);
