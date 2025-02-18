import { useContext } from "react";
import { ChartContext } from "./chartContext";
import ChartItem from "./chartItem";

export default function ChartMasu({
  no,
  title,
}: {
  no: number;
  title: string;
}) {
  const chartContext = useContext(ChartContext);
  if (!chartContext.content.items[no]) {
    return <div>No Data</div>;
  }
  return (
    <div
      className="text-center m-auto border border-gray-300 grid grid-cols-3"
      data-name={no}
    >
      <ChartItem
        itemMode="item"
        key={`item-${no}-${0}`}
        value={chartContext.content.items[no].itemList[0]}
      />
      <ChartItem
        itemMode="item"
        key={`item-${no}-${1}`}
        value={chartContext.content.items[no].itemList[1]}
      />
      <ChartItem
        itemMode="item"
        key={`item-${no}-${2}`}
        value={chartContext.content.items[no].itemList[2]}
      />

      <ChartItem
        itemMode="item"
        key={`item-${no}-${3}`}
        value={chartContext.content.items[no].itemList[3]}
      />
      <ChartItem
        itemMode="title"
        key={`item-${no}-title`}
        value={chartContext.content.items[no].itemTitle}
      />
      <ChartItem
        itemMode="item"
        key={`item-${no}-${4}`}
        value={chartContext.content.items[no].itemList[4]}
      />

      <ChartItem
        itemMode="item"
        key={`item-${no}-${5}`}
        value={chartContext.content.items[no].itemList[5]}
      />
      <ChartItem
        itemMode="item"
        key={`item-${no}-${6}`}
        value={chartContext.content.items[no].itemList[6]}
      />
      <ChartItem
        itemMode="item"
        key={`item-${no}-${7}`}
        value={chartContext.content.items[no].itemList[7]}
      />
    </div>
  );
}
