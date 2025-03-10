import { CHART_MAIN_ID } from "../components/chart/chart.default";
import ChartMain from "../components/chart/chartMain";
import ChartCellSizeController from "../components/chart/chartStyle/chartCellSizeController";
import ChartColorController from "../components/chart/chartStyle/chartColorController";
import ChartStyleController from "../components/chart/chartStyle/chartStyleController";
import ContentBox from "../components/contentBox";
import DownloadImage from "../components/downloadImage";
import TablePaste from "../components/tablePaste";

export default function IndexPage() {
  return (
    <>
      <ChartMain />
      <ContentBox title="デザインの編集・保存・ダウンロード">
        <ChartStyleController />
        <ChartColorController />
        <ChartCellSizeController />
        <div className="flex">
          <div>
            <DownloadImage />
          </div>
          <div className="ml-4">
            <TablePaste targetId={CHART_MAIN_ID} />
          </div>
        </div>
      </ContentBox>
      <ContentBox title="マンダラチャートとは？">
        <div className="leading-loose">
          <p className="mb-4">
            マンダラチャートは、1979年に松村寧雄によって開発された、9マス思考発想法と目標達成のためのツールです。
            <br />
            3x3のマトリックスで目標や要因を整理し、視覚的に明確化する手法であり、必要な要素を記入することで直感的に理解できます。
          </p>
          <p className="mb-4">大谷翔平選手が花巻東高校時代に使用して、自らの目標を設計していたことでも有名です。</p>
          <p className="mb-4">
            マンダラチャートを効果的に活用するためには、書く順番が重要です。松村寧雄が定めた順番（下→左→上→右→左下→左上→右上→右下）で記述することで、より良い発想が得やすくなるとされています。
            <br />
            そのほかの活用法や活用例は、
            <a className="text-blue-500 hover:underline" href="https://mandalachart.jp/mandalachart" target="blank" rel="noopener">
              一般社団法人マンダラチャート協会
            </a>
            をご確認ください。
          </p>
          <p className="text-sm">
            ※「マンダラチャート」は
            <a className="text-blue-500 hover:underline" href="https://mandalachart.jp/" target="blank" rel="noopener">
              一般社団法人マンダラチャート協会
            </a>
            の登録商標です
          </p>
        </div>
      </ContentBox>
    </>
  );
}
