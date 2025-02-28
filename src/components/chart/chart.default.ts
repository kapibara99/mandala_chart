import { ChartStyle } from "./chart";

export const DEFAULT_BG_COLOR = "#000000";
export const DEFAULT_FONT_COLOR = "#000000";

export const DEFAULT_STYLE: ChartStyle = {
  fontFamily: "sans-serif",
  centralBackgroundColor: DEFAULT_BG_COLOR,
  centralFontColor: DEFAULT_FONT_COLOR,
  subTitleBackgroundColor: DEFAULT_BG_COLOR,
  subTitleFontColor: DEFAULT_FONT_COLOR,
  itemBackgroundColor: DEFAULT_BG_COLOR,
  itemFontColor: DEFAULT_FONT_COLOR,
};

export interface MandalaCellProps {
  cellType: "item" | "subTitle" | "title";
  isFocused: boolean;
  value: string;
  zahyou: [number, number];
}

export const DEFAULT_CHART_DATA = () => {
  const MandalaCellDefault: MandalaCellProps = {
    cellType: "item",
    isFocused: false,
    value: "",
    zahyou: [-1, -1],
  };
  const cellTypeZhyou = [
    [...new Array(9).fill(null)],
    [null, "No.1", null, null, "No.2", null, null, "No.3", null],
    [...new Array(9).fill(null)],
    [null, null, null, "No.1", "No.2", "No.3", null, null, null],
    [null, "No.4", null, "No.4", "center", "No.5", null, "No.5", null],
    [null, null, null, "No.6", "No.7", "No.8", null, null, null],
    [...new Array(9).fill(null)],
    [null, "No.6", null, null, "No.7", null, null, "No.8", null],
    [...new Array(9).fill(null)],
  ];
  const MandalaCellList: MandalaCellProps[][] = Array.from({ length: 9 }, () => {
    return Array.from({ length: 9 }, () => MandalaCellDefault);
  });

  MandalaCellList.forEach((objList, index) => {
    objList.forEach((obj, index2) => {
      const zahyouValue = cellTypeZhyou[index][index2];
      obj.zahyou = [index, index2];
      if (zahyouValue) {
        obj.value = zahyouValue;
        obj.cellType = zahyouValue.includes("No.") ? "subTitle" : "title";
      } else {
        obj.value = `item-cell-${index}-${index2}`;
      }
    });
  });

  return [...MandalaCellList.flatMap((item) => [...item])];
};
