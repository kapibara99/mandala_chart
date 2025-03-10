import { NavLink, Route, Routes, useLocation } from "react-router";
import IndexPage from ".";
import Kiyaku from "./kiyaku";
import ContentBox from "../components/contentBox";
import { useEffect } from "react";
import PrivacyPolicy from "./privacy";

const Page404 = () => {
  return (
    <ContentBox title="404 NOT FOUND">
      <p>お探しのページが見つかりませんでした。</p>
      <NavLink className="text-blue-500 hover:underline" to="/">
        Topに戻る
      </NavLink>
    </ContentBox>
  );
};

// 表示位置をトップへ戻す
const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <></>;
};

export default function MainRouter() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route index element={<IndexPage />}></Route>
        <Route path="kiyaku" element={<Kiyaku />}></Route>
        <Route path="privacy" element={<PrivacyPolicy />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
}
