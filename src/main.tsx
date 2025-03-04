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
import About from "./components/about";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Base>
      <Header />
      <BackendCircleAnimation>
        <ChartMain />
      </BackendCircleAnimation>
      <ContentBox title="デザインの編集・保存・ダウンロード">
        <DownloadImage />
      </ContentBox>
      <ContentBox title="マンダラチャートとは？">
        <About />
      </ContentBox>
      <Footer />
    </Base>
  </StrictMode>
);
