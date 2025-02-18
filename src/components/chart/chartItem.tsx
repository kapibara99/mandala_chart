import { useContext, useState } from "react";
import { ChartContext } from "./chartContext";

type itemModeType = "central" | "title" | "item";
export default function ChartItem({
  itemMode,
  key,
  value,
}: {
  itemMode: itemModeType;
  key: string;
  value: string;
}) {
  const chartContext = useContext(ChartContext);
  return (
    <div
      data-key={key}
      className="border border-gray-300"
      style={{ color: chartContext.style.itemFontColor }}
    >
      <input type="text" name={`chart-${itemMode}-${key}`} value={value} />
    </div>
  );
}
