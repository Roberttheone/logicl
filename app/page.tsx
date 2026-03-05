import Section from "./components/Section";
import Faq from "./components/Faq";

const pricing = [
  { name: "Starter", price: "$0", sub: "For trying Logicl", bullets: ["1 workspace","3 templates","Up to 200 runs / month","Sources + confidence panel","Community support"], cta: "Start free", highlight: false },
  { name: "Pro", price: "$39", sub: "Per user / month", bullets: ["Unlimited templates","10k runs / month","Approval steps (human-in-the-loop)","Webhooks + Zapier/Make starter","Export to PDF/Docx (roadmap)"], cta: "Request access", highlight: true },
  { name: "Business", price: "$399", sub: "Per workspace / month", bullets: ["Role-based access (Admin/Editor/Viewer)","Audit log + run replay","Integrations: Google/M365, Slack/Teams (starter)","Policy rules & redaction","Priority support"], cta: "Talk to sales", highlight: false },
];

const faqs = [
  { q: "What makes Logicl different from a generic AI assistant?", a: "Logicl is built for operational work: every output includes a Why + Sources + Confidence panel, plus policy checks and an audit trail. It’s designed for teams who need trust, not just text." },
  { q: "Can I require approvals before actions happen?", a: "Yes. The Pro/Business workflow model supports human-in-the-loop approvals: draft → review → approve → run action." },
  { q: "What integrations are supported?", a: "Common integrations include Google Workspace, Microsoft 365, Slack/Teams, Notion/Confluence, plus webhooks. Start with email/webhook inputs and expand as needed." },
  { q: "Is this suitable for regulated industries?", a: "That’s a core use-case: explainability, audit logs, policy rules, and data retention controls help you meet internal governance and external compliance expectations." },
  { q: "How do I deploy this on Vercel?", a: "Import the repo into Vercel. Framework: Next.js. Build command: npm run build. Output: default. No root-directory tweaks needed." },
];

