// const TESTIMONIALS = [
//   {
//     initials: "PR",
//     name: "Priya R.",
//     location: "South Kolkata",
//     rating: 5,
//     quote: "The AC technician was punctual, professional, and left no mess behind. Absolutely remarkable service.",
//   },
//   {
//     initials: "AM",
//     name: "Arjun M.",
//     location: "Salt Lake City",
//     rating: 5,
//     quote: "Fixed a persistent bathroom leak in 40 minutes. I had been struggling with it for weeks. Incredible.",
//   },
//   {
//     initials: "SG",
//     name: "Sunita G.",
//     location: "Ballygunge",
//     rating: 5,
//     quote: "Deep cleaning before Puja — the team was thorough, respectful of our home, and truly brilliant.",
//   },
//   {
//     initials: "RB",
//     name: "Rohit B.",
//     location: "Behala",
//     rating: 5,
//     quote: "Transparent pricing, no hidden charges. The electrician explained every step clearly. Will rebook.",
//   },
//   {
//     initials: "TK",
//     name: "Tanisha K.",
//     location: "New Town",
//     rating: 5,
//     quote: "Booked a sofa cleaning — it looks brand new now. The team was on time and very professional.",
//   },
// ]

// const avatarColors = ["#5C7A6A", "#7A5C6A", "#5C6A7A", "#7A7A5C", "#6A5C7A"]

// function Testimonials() {
//   return (
//     <section style={{
//       background: "#1A1A18",
//       padding: "56px 24px",
//       fontFamily: "'Outfit', sans-serif",
//       overflow: "hidden",
//     }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600&display=swap');

//         .t-scroll {
//           display: flex;
//           gap: 16px;
//           overflow-x: auto;
//           scrollbar-width: none;
//           padding-bottom: 4px;
//           cursor: grab;
//         }
//         .t-scroll::-webkit-scrollbar { display: none; }
//         .t-card {
//           min-width: 280px;
//           flex-shrink: 0;
//           background: #2E2E2C;
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 20px;
//           padding: 22px;
//           transition: border-color 0.2s, transform 0.2s;
//         }
//         .t-card:hover {
//           border-color: rgba(92,122,106,0.4);
//           transform: translateY(-2px);
//         }
//       `}</style>

//       <div style={{ maxWidth: 1152, margin: "0 auto" }}>

//         {/* Header */}
//         <div style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "flex-end",
//           marginBottom: 32,
//         }}>
//           <div>
//             <p style={{
//               fontSize: 10,
//               fontWeight: 600,
//               letterSpacing: "3px",
//               textTransform: "uppercase",
//               color: "#7A9B8A",
//               margin: "0 0 8px 0",
//             }}>
//               What people say
//             </p>
//             <h2 style={{
//               fontFamily: "'Cormorant Garamond', Georgia, serif",
//               fontSize: 34,
//               fontWeight: 500,
//               color: "#FFFFFF",
//               letterSpacing: "-0.3px",
//               lineHeight: 1.1,
//               margin: 0,
//             }}>
//               Loved by{" "}
//               <em style={{ fontStyle: "italic", color: "#7A9B8A" }}>
//                 thousands
//               </em>
//             </h2>
//           </div>
//           <div style={{
//             display: "flex",
//             alignItems: "center",
//             gap: 8,
//             background: "rgba(92,122,106,0.15)",
//             border: "1px solid rgba(92,122,106,0.3)",
//             borderRadius: 100,
//             padding: "8px 16px",
//           }}>
//             <span style={{ color: "#C9A84C", fontSize: 13 }}>★★★★★</span>
//             <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
//               4.9 average
//             </span>
//           </div>
//         </div>

//         {/* Scrollable cards */}
//         <div className="t-scroll">
//           {TESTIMONIALS.map((t, i) => (
//             <div key={i} className="t-card">

//               {/* Stars */}
//               <div style={{
//                 color: "#C9A84C",
//                 fontSize: 13,
//                 letterSpacing: 2,
//                 marginBottom: 14,
//               }}>
//                 {"★".repeat(t.rating)}
//               </div>

//               {/* Quote */}
//               <p style={{
//                 fontFamily: "'Cormorant Garamond', Georgia, serif",
//                 fontSize: 17,
//                 fontWeight: 400,
//                 fontStyle: "italic",
//                 color: "rgba(255,255,255,0.88)",
//                 lineHeight: 1.65,
//                 margin: "0 0 20px 0",
//               }}>
//                 "{t.quote}"
//               </p>

