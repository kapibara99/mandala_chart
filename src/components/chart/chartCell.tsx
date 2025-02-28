import React, { useRef, useState } from "react";
import { MandalaCellProps } from "./chart.default";

const MandalaCell: React.FC<MandalaCellProps> = ({ cellType, value, isFocused, zahyou }) => {
  const cellRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [cellValue, setCellValue] = useState(value);
  // const handleFocus = () => {
  //   onFocus(cellName);
  // };

  // const handleBlur = () => {
  //   onBlur();
  // };
  console.log("MandalaCell rendered", cellValue);

  return (
    <div
      ref={cellRef}
      className="relative border border-gray-300 p-2 focus-within:ring-2 focus-within:ring-blue-500"
      // onFocus={handleFocus}
      // onBlur={handleBlur}
      data-zahyou={zahyou.join(",")}
    >
      <textarea
        ref={inputRef}
        value={cellValue}
        onInput={(e) => setCellValue(e.currentTarget.value)}
        className="w-full h-20 border border-gray-300 p-2 outline-none"
      />
    </div>
  );
};

export default MandalaCell;
