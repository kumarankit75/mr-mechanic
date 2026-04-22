function Hero() {
  return (
    <section className="bg-white px-4 pt-14 pb-0">
      <div className="max-w-6xl mx-auto">

        {/* Top Label */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-green-600 inline-block"></span>
          <span className="text-xs font-semibold tracking-widest uppercase text-green-700">
            Premium Home Care · Since 2018
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-5 max-w-xl">
          Your home,{" "}
          <span className="italic text-green-700">expertly cared for.</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 font-light text-base leading-relaxed max-w-md mb-8">
          Curated professionals for every corner of your home. Transparent
          pricing, guaranteed satisfaction, zero hassle.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 mb-12">
          <button className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-full px-8 py-3 transition">
            Book a service
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-800 transition">
            See how it works
            <span className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-xs">
              →
            </span>
          </button>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Metrics */}
          <div className="flex gap-10">
            <div>
              <div className="text-4xl font-bold text-gray-900">2M+</div>
              <div className="text-xs text-gray-400 mt-1">Services Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">4.9</div>
              <div className="text-xs text-gray-400 mt-1">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">5K+</div>
              <div className="text-xs text-gray-400 mt-1">Verified Experts</div>
            </div>
          </div>

          {/* Trust Pills */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
              Experts available now
            </div>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
              Fixed transparent pricing
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero