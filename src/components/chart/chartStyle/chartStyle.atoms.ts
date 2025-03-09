import { atom } from "jotai";
import { DEFAULT_STYLE, createChartStyleValue } from "./chartStyle.default";

export const chartStyleAtom = atom({
  data: DEFAULT_STYLE,
  classValue: createChartStyleValue(DEFAULT_STYLE),
});
