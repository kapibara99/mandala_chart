import { useContext } from "react";
import { ChartContext } from "./chartContext";
import ChartMasu from "./chartMasu";

export default function ChartCategory({
  no,
  central,
}: {
  no: number;
  central?: boolean;
}) {
  const chartContext = useContext(ChartContext);
  const masuCategory = central ? "title" : "item";
  const MasuParent = ({ children }: { children: React.ReactNode }) => {
    return (
      <div
        className="text-center w-full h-full m-auto outline outline-base-line grid grid-cols-3"
        data-name={no}
      >
        {children}
      </div>
    );
  };

  if (masuCategory == "title") {
    return (
      <MasuParent>
        <ChartMasu
          masuName={`item-${0}-title`}
          value={chartContext.content.items[0].itemTitle}
        />
        <ChartMasu
          masuName={`item-${1}-title`}
          value={chartContext.content.items[1].itemTitle}
        />
        <ChartMasu
          masuName={`item-${2}-title`}
          value={chartContext.content.items[2].itemTitle}
        />

        <ChartMasu
          masuName={`item-${3}-title`}
          value={chartContext.content.items[3].itemTitle}
        />
        <ChartMasu
          masuName={`central-title`}
          value={chartContext.content.central}
        />
        <ChartMasu
          masuName={`item-${4}-title`}
          value={chartContext.content.items[4].itemTitle}
        />

        <ChartMasu
          masuName={`item-${5}-title`}
          value={chartContext.content.items[5].itemTitle}
        />
        <ChartMasu
          masuName={`item-${6}-title`}
          value={chartContext.content.items[6].itemTitle}
        />
        <ChartMasu
          masuName={`item-${7}-title`}
          value={chartContext.content.items[7].itemTitle}
        />
      </MasuParent>
    );
  } else {
    if (!chartContext.content.items[no]) {
      return <div>No Data</div>;
    }
    return (
      <MasuParent>
        <ChartMasu
          masuName={`${masuCategory}-${no}-${0}`}
          value={chartContext.content.items[no].itemList[0]}
        />
        <ChartMasu
          masuName={`${masuCategory}-${no}-${1}`}
          value={chartContext.content.items[no].itemList[1]}
        />
        <ChartMasu
          masuName={`${masuCategory}-${no}-${2}`}
          value={chartContext.content.items[no].itemList[2]}
        />

        <ChartMasu
          masuName={`${masuCategory}-${no}-${3}`}
          value={chartContext.content.items[no].itemList[3]}
        />
        <ChartMasu
          masuName={`${masuCategory}-${no}-title`}
          value={chartContext.content.items[no].itemTitle}
        />
        <ChartMasu
          masuName={`${masuCategory}-${no}-${4}`}
          value={chartContext.content.items[no].itemList[4]}
        />

        <ChartMasu
          masuName={`${masuCategory}-${no}-${5}`}
          value={chartContext.content.items[no].itemList[5]}
        />
        <ChartMasu
          masuName={`${masuCategory}-${no}-${6}`}
          value={chartContext.content.items[no].itemList[6]}
        />
        <ChartMasu
          masuName={`${masuCategory}-${no}-${7}`}
          value={chartContext.content.items[no].itemList[7]}
        />
      </MasuParent>
    );
  }
}
