import ChartContextElement from "./chartContext";

export default function MandalaChartMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <ChartContextElement>
        <div>{children}</div>
      </ChartContextElement>
    </div>
  );
}
