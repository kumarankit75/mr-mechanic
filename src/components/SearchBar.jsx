function SearchBar() {
  return (
    <div className="bg-gray-50 border-t border-gray-100 px-4 py-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm">
          
          {/* Search Icon */}
          <span className="text-gray-300 text-lg mr-2">🔍</span>

          {/* Input */}
          <input
            type="text"
            placeholder="Search any service — AC, plumbing, cleaning..."
            className="flex-1 outline-none text-sm font-light text-gray-700 placeholder-gray-300 bg-transparent"
          />

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200 mx-3"></div>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-gray-400 whitespace-nowrap">
            <span className="text-green-600">📍</span>
            Kolkata, WB
          </div>

          {/* Button */}
          <button className="ml-3 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-full px-6 py-2.5 transition whitespace-nowrap">
            Find
          </button>

        </div>
      </div>
    </div>
  )
}

export default SearchBar