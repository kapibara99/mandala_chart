import { FocusEvent, MouseEvent, useRef, useState } from "react";
import { MandalaCellProps } from "./chart";

export default function MandalaCell({ cellType, value, isFocused, zahyou }: MandalaCellProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [cellValue, setCellValue] = useState(value);
  const [cellFocused, setCellFocused] = useState(isFocused);
  const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    setCellFocused(e.currentTarget == document.activeElement);
    const valueEnd = e.currentTarget.value.length;
    e.currentTarget.setSelectionRange(valueEnd, valueEnd);
  };
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const cellTypeStyle =
    cellType == "title"
      ? "outline-main-strong outline-4 -outline-offset-4 z-3" // main title cell
      : cellType == "subTitle"
      ? "outline-main-light outline-4 -outline-offset-4 z-2" // sub title cell
      : "outline-base-line outline"; // item cell
  return (
    <div className="relative p-2 break-all" data-zahyou={zahyou.join(",")}>
      {/* ツールチップ */}
      <div
        className={
          "absolute bottom-4/5 w-64 p-4 bg-white border border-gray-200 rounded-md " +
          (zahyou[1] > 4 ? "right-0" : "left-0") +
          " transition-opacity duration-1000 -z-10 focus-within:z-100 opacity-0 focus-within:opacity-100 pointer-events-none focus-within:pointer-events-auto"
        }
      >
        <textarea
          ref={inputRef}
          value={cellValue}
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleFocus(e)}
          onInput={(e) => setCellValue(e.currentTarget.value)}
          className="w-full h-20 border border-gray-300 p-2 outline-none break-all"
        />
      </div>

      {/* クリック/ホバー用 */}
      <button
        className={`absolute top-0 right-0 w-full h-full block cursor-pointer hover:opacity-10 hover:bg-main-light ${cellTypeStyle}`}
        tabIndex={-1}
        type="button"
        onClick={(e) => handleClick(e)}
      />
      {/* 表示するvalue */}
      {cellValue}
    </div>
  );
}
