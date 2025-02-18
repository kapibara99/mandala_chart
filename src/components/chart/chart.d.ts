export type ChartStyle = {
  fontFamily: string;
  centralBackgroundColor: string;
  centralFontColor: string;
  subTitleBackgroundColor: string;
  subTitleFontColor: string;
  itemBackgroundColor: string;
  itemFontColor: string;
};

export type ChartContent = {
  central: string;
  items: {
    itemTitle: string;
    itemList: string[];
  }[];
};

export interface ChartContextType {
  content: ChartContent;
  style: ChartStyle;
}
