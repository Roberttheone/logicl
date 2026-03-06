"use client";

export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <div
      aria-hidden
      style={{
        width: size,
        height: size,
        borderRadius: 10,
        background: "linear-gradient(135deg, #60a5fa, #34d399)",
        boxShadow: "0 10px 30px rgba(0,0,0,.25)",
      }}
    />
  );
}
