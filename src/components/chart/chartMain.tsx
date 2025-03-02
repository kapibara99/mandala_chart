import MandalaCell from "./chartCell";
import { DEFAULT_CHART_DATA, CHART_MAIN_ID } from "./chart.default";

export default function ChartMain() {
  // チャートのメインコンポーネント
  return (
    <div id={CHART_MAIN_ID} className="grid grid-cols-9 p-4">
      {DEFAULT_CHART_DATA().map((props) => (
        <MandalaCell key={`${props.cellType}-${props.zahyou[0]}-${props.zahyou[1]}`} {...props} />
      ))}
    </div>
  );
}
