export type ChartStyle = {
  fontFamily: string;
  centralBackgroundColor: string;
  centralFontColor: string;
  subTitleBackgroundColor: string;
  subTitleFontColor: string;
  itemBackgroundColor: string;
  itemFontColor: string;
};

export type MandalaCellProps = {
  cellType: "item" | "subTitle" | "title";
  isFocused: boolean;
  value: string;
  zahyou: [number, number];
};
