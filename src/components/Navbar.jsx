function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center text-lg">
            🔧
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">Mr.</span>
            <span className="text-lg font-bold text-gray-900">Mechanic</span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-sm text-gray-400 hover:text-gray-800 cursor-pointer transition">Services</span>
          <span className="text-sm text-gray-400 hover:text-gray-800 cursor-pointer transition">How it works</span>
          <span className="text-sm text-gray-400 hover:text-gray-800 cursor-pointer transition">Pricing</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium border border-gray-200 rounded-full px-4 py-2 hover:border-gray-800 transition">
            Sign in
          </button>
          <button className="text-sm font-semibold bg-gray-900 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition">
            Book now
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar