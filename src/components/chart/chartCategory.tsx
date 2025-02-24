import { useContext, useState } from "react";
import { ChartContext } from "./chartContext";
import ChartMasu from "./chartMasu";

type itemModeType = "central" | "title" | "item";
export default function ChartCategory({ no }: { no: number }) {
  const chartContext = useContext(ChartContext);
  if (!chartContext.content.items[no]) {
    return <div>No Data</div>;
  }
  return (
    <div
      className="text-center m-auto outline outline-base-line grid grid-cols-3"
      data-name={no}
    >
      <ChartMasu
        key={`item-${no}-${0}`}
        value={chartContext.content.items[no].itemList[0]}
      />
      <ChartMasu
        key={`item-${no}-${1}`}
        value={chartContext.content.items[no].itemList[1]}
      />
      <ChartMasu
        key={`item-${no}-${2}`}
        value={chartContext.content.items[no].itemList[2]}
      />

      <ChartMasu
        key={`item-${no}-${3}`}
        value={chartContext.content.items[no].itemList[3]}
      />
      <ChartMasu
        key={`item-${no}-title`}
        value={chartContext.content.items[no].itemTitle}
      />
      <ChartMasu
        key={`item-${no}-${4}`}
        value={chartContext.content.items[no].itemList[4]}
      />

      <ChartMasu
        key={`item-${no}-${5}`}
        value={chartContext.content.items[no].itemList[5]}
      />
      <ChartMasu
        key={`item-${no}-${6}`}
        value={chartContext.content.items[no].itemList[6]}
      />
      <ChartMasu
        key={`item-${no}-${7}`}
        value={chartContext.content.items[no].itemList[7]}
      />
    </div>
  );
}
