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
        <BackendCircleAnimation>
          <MainRouter />
        </BackendCircleAnimation>
        <Footer />
      </BrowserRouter>
    </Base>
  </StrictMode>
);
