import { MouseEvent } from "react";

export default function TablePaste({ targetId }: { targetId: string }) {
  const onClickHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 取得対象の要素
    const targets = document.querySelectorAll(`#${targetId} [data-zahyou] span`);
    if (!targets.length) return;
    const resultEls = ["<tr>"];
    for (let i = 0; i < targets.length; i++) {
      const cellText = targets[i].textContent !== "" ? targets[i].textContent : "&#160;";
      const cellData = `<td>${cellText}</td>`;
      resultEls.push(cellData);
      if ((i + 1) % 9 == 0 && i > 0) {
        resultEls.push("</tr>");
      }
    }
    const output = document.getElementById("paste-output");
    if (output) {
      output.innerHTML = "";
      output.insertAdjacentHTML("beforeend", resultEls.join(""));
      const pasteEl = document.getElementById("paste-table");
      if (pasteEl && pasteEl.textContent) {
        try {
          await navigator.clipboard.writeText(pasteEl.outerHTML);
          alert("クリップボードにコピーしました！");
        } catch (err) {
          console.error(err);
          alert("コピーに失敗しました");
        }
      }
    }
  };
  return (
    <div>
      <button
        onClick={onClickHandler}
        type="button"
        className="cursor-pointer relative flex gap-1.5 px-8 py-4 bg-attention text-base-color rounded-3xl hover:opacity-60 transition font-bold shadow-md"
      >
        スプレッドシートやExcelへコピーする
      </button>
      <div className="hidden invisible">
        <table id="paste-table">
          <tbody id="paste-output"></tbody>
        </table>
      </div>
    </div>
  );
}