//               {/* Author */}
//               <div style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 10,
//                 paddingTop: 16,
//                 borderTop: "1px solid rgba(255,255,255,0.06)",
//               }}>
//                 <div style={{
//                   width: 36,
//                   height: 36,
//                   borderRadius: "50%",
//                   background: avatarColors[i % avatarColors.length],
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: 13,
//                   fontWeight: 600,
//                   color: "#FFFFFF",
//                   flexShrink: 0,
//                 }}>
//                   {t.initials}
//                 </div>
//                 <div>
//                   <div style={{
//                     fontSize: 13,
//                     fontWeight: 500,
//                     color: "rgba(255,255,255,0.75)",
//                   }}>
//                     {t.name}
//                   </div>
//                   <div style={{
//                     fontSize: 11,
//                     color: "rgba(255,255,255,0.35)",
//                     marginTop: 2,
//                   }}>
//                     {t.location}
//                   </div>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Testimonials








const TESTIMONIALS = [
  {
    initials: "PR",
    name: "Priya R.",
    location: "South Kolkata",
    rating: 5,
    quote: "The AC technician was punctual, professional, and left no mess behind. Absolutely remarkable service.",
  },
  {
    initials: "AM",
    name: "Arjun M.",
    location: "Salt Lake City",
    rating: 5,
    quote: "Fixed a persistent bathroom leak in 40 minutes. I had been struggling with it for weeks. Incredible.",
  },
  {
    initials: "SG",
    name: "Sunita G.",
    location: "Ballygunge",
    rating: 5,
    quote: "Deep cleaning before Puja — the team was thorough, respectful of our home, and truly brilliant.",
  },
  {
    initials: "RB",
    name: "Rohit B.",
    location: "Behala",
    rating: 5,
    quote: "Transparent pricing, no hidden charges. The electrician explained every step clearly. Will rebook.",
  },
  {
    initials: "TK",
    name: "Tanisha K.",
    location: "New Town",
    rating: 5,
    quote: "Booked a sofa cleaning — it looks brand new now. The team was on time and very professional.",
  },
]

const avatarColors = ["#5C7A6A", "#7A5C6A", "#5C6A7A", "#7A7A5C", "#6A5C7A"]

function Testimonials() {
  return (
    <section style={{
      background: "#1A1A18",
      padding: "56px 24px",
      fontFamily: "'Outfit', sans-serif",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        .t-scroll {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 4px;
          cursor: grab;
        }
        .t-scroll::-webkit-scrollbar { display: none; }

        .t-card {
          min-width: 280px;
          flex-shrink: 0;
          background: #2E2E2C;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 22px;
          transition: border-color 0.2s, transform 0.2s;
          display: flex;
          flex-direction: column;
        }
        .t-card:hover {
          border-color: rgba(92,122,106,0.4);
          transform: translateY(-2px);
        }
      `}</style>

      <div style={{ maxWidth: 1152, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 32,
        }}>
          <div>
            <p style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#7A9B8A",
              margin: "0 0 8px 0",
            }}>
              What people say
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 34,
              fontWeight: 500,
              color: "#FFFFFF",
              letterSpacing: "-0.3px",
              lineHeight: 1.1,
              margin: 0,
            }}>
              Loved by{" "}
              <em style={{ fontStyle: "italic", color: "#7A9B8A" }}>
                thousands
              </em>
            </h2>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(92,122,106,0.15)",
            border: "1px solid rgba(92,122,106,0.3)",
            borderRadius: 100,
            padding: "8px 16px",
          }}>
            <span style={{ color: "#C9A84C", fontSize: 13 }}>★★★★★</span>
            <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
              4.9 average
            </span>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div className="t-scroll">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="t-card">

              {/* Stars */}
              <div style={{
                color: "#C9A84C",
                fontSize: 13,
                letterSpacing: 2,
                marginBottom: 14,
              }}>
                {"★".repeat(t.rating)}
              </div>

              {/* Quote */}
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 17,
                fontWeight: 400,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.65,
                margin: "0 0 20px 0",
                flex: 1,
              }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                paddingTop: 16,
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}>
                {/* Avatar */}
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: avatarColors[i % avatarColors.length],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  flexShrink: 0,
                  lineHeight: 1,
                }}>
                  {t.initials}
                </div>

                {/* Name + Location */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 3,
                }}>
                  <div style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1,
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.35)",
                    lineHeight: 1,
                  }}>
                    {t.location}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials












