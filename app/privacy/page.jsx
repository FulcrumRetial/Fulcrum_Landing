import "../styles/legal.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy - Fulcrum",
  description:
    "How Fulcrum Retail Solutions collects, uses, shares, and protects your data under the DPDP Act 2023 and GDPR.",
};

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <section className="legal-hero">
          <div className="container">
            <div className="legal-eyebrow">
              <span className="dot" aria-hidden="true"></span> Legal
            </div>
            <h1>
              Privacy <em>Policy</em>
            </h1>
            <div className="legal-meta">
              <span>
                <span className="legal-meta-key">Effective date:</span> 16th September 2026
              </span>
              <span>
                <span className="legal-meta-key">Applies to:</span> Fulcrum Retail app
              </span>
              <span>
                <span className="legal-meta-key">Brand:</span> FULCRUM VRM&trade; &mdash; Visibility,
                Relationship &amp; Marketing
              </span>
            </div>
            <p className="lead">
              This policy explains how we collect, use, and protect your information when you use the
              Fulcrum Retail App, our VRM (Visibility, Relationship &amp; Marketing) platform for retail
              business owners.
            </p>
            <div className="legal-switch" role="group" aria-label="Legal documents">
              <a href="/terms">Terms &amp; Conditions</a>
              <a href="/privacy" aria-current="page">
                Privacy Policy
              </a>
            </div>
          </div>
        </section>

        <section className="legal-body">
          <div className="container">
            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">1.</span> Introduction
              </h2>
              <p>
                Fulcrum Retail Solutions (&ldquo;Fulcrum&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
                operates the Fulcrum Retail App, a VRM (Visibility, Relationship &amp; Marketing)
                platform for retail business owners. This policy explains how we collect, use, and
                protect your information.
              </p>
              <div className="legal-note">
                <div className="label">Contact</div>
                <p>
                  <a href="mailto:fulcrumretailsolutions@gmail.com">fulcrumretailsolutions@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">2.</span> Information we collect
              </h2>
              <ul className="legal-list">
                <li>
                  <b>Information you provide directly:</b> Name, mobile number, date of birth, pin code,
                  and gender.
                </li>
                <li>
                  <b>Information collected automatically:</b> Device information, IP address, browser
                  type, approximate location (based on pincode / IP), purchase history, transaction
                  points earned or redeemed, and store interaction data.
                </li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">3.</span> Purpose of collection &mdash; why we
                are a VRM
              </h2>
              <ul className="legal-list">
                <li>
                  <b>Visibility:</b> To provide business owners with anonymized insights on customer
                  trends, purchase patterns, and store performance.
                </li>
                <li>
                  <b>Relationship:</b> To manage your account, loyalty points, and customer service.
                </li>
                <li>
                  <b>Marketing:</b> To deliver relevant in-app offers and rewards, and to conduct market
                  research and surveys.
                </li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">4.</span> Legal basis (DPDP Act 2023 &amp;
                GDPR)
              </h2>
              <p>We process your data based on:</p>
              <ul className="legal-list">
                <li>Your explicit consent at the time of registration.</li>
                <li>Performance of a contract (loyalty and rewards).</li>
                <li>Compliance with legal obligations.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">5.</span> Data sharing
              </h2>
              <p>
                We do <b>not</b> sell your Personally Identifiable Information. We do <b>not</b> share
                your name, mobile number, DOB, pincode, or gender with our Business Partners or
                affiliated businesses. We may use anonymized and aggregated segments (e.g.,
                &ldquo;customers who purchase monthly in Hoskote&rdquo;) to enable relevant promotions.
                All offers from Business Partners are delivered only by Fulcrum inside the Fulcrum Retail
                App, without disclosing your personal data to the partner. Business Partners never
                receive your personal data directly from us.
              </p>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">6.</span> Data retention
              </h2>
              <p>
                We retain your data for 10&nbsp;years from your last transaction or interaction, or until
                you request deletion of your account, whichever is earlier. Anonymized analytics data may
                be retained for longer for business insights.
              </p>
            </div>

            <div className="legal-section" id="your-rights">
              <h2>
                <span className="step" aria-hidden="true">7.</span> Your rights
              </h2>
              <p>You have the right to:</p>
              <ul className="legal-list">
                <li>Access your data.</li>
                <li>Correct or update your data.</li>
                <li>Withdraw consent.</li>
                <li>Request deletion of your account and data.</li>
                <li>Opt out of promotional communications.</li>
              </ul>
              <p>To exercise these rights, write to us at the contact email above.</p>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">8.</span> Data security
              </h2>
              <p>
                We implement reasonable security practices including encryption in transit, access
                controls, and role-based access to protect your data.
              </p>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">9.</span> Grievance Officer (required under
                DPDP Act)
              </h2>
              <div className="legal-note">
                <div className="label">Grievance Officer</div>
                <p>
                  Ravi Kumar
                  <br />
                  <a href="mailto:admin@fulcrumretail.in">admin@fulcrumretail.in</a>
                  <br />
                  26, 3rd Cross, Nanjappa Layout, Kalkere, Bangalore &ndash; 560&nbsp;043.
                  <br />
                  Response time: 30&nbsp;days.
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2>
                <span className="step" aria-hidden="true">10.</span> Changes to policy
              </h2>
              <p>We will notify you of material changes via the App.</p>
            </div>

            <a className="legal-back" href="/">
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
