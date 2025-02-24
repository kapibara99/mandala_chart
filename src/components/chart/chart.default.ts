import { ChartContextType, ChartStyle } from "./chart";

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

export const DEFAULT_CONTENT = {
  central: "Central Name",
  items: [
    {
      itemTitle: "No.1",
      itemList: ["", "", "", "", "", "", "", "", ""],
    },
    {
      itemTitle: "No.2",
      itemList: ["", "", "", "", "", "", "", "", ""],
    },
    {
      itemTitle: "No.3",
      itemList: ["", "", "", "", "", "", "", "", ""],
    },
    {
      itemTitle: "No.4",
      itemList: ["", "", "", "", "", "", "", "", ""],
    },
    {
      itemTitle: "No.5",
      itemList: ["", "", "", "", "", "", "", "", ""],
    },
    {
      itemTitle: "No.6",
      itemList: ["", "", "", "", "", "", "", "", ""],
    },
    {
      itemTitle: "No.7",
      itemList: ["", "", "", "", "", "", "", "", ""],
    },
    {
      itemTitle: "No.8",
      itemList: ["", "", "", "", "", "", "", "", ""],
    },
    {
      itemTitle: "No.9",
      itemList: ["", "", "", "", "", "", "", "", ""],
    },
  ],
};

export const DEFAULT_DATA: ChartContextType = {
  content: DEFAULT_CONTENT,
  style: DEFAULT_STYLE,
};
