import { Route, Routes } from "react-router";
import IndexPage from ".";
import Kiyaku from "./kiyaku";

export default function MainRouter() {
  return (
    <Routes>
      <Route index element={<IndexPage />}></Route>
      <Route path="kiyaku" element={<Kiyaku />}></Route>
    </Routes>
  );
}
