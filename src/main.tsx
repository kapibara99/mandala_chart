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
        <AdmaxContent admaxID="5fdaac5f4d9a06e1edd26ec8a5cdc705" />
        <BackendCircleAnimation>
          <MainRouter />
        </BackendCircleAnimation>
        <Footer />
      </BrowserRouter>
    </Base>
  </StrictMode>
);
