import MandalaCell from "./chartCell";
import { DEFAULT_CHART_DATA, CHART_MAIN_ID } from "./chart.default";
import { defaultWidthSize } from "../../_commonStyle";

export default function ChartMain() {
  // チャートのメインコンポーネント
  return (
    <div id={CHART_MAIN_ID} className={`${defaultWidthSize} p-4 bg-white overflow-x-auto`}>
      <div className="grid grid-cols-9 min-w-[1000px]">
        {DEFAULT_CHART_DATA().map((props) => (
          <MandalaCell key={`${props.cellType}-${props.zahyou[0]}-${props.zahyou[1]}`} {...props} />
        ))}
      </div>
    </div>
  );
}
