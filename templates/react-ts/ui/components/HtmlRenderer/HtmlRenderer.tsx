import { useAppSelector } from "@/libs/redux/hooks";
import { useEffect, useRef } from "react";

export function HtmlRenderer({ html }: { html: string }) {
   const ref = useRef<HTMLDivElement | null>(null);
   const { getLayoutCss } = useAppSelector((state) => state.setting);
   const styles = getLayoutCss.data?.layout || "";

   useEffect(() => {
      if (!ref.current) return;

      let shadow = ref.current.shadowRoot;
      if (!shadow) {
         shadow = ref.current.attachShadow({ mode: "open" });
      }

      shadow.innerHTML = `
         ${styles ? `<style>${styles}</style>` : ""}
         ${html}
      `;
   }, [html, styles]);

   return <div ref={ref} style={{ zoom: 0.8 }} />;
}
