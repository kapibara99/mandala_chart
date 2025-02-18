import ChartContextElement from "./chartContext";

export default function MandalaChartMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChartContextElement>
      <div className="chart-wrapper">{children}</div>
    </ChartContextElement>
  );
}
