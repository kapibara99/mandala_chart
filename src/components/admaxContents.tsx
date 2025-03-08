import { useEffect, useState } from "react";

// 広告タイプの型

// PC/SP切替広告のReactコンポーネント
export default function AdmaxContent({ id }: { id: string }) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (isMounted) {
      // windowオブジェクトの広告リストを初期化
      if (!window["admaxads"]) window["admaxads"] = [];
      // 広告リストを取得
      const admaxads: AdmaxAdType[] = window["admaxads"];
      // 広告リストになかったら追加
      if (!admaxads.some((ad) => ad.admax_id === id))
        admaxads.push({
          admax_id: id,
          type: "switch",
        });
      // 外部JSを読み込んで広告リストを実際に表示
      const tag = document.createElement("script");
      tag.src = "https://adm.shinobi.jp/st/t.js";
      tag.async = true;
      document.body.appendChild(tag);
      // アンマウント時にJSタグと広告情報を削除
      return () => {
        document.body.removeChild(tag);
        const index = admaxads.findIndex((ad) => ad.admax_id === id);
        if (index !== -1) {
          admaxads.splice(index, 1);
        }
        window["__admax_tag__"] = undefined;
      };
    }
  }, [isMounted, id]);
  return <div className="inline-block my-20 mx-auto" data-admax-id={id} />;
}
