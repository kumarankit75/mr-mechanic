const STEPS = [
  {
    num: "01",
    icon: "📲",
    title: "Choose & Book",
    desc: "Pick your service and a time that suits you. Takes under 2 minutes from your phone or desktop.",
  },
  {
    num: "02",
    icon: "🧰",
    title: "Expert Arrives",
    desc: "A vetted, insured professional arrives at your door with all necessary tools and equipment.",
  },
  {
    num: "03",
    icon: "💚",
    title: "Pay & Review",
    desc: "Pay only when you're fully satisfied. Leave a review to help others in your community.",
  },
]

function HowItWorks() {
  return (
    <section style={{
      background: "#F0EBE3",
      padding: "56px 24px",
      fontFamily: "'Outfit', sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Outfit:wght@300;400;500;600&display=swap');

        .hiw-card {
          background: #FFFFFF;
          border: 1px solid #E8E0D5;
          border-radius: 20px;
          padding: 28px 24px 24px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .hiw-card:hover {
          border-color: #7A9B8A;
          box-shadow: 0 8px 28px rgba(92,122,106,0.13);
          transform: translateY(-3px);
        }
        .hiw-connector {
          position: absolute;
          top: 48px;
          right: -20px;
          width: 40px;
          height: 1px;
          background: #E8E0D5;
          z-index: 10;
        }
      `}</style>

      <div style={{ maxWidth: 1152, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 36, textAlign: "center" }}>
          <p style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#5C7A6A",
            margin: "0 0 8px 0"
          }}>
            Simple process
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 34,
            fontWeight: 500,
            color: "#1A1A18",
            letterSpacing: "-0.3px",
            lineHeight: 1.1,
            margin: 0,
          }}>
            Three steps to{" "}
            <em style={{ fontStyle: "italic", color: "#5C7A6A" }}>done</em>
          </h2>
        </div>

        {/* Steps Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          position: "relative",
        }}>
          {STEPS.map((step, i) => (
            <div key={step.num} style={{ position: "relative" }}>
              <div className="hiw-card">

                {/* Big background number */}
                <div style={{
                  position: "absolute",
                  top: 12,
                  right: 18,
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 72,
                  fontWeight: 500,
                  color: "#F0EBE3",
                  lineHeight: 1,
                  userSelect: "none",
                }}>
                  {step.num}
                </div>

                {/* Step number pill */}
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#EAF5EE",
                  border: "1px solid #C8DDD2",
                  borderRadius: 100,
                  padding: "4px 12px",
                  marginBottom: 20,
                }}>
                  <div style={{
                    width: 6, height: 6,
                    borderRadius: "50%",
                    background: "#5C7A6A",
                  }} />
                  <span style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#3D5549",
                    letterSpacing: "1px",
                  }}>
                    Step {step.num}
                  </span>
                </div>

                {/* Icon */}
                <div style={{
                  fontSize: 32,
                  marginBottom: 16,
                  display: "block",
                }}>
                  {step.icon}
                </div>

                {/* Title */}
                <div style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#1A1A18",
                  marginBottom: 10,
                  fontFamily: "'Outfit', sans-serif",
                }}>
                  {step.title}
                </div>

                {/* Desc */}
                <div style={{
                  fontSize: 13,
                  fontWeight: 300,
                  color: "#8A8A85",
                  lineHeight: 1.7,
                }}>
                  {step.desc}
                </div>

              </div>

              {/* Connector line between cards */}
              {i < STEPS.length - 1 && (
                <div style={{
                  position: "absolute",
                  top: 52,
                  right: -9,
                  width: 18,
                  height: 1,
                  background: "#C8DDD2",
                  zIndex: 10,
                }} />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowItWorks