// // // function Navbar() {
// // //   return (
// // //     <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
// // //       <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
// // //         {/* Logo */}
// // //         <div className="flex items-center gap-3">
// // //           <div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center text-lg">
// // //             🔧
// // //           </div>
// // //           <div className="flex flex-col leading-none">
// // //             <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">Mr.</span>
// // //             <span className="text-lg font-bold text-gray-900">Mechanic</span>
// // //           </div>
// // //         </div>

// // //         {/* Nav Links */}
// // //         <div className="hidden md:flex items-center gap-6">
// // //           <span className="text-sm text-gray-400 hover:text-gray-800 cursor-pointer transition">Services</span>
// // //           <span className="text-sm text-gray-400 hover:text-gray-800 cursor-pointer transition">How it works</span>
// // //           <span className="text-sm text-gray-400 hover:text-gray-800 cursor-pointer transition">Pricing</span>
// // //         </div>

// // //         {/* Buttons */}
// // //         <div className="flex items-center gap-3">
// // //           <button className="text-sm font-medium border border-gray-200 rounded-full px-4 py-2 hover:border-gray-800 transition">
// // //             Sign in
// // //           </button>
// // //           <button className="text-sm font-semibold bg-gray-900 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition">
// // //             Book now
// // //           </button>
// // //         </div>

// // //       </div>
// // //     </nav>
// // //   )
// // // }

// // // export default Navbar













// // function Navbar({ cartCount }) {
// //   return (
// //     <nav style={{
// //       background: "#FFFFFF",
// //       borderBottom: "1px solid #E8E0D5",
// //       position: "sticky",
// //       top: 0,
// //       zIndex: 300,
// //       fontFamily: "'Outfit', sans-serif",
// //     }}>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Outfit:wght@300;400;500;600&display=swap');
// //         .nav-link {
// //           font-size: 13px;
// //           font-weight: 400;
// //           color: #8A8A85;
// //           cursor: pointer;
// //           transition: color 0.15s;
// //           text-decoration: none;
// //         }
// //         .nav-link:hover { color: #1A1A18; }
// //         .btn-ghost-nav {
// //           font-family: 'Outfit', sans-serif;
// //           font-size: 13px;
// //           font-weight: 500;
// //           background: transparent;
// //           border: 1px solid #E8E0D5;
// //           color: #1A1A18;
// //           border-radius: 100px;
// //           padding: 8px 18px;
// //           cursor: pointer;
// //           transition: border-color 0.15s;
// //         }
// //         .btn-ghost-nav:hover { border-color: #1A1A18; }
// //         .btn-primary-nav {
// //           font-family: 'Outfit', sans-serif;
// //           font-size: 13px;
// //           font-weight: 600;
// //           background: #1A1A18;
// //           border: none;
// //           color: #FFFFFF;
// //           border-radius: 100px;
// //           padding: 9px 20px;
// //           cursor: pointer;
// //           transition: background 0.15s;
// //         }
// //         .btn-primary-nav:hover { background: #2E2E2C; }
// //         .cart-btn {
// //           position: relative;
// //           background: transparent;
// //           border: 1px solid #E8E0D5;
// //           border-radius: 100px;
// //           padding: 8px 18px;
// //           font-family: 'Outfit', sans-serif;
// //           font-size: 13px;
// //           font-weight: 500;
// //           color: #1A1A18;
// //           cursor: pointer;
// //           transition: border-color 0.15s;
// //           display: flex;
// //           align-items: center;
// //           gap: 8px;
// //         }
// //         .cart-btn:hover { border-color: #5C7A6A; }
// //         .cart-badge {
// //           background: #5C7A6A;
// //           color: white;
// //           font-size: 10px;
// //           font-weight: 700;
// //           width: 18px;
// //           height: 18px;
// //           border-radius: 50%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //         }
// //       `}</style>

// //       <div style={{
// //         maxWidth: 1152,
// //         margin: "0 auto",
// //         padding: "0 24px",
// //         height: 64,
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "space-between",
// //       }}>

