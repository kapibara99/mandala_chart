import { useContext } from "react";
import ChartContextElement, { ChartContext } from "./chartContext";
import ChartCategory from "./chartCategory";

export default function MandalaChartMain() {
  const chartContext = useContext(ChartContext);
  if (chartContext.content.items.length !== 9) {
    return <div>MandalaChart Error</div>;
  }
  return (
    <div className="w-4/5 mt-10 m-auto p-10 bg-white shadow-sm">
      <ChartContextElement>
        <div className="grid grid-cols-3">
          <ChartCategory no={0} />
          <ChartCategory no={1} />
          <ChartCategory no={2} />
          <ChartCategory no={3} />
          <div className="outline outline-base-line">central</div>
          <ChartCategory no={4} />
          <ChartCategory no={5} />
          <ChartCategory no={6} />
          <ChartCategory no={7} />
        </div>
      </ChartContextElement>
    </div>
  );
}
