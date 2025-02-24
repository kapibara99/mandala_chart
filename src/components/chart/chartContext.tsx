import { useState } from "react";

import { createContext } from "react";
import { DEFAULT_DATA } from "./chart.default";

export const ChartContext = createContext(DEFAULT_DATA);

export default function ChartContextElement({
  children,
}: {
  children: React.ReactNode;
}) {
  const [context] = useState(DEFAULT_DATA);
  return (
    <ChartContext.Provider value={context}>{children}</ChartContext.Provider>
  );
}