// //         {/* Logo */}
// //         <a href="#" style={{
// //           display: "flex",
// //           alignItems: "center",
// //           gap: 12,
// //           textDecoration: "none",
// //         }}>
// //           <div style={{
// //             width: 36, height: 36,
// //             background: "#1A1A18",
// //             borderRadius: 8,
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             fontSize: 17,
// //           }}>
// //             🔧
// //           </div>
// //           <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
// //             <span style={{
// //               fontSize: 10,
// //               fontWeight: 600,
// //               letterSpacing: 3,
// //               textTransform: "uppercase",
// //               color: "#8A8A85",
// //             }}>Mr.</span>
// //             <span style={{
// //               fontFamily: "'Cormorant Garamond', Georgia, serif",
// //               fontSize: 20,
// //               fontWeight: 500,
// //               color: "#1A1A18",
// //             }}>Mechanic</span>
// //           </div>
// //         </a>

// //         {/* Nav Links */}
// //         <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
// //           <a className="nav-link">Services</a>
// //           <a className="nav-link">How it works</a>
// //           <a className="nav-link">Pricing</a>
// //           <a className="nav-link">About</a>
// //         </div>

// //         {/* Right side */}
// //         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// //           <button className="btn-ghost-nav">Sign in</button>

// //           {/* Cart button — only show when items in cart */}
// //           {cartCount > 0 && (
// //             <button className="cart-btn">
// //               🛒
// //               <span className="cart-badge">{cartCount}</span>
// //             </button>
// //           )}

// //           <button className="btn-primary-nav">Book now</button>
// //         </div>

// //       </div>
// //     </nav>
// //   )
// // }

// // export default Navbar

















// import { useState } from 'react'
// import { useAuth } from '../context/AuthContext'
// import AuthModal from './AuthModal'

// function Navbar({ cartCount }) {
//   const [showAuth, setShowAuth] = useState(false)
//   const { user, logout } = useAuth()

//   return (
//     <>
//       <nav style={{
//         background: "#FFFFFF",
//         borderBottom: "1px solid #E8E0D5",
//         position: "sticky",
//         top: 0,
//         zIndex: 300,
//         fontFamily: "'Outfit', sans-serif",
//       }}>
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Outfit:wght@300;400;500;600&display=swap');
//           .nav-link {
//             font-size: 13px; font-weight: 400;
//             color: #8A8A85; cursor: pointer;
//             transition: color 0.15s; text-decoration: none;
//           }
//           .nav-link:hover { color: #1A1A18; }
//           .btn-ghost-nav {
//             font-family: 'Outfit', sans-serif;
//             font-size: 13px; font-weight: 500;
//             background: transparent;
//             border: 1px solid #E8E0D5;
//             color: #1A1A18; border-radius: 100px;
//             padding: 8px 18px; cursor: pointer;
//             transition: border-color 0.15s;
//           }
//           .btn-ghost-nav:hover { border-color: #1A1A18; }
//           .btn-primary-nav {
//             font-family: 'Outfit', sans-serif;
//             font-size: 13px; font-weight: 600;
//             background: #1A1A18; border: none;
//             color: #FFFFFF; border-radius: 100px;
//             padding: 9px 20px; cursor: pointer;
//             transition: background 0.15s;
//           }
//           .btn-primary-nav:hover { background: #3D5549; }
//           .cart-btn {
//             position: relative; background: transparent;
//             border: 1px solid #E8E0D5; border-radius: 100px;
//             padding: 8px 18px;
//             font-family: 'Outfit', sans-serif;
//             font-size: 13px; font-weight: 500;
//             color: #1A1A18; cursor: pointer;
//             transition: border-color 0.15s;
//             display: flex; align-items: center; gap: 8px;
//           }
//           .cart-btn:hover { border-color: #5C7A6A; }
//           .cart-badge {
//             background: #5C7A6A; color: white;
//             font-size: 10px; font-weight: 700;
//             width: 18px; height: 18px; border-radius: 50%;
//             display: flex; align-items: center; justify-content: center;
//           }
//           .user-chip {
//             display: flex; align-items: center; gap: 8px;
//             background: #F8F5F0; border: 1px solid #E8E0D5;
//             border-radius: 100px; padding: 6px 14px 6px 6px;
//           }
//           .user-avatar {
//             width: 28px; height: 28px; border-radius: 50%;
//             background: #5C7A6A; color: white;
//             display: flex; align-items: center; justify-content: center;
//             font-size: 12px; font-weight: 600;
//           }
//           .btn-logout {
//             font-family: 'Outfit', sans-serif;
//             font-size: 12px; font-weight: 500;
//             background: transparent; border: none;
//             color: #8A8A85; cursor: pointer;
//             padding: 0; transition: color 0.15s;
//           }
//           .btn-logout:hover { color: #C0392B; }
//         `}</style>

