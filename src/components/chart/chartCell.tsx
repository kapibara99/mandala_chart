import { ChangeEvent, FocusEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { MandalaCellProps } from "./chart";
import { getSameValueZahyou } from "./chart.default";

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
    if (inputRef.current) inputRef.current.focus();
  };
  useEffect(() => {
    // sub titleの時セル同期用のイベントを登録する
    if (inputRef.current && cellType == "subTitle") {
      const handleInputChange = (event: CustomEvent<string>) => setCellValue(event.detail);
      const eventName = `inputChange-${zahyou.join(",")}`;
      document.removeEventListener(eventName, handleInputChange as EventListenerOrEventListenerObject);
      document.addEventListener(eventName, handleInputChange as EventListenerOrEventListenerObject);
    }
  }, [cellType, zahyou]);

  const otherCellZahyou = cellType == "subTitle" ? getSameValueZahyou(zahyou) : zahyou;
  const handleSubTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const event = new CustomEvent(`inputChange-${otherCellZahyou.join(",")}`, { detail: e.target.value });
    document.dispatchEvent(event);
  };
  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCellValue(e.target.value);
    // 別のセルを更新
    if (cellType == "subTitle") handleSubTitleChange(e);
  };

  return (
    <div className="relative p-2 break-all min-h-15" data-zahyou={zahyou.join(",")}>
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
          onInput={handleInput}
          className="w-full h-20 border border-gray-300 p-2 border-none break-all"
        />
      </div>

      {/* クリック/ホバー用 */}
      <button
        className={`absolute top-0 right-0 w-full h-full block cursor-pointer hover:opacity-10 hover:bg-main-light ${
          cellFocused
            ? "border-attention border-4 -border-offset-4 z-4" // focused style
            : cellType == "title"
            ? "border-main-strong border-4 -border-offset-4 z-3" // main title cell
            : cellType == "subTitle"
            ? "border-main-light border-4 -border-offset-4 z-2" // sub title cell
            : "border-base-line border" // item cell
        }`}
        tabIndex={-1}
        type="button"
        onClick={(e) => handleClick(e)}
      />
      {/* 表示するvalue */}
      {cellValue}
    </div>
  );
}
