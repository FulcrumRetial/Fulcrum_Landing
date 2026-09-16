export default function Header() {
  const hash = (id) => `/#${id}`;

  // Nav links: on-page anchors in section order (Business → How it works →
  // Features → Customers), then the standalone routes, then FAQ.
  const links = [
    { href: hash("solution"), label: "Business" },
    { href: hash("how-it-works"), label: "How it works" },
    { href: hash("features"), label: "Features" },
    { href: hash("customers"), label: "Customers" },
    { href: "/pricing", label: "Pricing" },
    { href: "/team", label: "Team" },
    { href: hash("faq"), label: "FAQ" },
  ];

  return (
    <header className="site-header" id="siteHeader">
      <div className="nav">
        <a href="/" className="brand" aria-label="Fulcrum home">
          <img className="brand-mark" src="/assets/logo-mark.svg" alt="" width="26" height="27" />
          Fulcrum<span className="dot">.</span>
        </a>
        <nav className="nav-links" id="navLinks" aria-label="Primary">
          {links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href={hash("waitlist")} className="btn btn--primary btn--md nav-menu-cta">
            Join the waitlist{" "}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </nav>
        <div className="nav-actions">
          <a href={hash("waitlist")} className="btn btn--primary btn--md">
            Join the waitlist{" "}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <button className="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