//         <div style={{
//           maxWidth: 1152, margin: "0 auto",
//           padding: "0 24px", height: 64,
//           display: "flex", alignItems: "center",
//           justifyContent: "space-between",
//         }}>

//           {/* Logo */}
//           <a href="#" style={{
//             display: "flex", alignItems: "center",
//             gap: 12, textDecoration: "none",
//           }}>
//             <div style={{
//               width: 36, height: 36, background: "#1A1A18",
//               borderRadius: 8, display: "flex",
//               alignItems: "center", justifyContent: "center", fontSize: 17,
//             }}>🔧</div>
//             <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
//               <span style={{
//                 fontSize: 10, fontWeight: 600,
//                 letterSpacing: 3, textTransform: "uppercase", color: "#8A8A85",
//               }}>Mr.</span>
//               <span style={{
//                 fontFamily: "'Cormorant Garamond', Georgia, serif",
//                 fontSize: 20, fontWeight: 500, color: "#1A1A18",
//               }}>Mechanic</span>
//             </div>
//           </a>

//           {/* Nav Links */}
//           <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
//             <a className="nav-link">Services</a>
//             <a className="nav-link">How it works</a>
//             <a className="nav-link">Pricing</a>
//             <a className="nav-link">About</a>
//           </div>

//           {/* Right side */}
//           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>

//             {/* Cart */}
//             {cartCount > 0 && (
//               <button className="cart-btn">
//                 🛒
//                 <span className="cart-badge">{cartCount}</span>
//               </button>
//             )}

//             {user ? (
//               /* Logged in state */
//               <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                 <div className="user-chip">
//                   <div className="user-avatar">
//                     {user.name.charAt(0).toUpperCase()}
//                   </div>
//                   <span style={{
//                     fontSize: 13, fontWeight: 500, color: "#1A1A18",
//                   }}>
//                     {user.name.split(' ')[0]}
//                   </span>
//                 </div>
//                 <button className="btn-logout" onClick={logout}>
//                   Sign out
//                 </button>
//               </div>
//             ) : (
//               /* Logged out state */
//               <>
//                 <button
//                   className="btn-ghost-nav"
//                   onClick={() => setShowAuth(true)}
//                 >
//                   Sign in
//                 </button>
//                 <button
//                   className="btn-primary-nav"
//                   onClick={() => setShowAuth(true)}
//                 >
//                   Book now
//                 </button>
//               </>
//             )}

//           </div>
//         </div>
//       </nav>

//       {/* Auth Modal */}
//       {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
//     </>
//   )
// }

// export default Navbar









import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import AuthModal from './AuthModal'

