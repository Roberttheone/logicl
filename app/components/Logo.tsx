"use client";

export default function Logo() {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <div
        aria-hidden
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          background: "linear-gradient(135deg, #111, #666)",
          boxShadow: "0 10px 30px rgba(0,0,0,.25)",
        }}
      />
      <span style={{ fontWeight: 900, letterSpacing: -0.5 }}>Logicl</span>
    </div>
  );
}
