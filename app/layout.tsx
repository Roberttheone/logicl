import type { Metadata } from "next";
import "./globals.css";
import Logo from "./components/Logo";

export const metadata: Metadata = {
  title: "Logicl Workflows — Explainable AI automation",
  description: "Turn messy inputs into decisions you can trust. Build explainable AI workflows with sources, policy checks, and an audit trail.",
  openGraph: {
    title: "Logicl Workflows",
    description: "Explainable AI workflows with sources, policy checks, and an audit trail — built for teams that need trust.",
    url: "https://logicl.com.au",
    images: [{ url: "https://images.metmuseum.org/CRDImages/an/original/DP120929.jpg", width: 1200, height: 630, alt: "Logicl Workflows" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <Logo />
              <div style={{ display: "grid", lineHeight: 1.05 }}>
                <span style={{ fontWeight: 900, letterSpacing: "-.01em" }}>Logicl</span>
                <span style={{ fontSize: 12, color: "rgba(203,213,225,.80)" }}>Workflows</span>
              </div>
            </a>

            <nav style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#how" className="btn" style={{ padding: ".55rem .78rem", borderRadius: 12 }}>How it works</a>
              <a href="#features" className="btn" style={{ padding: ".55rem .78rem", borderRadius: 12 }}>Features</a>
              <a href="/product" className="btn" style={{ padding: ".55rem .78rem", borderRadius: 12 }}>Product</a>
              <a href="/templates" className="btn" style={{ padding: ".55rem .78rem", borderRadius: 12 }}>Templates</a>
              <a href="#pricing" className="btn" style={{ padding: ".55rem .78rem", borderRadius: 12 }}>Pricing</a>
              <a href="#faq" className="btn" style={{ padding: ".55rem .78rem", borderRadius: 12 }}>FAQ</a>
              <a href="#cta" className="btn btn-primary">Request demo</a>
            </nav>
          </div>
        </header>

        <main className="container" style={{ paddingTop: 18, paddingBottom: 28 }}>{children}</main>

        <footer className="container" style={{ borderTop: "1px solid rgba(148,163,184,.16)", paddingTop: 18, paddingBottom: 26, color: "rgba(203,213,225,.80)" }}>
          <div style={{ display: "grid", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <Logo size={22} />
              <b style={{ color: "rgba(229,231,235,.95)" }}>Logicl</b>
              <span>© {new Date().getFullYear()}</span>
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/privacy" className="btn" style={{ padding: ".45rem .7rem", borderRadius: 12 }}>Privacy</a>
              <a href="/terms" className="btn" style={{ padding: ".45rem .7rem", borderRadius: 12 }}>Terms</a>
              <a href="mailto:hello@logicl.com.au" className="btn" style={{ padding: ".45rem .7rem", borderRadius: 12 }}>Contact</a>
            </div>
            <p style={{ marginTop: 6, fontSize: 12, color: "rgba(203,213,225,.65)", lineHeight: 1.6 }}>
              This is a marketing starter. Swap the demo form endpoint and add your app when ready.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
