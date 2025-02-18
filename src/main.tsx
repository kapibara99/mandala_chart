import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import MandalaChartMain from "./components/chart/main";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <MandalaChartMain>aaa</MandalaChartMain>
    <Footer />
  </StrictMode>
);
