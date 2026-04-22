// function SearchBar() {
//   return (
//     <div className="bg-gray-50 border-t border-gray-100 px-4 py-5">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm">
          
//           {/* Search Icon */}
//           <span className="text-gray-300 text-lg mr-2">🔍</span>

//           {/* Input */}
//           <input
//             type="text"
//             placeholder="Search any service — AC, plumbing, cleaning..."
//             className="flex-1 outline-none text-sm font-light text-gray-700 placeholder-gray-300 bg-transparent"
//           />

//           {/* Divider */}
//           <div className="w-px h-6 bg-gray-200 mx-3"></div>

//           {/* Location */}
//           <div className="flex items-center gap-1 text-sm text-gray-400 whitespace-nowrap">
//             <span className="text-green-600">📍</span>
//             Kolkata, WB
//           </div>

//           {/* Button */}
//           <button className="ml-3 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-full px-6 py-2.5 transition whitespace-nowrap">
//             Find
//           </button>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default SearchBar








function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div style={{
      background: "#F0EBE3",
      borderTop: "1px solid #E8E0D5",
      padding: "20px 24px",
      fontFamily: "'Outfit', sans-serif",
    }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          background: "#FFFFFF",
          border: "1px solid #E8E0D5",
          borderRadius: 100,
          padding: "8px 8px 8px 20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}>

          <span style={{ color: "#AEAEA8", fontSize: 16, marginRight: 8 }}>🔍</span>

          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search any service — AC, plumbing, cleaning..."
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontFamily: "'Outfit', sans-serif",
              fontSize: 14,
              fontWeight: 300,
              color: "#1A1A18",
              background: "transparent",
            }}
          />

          {/* Clear button */}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                background: "#F0EBE3",
                border: "none",
                borderRadius: "50%",
                width: 24,
                height: 24,
                cursor: "pointer",
                color: "#8A8A85",
                fontSize: 13,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 8,
                flexShrink: 0,
              }}
            >
              ✕
            </button>
          )}

          <div style={{
            width: 1,
            height: 28,
            background: "#E8E0D5",
            margin: "0 12px",
          }} />

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            color: "#8A8A85",
            whiteSpace: "nowrap",
          }}>
            <span style={{ color: "#5C7A6A" }}>📍</span>
            Kolkata, WB
          </div>

          <button
            style={{
              marginLeft: 10,
              background: "#5C7A6A",
              color: "#FFFFFF",
              border: "none",
              borderRadius: 100,
              padding: "11px 28px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "background 0.15s",
            }}
            onMouseEnter={e => e.target.style.background = "#3D5549"}
            onMouseLeave={e => e.target.style.background = "#5C7A6A"}
          >
            Find
          </button>

        </div>
      </div>
    </div>
  )
}

export default SearchBar