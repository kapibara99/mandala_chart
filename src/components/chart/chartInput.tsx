import { useState, FormEvent } from "react";

export default function ChartInput() {
  const [chartInputValue, setChartInputValue] = useState("");
  const inputEvent = (e: FormEvent<HTMLInputElement>) => {
    setChartInputValue(e.currentTarget.value);
  };
  return (
    <>
      <p className="mb-5">マス目をクリックしてから、入力すると反映されます。</p>
      <div className="m-auto">
        <input
          type="text"
          name="chart-input"
          id="chart-input"
          className="block rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 w-full focus:text-gray-800"
          value={chartInputValue}
          onInput={inputEvent}
        />
      </div>
    </>
  );
}
