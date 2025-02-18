import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import MandalaChartMain from "./components/chart/main";

import "./tailwind.css";
import Base from "./components/base";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Base>
      <Header />
      <MandalaChartMain>aaa</MandalaChartMain>
      <Footer />
    </Base>
  </StrictMode>
);
