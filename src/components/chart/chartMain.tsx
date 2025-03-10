import MandalaCell from "./chartCell";
import { DEFAULT_CHART_DATA, CHART_MAIN_ID } from "./chart.default";
import { defaultWidthSize } from "../../_commonStyle";
import ChartStyleDefault from "./chartStyle/chartStyle";
import { chartCellSizeAtom } from "./chartStyle/chartStyle.atoms";
import { useAtom } from "jotai";

export default function ChartMain() {
  const [cellSize] = useAtom(chartCellSizeAtom);
  return (
    <ChartStyleDefault>
      <div className={`${defaultWidthSize} p-4 bg-white overflow-x-auto shadow-md`}>
        <div
          id={CHART_MAIN_ID}
          className="grid grid-cols-9 min-w-[1000px]"
          style={{ width: Number.isNaN(cellSize) ? cellSize : Number(cellSize) * 9 + "px" }}
        >
          {DEFAULT_CHART_DATA().map((props) => (
            <MandalaCell key={`${props.cellType}-${props.zahyou[0]}-${props.zahyou[1]}`} {...props} />
          ))}
        </div>
      </div>
    </ChartStyleDefault>
  );
}
