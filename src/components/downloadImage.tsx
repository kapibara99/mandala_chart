// import html2canvas from "@codewonders/html2canvas";
import html2canvas from "html2canvas-pro";
import { CHART_MAIN_ID } from "./chart/chart.default";

export default function DownloadImage() {
  // 画像化とダウンロードをトリガーする
  const onClickExport = (): void => {
    // 画像化したい要素を取得
    const target = document.getElementById(CHART_MAIN_ID) as HTMLElement;
    if (!target) return;
    // html2canvasを使って要素をキャンバスに描画
    html2canvas(target, { logging: false }).then((canvas: HTMLCanvasElement) => {
      // キャンバスをPNG形式のデータURLに変換
      const targetImgUri = canvas.toDataURL("image/png");
      // ダウンロードリンクを作成
      const downloadLink = document.createElement("a");
      if (typeof downloadLink.download === "string") {
        downloadLink.href = targetImgUri;
        downloadLink.download = `${CHART_MAIN_ID}_${new Date().getTime()}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } else {
        // ダウンロードリンクが使えない場合は新しいタブで開く
        window.open(targetImgUri);
      }
    });
  };

  return (
    <div>
      {/* 画像化を実行するボタン */}
      <button onClick={onClickExport}>画像をダウンロード</button>
    </div>
  );
}