export default function Home() {
  return (
    <div style={{ display: "grid", gap: 18 }}>
      <section className="card" style={{ padding: 18 }}>
        <div className="card" style={{ padding: 24, borderRadius: 18, background: "linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.62)), url(https://images.metmuseum.org/CRDImages/an/original/DP120929.jpg) center/cover no-repeat" }}>
          <span className="pill">Explainable AI • Workflows • Audit trail</span>
          <h1 className="h1" style={{ marginTop: 10 }}>Turn messy inputs into decisions you can trust.</h1>
          <p className="p" style={{ maxWidth: 780, marginTop: 10 }}>
            Logicl Workflows helps teams automate real work—emails, PDFs, tickets, spreadsheets—while keeping the logic visible.
            Every output shows <b>why</b> it was produced, <b>which sources</b> were used, and <b>how confident</b> the system is.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="#cta">Request a demo</a>
            <a className="btn" href="#pricing">See pricing</a>
            <a className="btn" href="#features">Explore features</a>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            <span className="pill">Sources & citations</span><span className="pill">Policy rules</span><span className="pill">Run replay</span><span className="pill">Human approvals</span>
          </div>
        </div>

        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: 14 }}>
          {[{k:"Explainable by default",v:"Why + Sources + Confidence on every output."},{k:"Workflow-native",v:"Inputs → steps → approvals → actions."},{k:"Built for governance",v:"Audit log, retention, and policy controls."},{k:"Fast to adopt",v:"Templates that match real operations."}].map(x=>(
            <div key={x.k} className="card lift" style={{ padding: 14 }}>
              <div style={{ fontWeight: 900 }}>{x.k}</div>
              <div className="p" style={{ marginTop: 6 }}>{x.v}</div>
            </div>
          ))}
        </div>
      </section>

      <div id="how" />
      <Section eyebrow="How it works" title="A simple loop: ingest → decide → act (with receipts)." lead="Logicl is designed for teams who need automation plus accountability. Build workflows from templates, connect inputs, add policy checks, require approvals, and push outputs into your tools.">
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {[{t:"1) Ingest",d:"Pull from email, uploads, webhooks, tickets, or spreadsheets. Normalize data and extract the fields you care about."},{t:"2) Decide",d:"Use templates + policy rules (redactions, constraints, required sources). Generate outcomes with confidence scoring."},{t:"3) Act",d:"Create drafts, route for approval, then send—update a CRM, create a ticket, publish an SOP, or trigger a webhook."}].map(x=>(
            <div key={x.t} className="card lift" style={{ padding: 18 }}>
              <div style={{ fontWeight: 900, fontSize: 18 }}>{x.t}</div>
              <p className="p" style={{ marginTop: 8 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <div id="features" />
      <Section eyebrow="Features" title="Everything you need to ship trustworthy automation." lead="These are the features buyers expect from enterprise-grade AI workflows—without losing speed.">
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {[
            { t: "Why + Sources + Confidence", d: "Every result includes an explain panel and citations." },
            { t: "Policy rules & redaction", d: "Block sensitive outputs and enforce safe patterns." },
            { t: "Human-in-the-loop approvals", d: "Draft → review → approve → send, with SLAs." },
            { t: "Audit log + run replay", d: "See who ran what, when, and why it decided." },
            { t: "Templates library", d: "Meeting notes, invoice extraction, SOP builder, lead qualification." },
            { t: "Integrations (starter)", d: "Webhooks now; Google/M365 + Slack/Teams next." },
          ].map((x) => (
            <div key={x.t} className="card lift" style={{ padding: 18 }}>
              <div style={{ fontWeight: 900 }}>{x.t}</div>
              <p className="p" style={{ marginTop: 8 }}>{x.d}</p>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: 18, marginTop: 14 }}>
          <div style={{ display: "grid", gap: 8 }}>
            <div style={{ fontWeight: 900 }}>Example workflow: “Inbound email → compliant reply draft”</div>
            <p className="p">
              Logicl reads an inbound email, extracts intent and required details, checks policy rules (no promises, no prohibited claims),
              drafts a reply, and attaches a citation summary showing which internal docs were used.
            </p>
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginTop: 8 }}>
              <div className="card" style={{ padding: 14 }}>
                <div style={{ fontWeight: 800 }}>Inputs</div>
                <ul className="p" style={{ marginTop: 6, paddingLeft: 18 }}>
                  <li>Email thread</li><li>Product policy doc</li><li>Pricing sheet</li>
                </ul>
              </div>
              <div className="card" style={{ padding: 14 }}>
                <div style={{ fontWeight: 800 }}>Outputs</div>
                <ul className="p" style={{ marginTop: 6, paddingLeft: 18 }}>
                  <li>Draft reply + tone controls</li><li>Why/Sources/Confidence panel</li><li>Audit record + approver</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Use cases" title="Built for operations, support, compliance, and revenue teams." lead="Start with one workflow, prove ROI, then expand to templates across the business.">
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          [
            { t: "Customer Support", d: "Draft answers with citations, reduce handle time, keep consistency." },
            { t: "Sales Ops", d: "Qualify leads, write follow-ups, create CRM notes automatically." },
            { t: "Finance Ops", d: "Extract invoices, reconcile statements, flag anomalies with explanations." },
            { t: "Compliance & Policy", d: "Generate SOPs, run policy checks, log approvals and versions." },
            { t: "IT & Helpdesk", d: "Triage tickets, suggest solutions, draft responses with sources." },
            { t: "Procurement", d: "Compare quotes, summarize differences, produce decision memos." }
          ].map(x=>(
            <div key={x.t} className="card lift" style={{ padding: 18 }}>
              <div style={{ fontWeight: 900 }}>{x.t}</div>
              <p className="p" style={{ marginTop: 8 }}>{x.d}</p>
            </div>
          ))
        </div>
      </Section>

      <div id="pricing" />
      <Section eyebrow="Pricing" title="Start free. Upgrade when you need governance." lead="Pricing is designed to be an easy yes for teams—then scales with volume, controls, and integrations.">
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {pricing.map((p) => (
            <div key={p.name} className="card lift" style={{ padding: 18, border: p.highlight ? "1px solid rgba(96,165,250,.55)" : "1px solid rgba(148,163,184,.16)", background: p.highlight ? "linear-gradient(180deg, rgba(96,165,250,.16), rgba(255,255,255,.01))" : "linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.01))" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 18 }}>{p.name}</div>
                  <div className="kicker" style={{ marginTop: 4 }}>{p.sub}</div>
                </div>
                {p.highlight && <span className="pill">Most popular</span>}
              </div>
              <div style={{ marginTop: 12, display: "flex", alignItems: "baseline", gap: 8 }}>
                <div style={{ fontSize: 34, fontWeight: 950 }}>{p.price}</div>
                {p.price !== "$0" && <div className="kicker">USD</div>}
              </div>
              <ul className="p" style={{ marginTop: 12, paddingLeft: 18 }}>
                {p.bullets.map((b) => <li key={b} style={{ marginTop: 6 }}>{b}</li>)}
              </ul>
              <div style={{ marginTop: 14 }}>
                <a className={p.highlight ? "btn btn-primary" : "btn"} href="#cta">{p.cta}</a>
              </div>
            </div>
          ))}
        </div>
        <div className="card" style={{ padding: 16, marginTop: 14 }}>
          <p className="p">Need SSO/SAML, custom retention, or dedicated environments? <b>Enterprise</b> is available—talk to sales.</p>
        </div>
      </Section>

      <div id="faq" />
      <Section eyebrow="FAQ" title="Common questions" lead="If you want, we can tailor a workflow for your team in a 20‑minute call.">
        <Faq items={faqs} />
      </Section>

      <div id="cta" />
      <Section eyebrow="Request a demo" title="See Logicl on your real workflows." lead="Tell us what you want to automate. We’ll map the workflow, show the explain panel, and outline the controls you need.">
        <div className="card" style={{ padding: 18 }}>
          <form action="https://formspree.io/f/your-id" method="POST" style={{ display: "grid", gap: 10, maxWidth: 740 }}>
            <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              <label style={{ display: "grid", gap: 6 }}>
                <span className="kicker">Name</span>
                <input name="name" required className="card" style={{ padding: 12, borderRadius: 14, background: "rgba(255,255,255,.02)" }} />
              </label>
              <label style={{ display: "grid", gap: 6 }}>
                <span className="kicker">Work email</span>
                <input name="email" type="email" required className="card" style={{ padding: 12, borderRadius: 14, background: "rgba(255,255,255,.02)" }} />
              </label>
            </div>
            <label style={{ display: "grid", gap: 6 }}>
              <span className="kicker">What do you want to automate?</span>
              <textarea name="message" required className="card" style={{ padding: 12, borderRadius: 14, minHeight: 120, background: "rgba(255,255,255,.02)" }} placeholder="e.g., inbound email triage → compliant draft reply → approval → send" />
            </label>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
              <button className="btn btn-primary" type="submit">Send request</button>
              <a className="btn" href="mailto:hello@logicl.com.au?subject=Logicl%20demo%20request">Email instead</a>
            </div>
            <p style={{ marginTop: 6, fontSize: 12, color: "rgba(203,213,225,.65)", lineHeight: 1.6 }}>
              Replace the Formspree endpoint with your own (or wire to Postmark/SendGrid + a server route).
            </p>
          </form>
        </div>
      </Section>
    </div>
  );
}
