import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";

import "./tailwind.css";
import Base from "./components/base";
import ChartMain from "./components/chart/chartMain";
import BackendCircleAnimation from "./components/backgroundAnimation";
import ContentBox from "./components/contentBox";
import DownloadImage from "./components/downloadImage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Base>
      <Header />
      <ContentBox>
        <h2>Setting</h2>
        <DownloadImage />
      </ContentBox>
      <BackendCircleAnimation>
        <ChartMain />
      </BackendCircleAnimation>
      <ContentBox>
        <h2>マンダラチャートとは？</h2>
      </ContentBox>
      <Footer />
    </Base>
  </StrictMode>
);
