import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";

import "./tailwind.css";
import Base from "./components/base";
import ChartMain from "./components/chart/chartMain";
import BackendCircleAnimation from "./components/backgroundAnimation";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Base>
      <Header />
      <BackendCircleAnimation>
        <ChartMain />
      </BackendCircleAnimation>
      <Footer />
    </Base>
  </StrictMode>
);
