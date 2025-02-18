import { useContext } from "react";
import ChartContextElement, { ChartContext } from "./chartContext";
import ChartItem from "./chartItem";
import ChartMasu from "./chartMasu";

export default function MandalaChartMain() {
  const chartContext = useContext(ChartContext);
  if (chartContext.content.items.length !== 9) {
    return <div>MandalaChart Error</div>;
  }
  return (
    <div className="w-4/5 mt-5 m-auto p-10 bg-white">
      <ChartContextElement>
        <div className="grid grid-cols-3">
          <ChartMasu
            title={chartContext.content.items[0].itemTitle}
            no={0}
            key={`masu-${0}`}
          />
          <ChartMasu
            title={chartContext.content.items[1].itemTitle}
            no={1}
            key={`masu-${1}`}
          />
          <ChartMasu
            title={chartContext.content.items[2].itemTitle}
            no={2}
            key={`masu-${2}`}
          />
          <ChartMasu
            title={chartContext.content.items[3].itemTitle}
            no={3}
            key={`masu-${3}`}
          />
          <div className="border border-gray-300">central</div>
          <ChartMasu
            title={chartContext.content.items[4].itemTitle}
            no={4}
            key={`masu-${4}`}
          />
          <ChartMasu
            title={chartContext.content.items[5].itemTitle}
            no={5}
            key={`masu-${5}`}
          />
          <ChartMasu
            title={chartContext.content.items[6].itemTitle}
            no={6}
            key={`masu-${6}`}
          />
          <ChartMasu
            title={chartContext.content.items[7].itemTitle}
            no={7}
            key={`masu-${7}`}
          />
        </div>
      </ChartContextElement>
    </div>
  );
}
