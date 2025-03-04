import { NavLink, Route, Routes } from "react-router";
import IndexPage from ".";
import Kiyaku from "./kiyaku";
import ContentBox from "../components/contentBox";

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
export default function MainRouter() {
  return (
    <Routes>
      <Route index element={<IndexPage />}></Route>
      <Route path="kiyaku" element={<Kiyaku />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  );
}