function Navbar({ cartCount }) {
  const [showAuth, setShowAuth] = useState(false)
  const { user, logout } = useAuth()

  return (
    <>
      <nav style={{
        background: "#FFFFFF",
        borderBottom: "1px solid #E8E0D5",
        position: "sticky",
        top: 0,
        zIndex: 300,
        fontFamily: "'Outfit', sans-serif",
      }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Outfit:wght@300;400;500;600&display=swap');
          .nav-link {
            font-size: 13px; font-weight: 400;
            color: #8A8A85; cursor: pointer;
            transition: color 0.15s; text-decoration: none;
          }
          .nav-link:hover { color: #1A1A18; }
          .btn-ghost-nav {
            font-family: 'Outfit', sans-serif;
            font-size: 13px; font-weight: 500;
            background: transparent;
            border: 1px solid #E8E0D5;
            color: #1A1A18; border-radius: 100px;
            padding: 8px 18px; cursor: pointer;
            transition: border-color 0.15s;
          }
          .btn-ghost-nav:hover { border-color: #1A1A18; }
          .btn-primary-nav {
            font-family: 'Outfit', sans-serif;
            font-size: 13px; font-weight: 600;
            background: #1A1A18; border: none;
            color: #FFFFFF; border-radius: 100px;
            padding: 9px 20px; cursor: pointer;
            transition: background 0.15s;
          }
          .btn-primary-nav:hover { background: #3D5549; }
          .cart-btn {
            position: relative; background: transparent;
            border: 1px solid #E8E0D5; border-radius: 100px;
            padding: 8px 18px;
            font-family: 'Outfit', sans-serif;
            font-size: 13px; font-weight: 500;
            color: #1A1A18; cursor: pointer;
            transition: border-color 0.15s;
            display: flex; align-items: center; gap: 8px;
          }
          .cart-btn:hover { border-color: #5C7A6A; }
          .cart-badge {
            background: #5C7A6A; color: white;
            font-size: 10px; font-weight: 700;
            width: 18px; height: 18px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
          }
          .user-chip {
            display: flex; align-items: center; gap: 8px;
            background: #F8F5F0; border: 1px solid #E8E0D5;
            border-radius: 100px; padding: 6px 14px 6px 6px;
          }
          .user-avatar {
            width: 28px; height: 28px; border-radius: 50%;
            background: #5C7A6A; color: white;
            display: flex; align-items: center; justify-content: center;
            font-size: 12px; font-weight: 600;
          }
          .btn-logout {
            font-family: 'Outfit', sans-serif;
            font-size: 12px; font-weight: 500;
            background: transparent; border: none;
            color: #8A8A85; cursor: pointer;
            padding: 0; transition: color 0.15s;
          }
          .btn-logout:hover { color: #C0392B; }
        `}</style>

        <div style={{
          maxWidth: 1152, margin: "0 auto",
          padding: "0 24px", height: 64,
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
        }}>

          {/* Logo */}
          <a href="#" style={{
            display: "flex", alignItems: "center",
            gap: 12, textDecoration: "none",
          }}>
            <div style={{
              width: 36, height: 36, background: "#1A1A18",
              borderRadius: 8, display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: 17,
            }}>🔧</div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{
                fontSize: 10, fontWeight: 600,
                letterSpacing: 3, textTransform: "uppercase", color: "#8A8A85",
              }}>Mr.</span>
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20, fontWeight: 500, color: "#1A1A18",
              }}>Mechanic</span>
            </div>
          </a>

          {/* Nav Links */}
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <a className="nav-link">Services</a>
            <a className="nav-link">How it works</a>
            <a className="nav-link">Pricing</a>
            <a className="nav-link">About</a>
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>

            {/* Cart */}
            {cartCount > 0 && (
              <button className="cart-btn">
                🛒
                <span className="cart-badge">{cartCount}</span>
              </button>
            )}

            {user ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div className="user-chip">
                  <div className="user-avatar">
                    {user?.name?.charAt(0).toUpperCase() || '?'}
                  </div>
                  <span style={{
                    fontSize: 13, fontWeight: 500, color: "#1A1A18",
                  }}>
                    {user?.name?.split(' ')[0] || 'User'}
                  </span>
                </div>
                <button className="btn-logout" onClick={logout}>
                  Sign out
                </button>
              </div>
            ) : (
              <>
                <button
                  className="btn-ghost-nav"
                  onClick={() => setShowAuth(true)}
                >
                  Sign in
                </button>
                <button
                  className="btn-primary-nav"
                  onClick={() => setShowAuth(true)}
                >
                  Book now
                </button>
              </>
            )}

          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  )
}

export default Navbar