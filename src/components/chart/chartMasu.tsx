import { useContext } from "react";
import { ChartContext } from "./chartContext";
import ChartCategory from "./chartCategory";

export default function ChartMasu({
  value,
  key,
}: {
  value: string;
  key: string;
}) {
  const chartContext = useContext(ChartContext);
  return (
    <div
      data-key={key}
      className="outline outline-base-line p-4"
      style={{ color: chartContext.style.itemFontColor }}
    >
      <input type="text" name={`chart-${key}`} value={value} />
    </div>
  );
}
