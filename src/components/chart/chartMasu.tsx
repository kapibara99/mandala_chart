import { useContext } from "react";
import { ChartContext } from "./chartContext";

export default function ChartMasu({
  value,
  masuName,
}: {
  value: string;
  masuName: string;
}) {
  const chartContext = useContext(ChartContext);
  return (
    <div
      className="outline outline-base-line p-4"
      style={{ color: chartContext.style.itemFontColor }}
      data-id={`${masuName}`}
    >
      {value}
    </div>
  );
}
