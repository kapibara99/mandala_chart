"use client";
import { useEffect } from "react";

export default function AdmaxContent({ admaxID }: { admaxID: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://adm.shinobi.jp/st/t.js";
    script.async = true;
    document.body.appendChild(script);
    window.admaxads = window.admaxads || [];
    window.admaxads.push({ admax_id: admaxID, type: "switch" });

    return () => {
      document.body.removeChild(script);
    };
  }, [admaxID]);

  return (
    <>
      <div className="mt-8 flex justify-center">
        <div className={`admax-switch inline-block`} data-admax-id={admaxID} />
      </div>
    </>
  );
}
