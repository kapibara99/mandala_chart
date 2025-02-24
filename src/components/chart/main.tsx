import { useContext } from "react";
import ChartContextElement, { ChartContext } from "./chartContext";
import ChartCategory from "./chartCategory";
import ContentBox from "../contentBox";
import ChartInput from "./chartInput";

export default function MandalaChartMain() {
  const chartContext = useContext(ChartContext);
  if (chartContext.content.items.length !== 9) {
    return <div>MandalaChart Error</div>;
  }
  return (
    <div>
      <ChartContextElement>
        <ContentBox>
          <ChartInput />
        </ContentBox>
        <ContentBox>
          <div className="grid grid-cols-3">
            <ChartCategory no={0} />
            <ChartCategory no={1} />
            <ChartCategory no={2} />
            <ChartCategory no={3} />
            <ChartCategory central={true} no={0} />
            <ChartCategory no={4} />
            <ChartCategory no={5} />
            <ChartCategory no={6} />
            <ChartCategory no={7} />
          </div>
        </ContentBox>
      </ChartContextElement>
    </div>
  );
}
