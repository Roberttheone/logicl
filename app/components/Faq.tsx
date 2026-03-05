"use client";
import { useState } from "react";
export type FAQItem = { q: string; a: string };

export default function Faq({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="card" style={{ padding: 18 }}>
      <div style={{ display: "grid", gap: 10 }}>
        {items.map((it, idx) => {
          const isOpen = open === idx;
          return (
            <div key={idx} className="lift" style={{ borderRadius: 16, border: "1px solid rgba(148,163,184,.16)", background: "rgba(255,255,255,.03)", overflow: "hidden" }}>
              <button onClick={() => setOpen(isOpen ? null : idx)} style={{ width: "100%", textAlign: "left", padding: "14px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, fontWeight: 800 }}>
                <span>{it.q}</span>
                <span style={{ opacity: 0.9, fontSize: 18 }}>{isOpen ? "–" : "+"}</span>
              </button>
              {isOpen && <div style={{ padding: "0 14px 14px 14px", color: "rgba(203,213,225,.86)", lineHeight: 1.7 }}>{it.a}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
