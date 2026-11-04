"use client";

import { useEffect, useRef } from "react";
import { magazineEditionHtml } from "./magazineEditionData";
import "./magazineEdition.css";

/** The reviewed issue already contains its main landmark. No enclosing main is needed. */
export default function MagazineEdition() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const simulator = root.querySelector<HTMLElement>("#mag-simulator");
    const input = root.querySelector<HTMLInputElement>("#mag-cpc");
    const spend = root.querySelector<HTMLElement>("#mag-sim-spend");
    const balance = root.querySelector<HTMLElement>("#mag-sim-balance");
    const error = root.querySelector<HTMLElement>("#mag-sim-error");
    const breakEven = root.querySelector<HTMLButtonElement>("#mag-set-break-even");
    const reset = root.querySelector<HTMLButtonElement>("#mag-reset-cpc");
    if (!simulator || !input || !spend || !balance || !error || !breakEven || !reset) return;

    const fmt = new Intl.NumberFormat("ja-JP");
    const update = () => {
      const value = Number(input.value);
      if (input.value.trim() === "" || !Number.isInteger(value) || value < 0 || value > 10000) {
        error.hidden = false;
        input.setAttribute("aria-invalid", "true");
        input.setAttribute("aria-describedby", "mag-sim-help mag-sim-error");
        spend.textContent = "—";
        balance.textContent = "—";
        balance.className = "";
        return;
      }
      error.hidden = true;
      input.removeAttribute("aria-invalid");
      input.setAttribute("aria-describedby", "mag-sim-help");
      const cost = value * 500;
      const remainder = 12000 - cost;
      spend.textContent = `${fmt.format(cost)}円`;
      balance.textContent = `${remainder < 0 ? "−" : remainder > 0 ? "+" : ""}${fmt.format(Math.abs(remainder))}円`;
      balance.className = remainder < 0 ? "mag-negative" : remainder > 0 ? "mag-positive" : "";
    };
    const setBreakEven = () => { input.value = "24"; update(); };
    const resetCpc = () => { input.value = "80"; update(); };
    input.addEventListener("input", update);
    breakEven.addEventListener("click", setBreakEven);
    reset.addEventListener("click", resetCpc);
    simulator.hidden = false;
    update();

    // Print only expands this issue's details and restores their previous state.
    let closedDetails: HTMLDetailsElement[] | null = null;
    const beforePrint = () => {
      if (closedDetails !== null) return;
      closedDetails = Array.from(root.querySelectorAll<HTMLDetailsElement>("details:not([open])"));
      closedDetails.forEach((detail) => { detail.open = true; });
    };
    const afterPrint = () => {
      closedDetails?.forEach((detail) => { detail.open = false; });
      closedDetails = null;
    };
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);
    return () => {
      input.removeEventListener("input", update);
      breakEven.removeEventListener("click", setBreakEven);
      reset.removeEventListener("click", resetCpc);
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
      afterPrint();
      simulator.hidden = true;
    };
  }, []);

  return <div ref={rootRef} className="magazine-edition" dangerouslySetInnerHTML={{ __html: magazineEditionHtml }} />;
}
