const LINKS = {
  Services: ["AC Repair", "Plumbing", "Electrical", "Deep Cleaning", "Pest Control", "Painting"],
  Company: ["About us", "How it works", "Careers", "Press", "Blog"],
  Support: ["Help centre", "Contact us", "Privacy policy", "Terms of service", "Refund policy"],
}

function Footer() {
  return (
    <footer style={{
      background: "#F8F5F0",
      borderTop: "1px solid #E8E0D5",
      padding: "56px 24px 32px",
      fontFamily: "'Outfit', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Outfit:wght@300;400;500;600&display=swap');
        .footer-link {
          font-size: 13px;
          font-weight: 300;
          color: #8A8A85;
          cursor: pointer;
          transition: color 0.15s;
          text-decoration: none;
          display: block;
          padding: 3px 0;
        }
        .footer-link:hover { color: #1A1A18; }
        .social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #E8E0D5;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          cursor: pointer;
          transition: border-color 0.15s, transform 0.15s;
          text-decoration: none;
        }
        .social-btn:hover {
          border-color: #5C7A6A;
          transform: translateY(-2px);
        }
      `}</style>

      <div style={{ maxWidth: 1152, margin: "0 auto" }}>

        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
          gap: 40,
          marginBottom: 48,
          paddingBottom: 48,
          borderBottom: "1px solid #E8E0D5",
        }}>

          {/* Brand col */}
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}>
              <div style={{
                width: 36, height: 36,
                background: "#1A1A18",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 17,
              }}>
                🔧
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 3, color: "#8A8A85", textTransform: "uppercase" }}>Mr.</div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 20, fontWeight: 500, color: "#1A1A18" }}>Mechanic</div>
              </div>
            </div>

            <p style={{
              fontSize: 13,
              fontWeight: 300,
              color: "#8A8A85",
              lineHeight: 1.7,
              maxWidth: 260,
              margin: "0 0 24px 0",
            }}>
              Premium home care services in Kolkata. Vetted professionals, transparent pricing, guaranteed satisfaction.
            </p>

            {/* Social */}
            <div style={{ display: "flex", gap: 8 }}>
              {["𝕏", "in", "f", "▶"].map((s, i) => (
                <a key={i} className="social-btn">{s}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <div style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#1A1A18",
                letterSpacing: "0.5px",
                marginBottom: 16,
                textTransform: "uppercase",
              }}>
                {heading}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {links.map(link => (
                  <a key={link} className="footer-link">{link}</a>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Bottom row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <div style={{ fontSize: 12, color: "#AEAEA8" }}>
            © 2025 Mr. Mechanic. All rights reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {["Privacy", "Terms", "Cookies"].map(item => (
              <a key={item} className="footer-link" style={{ fontSize: 12 }}>{item}</a>
            ))}
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            color: "#AEAEA8",
          }}>
            <span style={{ color: "#30D158", fontSize: 8 }}>●</span>
            All systems operational
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer