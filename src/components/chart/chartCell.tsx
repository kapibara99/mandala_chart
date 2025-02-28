import { FocusEvent, MouseEvent, useRef, useState } from "react";
import { MandalaCellProps } from "./chart";

export default function MandalaCell({ cellType, value, isFocused, zahyou }: MandalaCellProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [cellValue, setCellValue] = useState(value);
  const [cellFocused, setCellFocused] = useState(isFocused);
  const handleFocus = (e: FocusEvent<HTMLElement>) => {
    setCellFocused(e.currentTarget == document.activeElement);
  };
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      className="relative inline-block outline outline-base-line p-2 focus-within:ring-4 focus-within:ring-attention hover:ring-2"
      data-zahyou={zahyou.join(",")}
    >
      {/* ツールチップ */}
      <div
        className={
          "absolute left-0 -top-full w-64 p-4 bg-white border border-gray-200 rounded-md" +
          " transition-opacity duration-1000 -z-10 focus-within:z-10 opacity-0 focus-within:opacity-100"
        }
      >
        <textarea
          ref={inputRef}
          value={cellValue}
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleFocus(e)}
          onInput={(e) => setCellValue(e.currentTarget.value)}
          className="w-full h-20 border border-gray-300 p-2 outline-none"
        />
      </div>

      {/* クリック/ホバー用 */}
      <button
        className="absolute top-0 right-0 opacity-0 w-full h-full block cursor-pointer"
        tabIndex={-1}
        type="button"
        onClick={(e) => handleClick(e)}
      />
      {/* 表示するvalue */}
      {cellValue}
    </div>
  );
}
