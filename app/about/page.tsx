"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col">
      {/* Navbar */}
      <nav className="bg-slate-900 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300 transition">
              📊 Candlestick Buddy
            </h1>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 border-b border-slate-700 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              About Candlestick Buddy
            </h1>
            <p className="text-gray-200 text-lg">
              Making candlestick learning interactive, fun, and accessible to
              everyone
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Why I Built This */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              💡 Why I Built This
            </h2>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Learning candlestick patterns is boring. Most resources are
                passive—you watch videos, read books, but never actually{" "}
                <span className="text-blue-400 font-semibold">practice</span>{" "}
                identifying patterns.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                So I built{" "}
                <span className="text-white font-bold">Candlestick Buddy</span>{" "}
                to make learning:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <span className="text-gray-300 text-lg">
                    <span className="font-semibold">Interactive</span> -
                    Actively identify patterns, not just watch
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-2xl">✓</span>
                  <span className="text-gray-300 text-lg">
                    <span className="font-semibold">Fun</span> - Gamified with
                    scores, attempts, and real-time feedback
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-2xl">✓</span>
                  <span className="text-gray-300 text-lg">
                    <span className="font-semibold">Practical</span> - Learn
                    candlestick names, patterns, and how to spot them
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-2xl">✓</span>
                  <span className="text-gray-300 text-lg">
                    <span className="font-semibold">Accessible</span> - 100%
                    free, forever
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              🎓 Three-Level Learning Path
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-6 border-l-4 border-green-400">
                <h3 className="text-2xl font-bold text-green-300 mb-3">
                  🟢 Basic
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  Start from zero. Learn what open, close, high, and low prices
                  mean. Understand the anatomy of a candlestick.
                </p>
                <p className="text-green-200 text-xs font-semibold">
                  Perfect for beginners
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-6 border-l-4 border-purple-400">
                <h3 className="text-2xl font-bold text-purple-300 mb-3">
                  🟣 Intermediate
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  Identify classic patterns: Hammer, Doji, Engulfing, Shooting
                  Star, Marubozu, Spinning Top, and more.
                </p>
                <p className="text-purple-200 text-xs font-semibold">
                  Build pattern recognition
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg p-6 border-l-4 border-red-400">
                <h3 className="text-2xl font-bold text-red-300 mb-3">
                  🔴 Advanced
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  Master multi-candle patterns: Morning Star, Evening Star,
                  Three Line Strike, Bullish/Bearish Engulfing, and more.
                </p>
                <p className="text-red-200 text-xs font-semibold">
                  Become a pro trader
                </p>
              </div>
            </div>
          </section>

          {/* What You'll Learn */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              📚 What You'll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">
                  📈 Pattern Recognition
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>✓ Bullish reversal patterns</li>
                  <li>✓ Bearish reversal patterns</li>
                  <li>✓ Continuation patterns</li>
                  <li>✓ Single vs multi-candle patterns</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">
                  🧠 Market Psychology
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>✓ Bull vs Bear psychology</li>
                  <li>✓ Price rejection signals</li>
                  <li>✓ Indecision candles</li>
                  <li>✓ Momentum indicators</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">
                  💡 Practical Trading
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>✓ Entry and exit signals</li>
                  <li>✓ Pattern accuracy rates</li>
                  <li>✓ Real-world applications</li>
                  <li>✓ Risk management basics</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-400 mb-3">
                  ⚡ Advanced Strategies
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>✓ Complex multi-candle patterns</li>
                  <li>✓ Pattern combinations</li>
                  <li>✓ Accuracy testing</li>
                  <li>✓ Trading system design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* About Me */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              👨‍💻 About Me - Inder
            </h2>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Hi! I'm <span className="text-white font-bold">Inder</span>, a
                passionate trader and developer obsessed with building tools
                around trading systems and market analysis.
              </p>

              <h3 className="text-xl font-bold text-blue-400 mb-3">
                What I Do
              </h3>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>
                  🏗️{" "}
                  <span className="font-semibold">
                    Build & Test Trading Systems
                  </span>{" "}
                  - From concepts to live strategies
                </li>
                <li>
                  🤖{" "}
                  <span className="font-semibold">Apply Machine Learning</span>{" "}
                  - Neural networks and ML algorithms on market data
                </li>
                <li>
                  ⚖️{" "}
                  <span className="font-semibold">
                    Market Neutral Strategies
                  </span>{" "}
                  - Long/short systems designed to beat the market
                </li>
                <li>
                  📊{" "}
                  <span className="font-semibold">
                    Options Strategy Testing
                  </span>{" "}
                  - Backtesting and optimizing option trades
                </li>
                <li>
                  🔬{" "}
                  <span className="font-semibold">
                    Trading Strategy Analysis
                  </span>{" "}
                  - Rigorous testing of various market approaches
                </li>
                <li>
                  📹{" "}
                  <span className="font-semibold">
                    Share Everything on YouTube
                  </span>{" "}
                  - Teaching what I learn and building in public
                </li>
              </ul>

              <div className="bg-slate-700 rounded-lg p-4 mb-6 border-l-4 border-yellow-500">
                <p className="text-gray-200 text-sm">
                  <span className="font-semibold text-yellow-300">
                    🎯 My Passion:
                  </span>{" "}
                  I love the intersection of trading, coding, and data science.
                  I believe the future of trading is algorithmic, data-driven,
                  and accessible to everyone.
                </p>
              </div>

              <h3 className="text-xl font-bold text-purple-400 mb-3">
                Let's Collaborate
              </h3>
              <p className="text-gray-300 mb-4">
                I'm always excited about new opportunities. Whether you need
                help with:
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>🔧 Building your trading system</li>
                <li>📈 Optimizing your trading strategy</li>
                <li>🤖 Applying ML to market data</li>
                <li>💼 Creating proprietary trading tools</li>
                <li>🚀 Any other trading + tech collaboration</li>
              </ul>
              <p className="text-gray-300">
                <span className="font-semibold text-white">
                  Reach out to me via LinkedIn or Twitter!
                </span>{" "}
                I'm open to discussing ideas, partnerships, and exciting
                projects.
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              ⚙️ Built With
            </h2>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-4">
                    Frontend
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      ✓ <span className="font-semibold">Next.js 14+</span> -
                      React framework
                    </li>
                    <li>
                      ✓ <span className="font-semibold">Tailwind CSS</span> -
                      Styling
                    </li>
                    <li>
                      ✓ <span className="font-semibold">Canvas API</span> -
                      Chart rendering
                    </li>
                    <li>
                      ✓ <span className="font-semibold">React Hooks</span> -
                      State management
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-purple-400 mb-4">
                    Deployment
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      ✓ <span className="font-semibold">Vercel</span> - Hosting
                    </li>
                    <li>
                      ✓ <span className="font-semibold">GitHub</span> - Version
                      control
                    </li>
                    <li>
                      ✓ <span className="font-semibold">Open Source</span> - MIT
                      License
                    </li>
                    <li>
                      ✓ <span className="font-semibold">100% Free</span> -
                      Forever
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Open Source */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              🚀 Open Source
            </h2>
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-8 border border-blue-700 text-center">
              <p className="text-gray-200 text-lg mb-6">
                Candlestick Buddy is completely open source! Check out the code,
                contribute, or fork it for your own project.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition"
              >
                View on GitHub 🔗
              </a>
              <p className="text-gray-400 text-sm mt-4">
                MIT License - Feel free to use and modify
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              📞 Get In Touch
            </h2>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <p className="text-gray-300 text-lg mb-8">
                Have questions about Candlestick Buddy? Want to collaborate?
                Just want to chat about trading systems? Reach out!
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
                >
                  <span>💼</span> LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-lg transition"
                >
                  <span>𝕏</span> Twitter
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition"
                >
                  <span>📺</span> YouTube
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">❓ FAQ</h2>
            <div className="space-y-4">
              <details className="bg-slate-800 rounded-lg p-6 cursor-pointer group">
                <summary className="text-white font-bold text-lg flex justify-between items-center">
                  Is Candlestick Buddy really free?
                  <span className="group-open:rotate-180 transition text-2xl">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-300 mt-4">
                  Yes! 100% free forever. No ads, no premium features, no hidden
                  costs. It's open source and maintained with ❤️.
                </p>
              </details>

              <details className="bg-slate-800 rounded-lg p-6 cursor-pointer group">
                <summary className="text-white font-bold text-lg flex justify-between items-center">
                  Can I use this for real trading?
                  <span className="group-open:rotate-180 transition text-2xl">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-300 mt-4">
                  Yes! Our patterns are based on real technical analysis.
                  However, always practice on demo accounts first and never risk
                  money you can't afford to lose. Use this as a learning tool,
                  not financial advice.
                </p>
              </details>

              <details className="bg-slate-800 rounded-lg p-6 cursor-pointer group">
                <summary className="text-white font-bold text-lg flex justify-between items-center">
                  Do I need trading experience?
                  <span className="group-open:rotate-180 transition text-2xl">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-300 mt-4">
                  Nope! Start with Basic mode even if you've never looked at a
                  chart. We'll guide you from fundamentals to advanced patterns
                  step by step.
                </p>
              </details>

              <details className="bg-slate-800 rounded-lg p-6 cursor-pointer group">
                <summary className="text-white font-bold text-lg flex justify-between items-center">
                  Can I contribute to the project?
                  <span className="group-open:rotate-180 transition text-2xl">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-300 mt-4">
                  Absolutely! Check out the GitHub repo and submit pull
                  requests. Whether it's bug fixes, new patterns, or features -
                  all contributions are welcome!
                </p>
              </details>

              <details className="bg-slate-800 rounded-lg p-6 cursor-pointer group">
                <summary className="text-white font-bold text-lg flex justify-between items-center">
                  What's the accuracy of these patterns?
                  <span className="group-open:rotate-180 transition text-2xl">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-300 mt-4">
                  Each pattern has different accuracy rates (detailed in
                  Advanced mode). For example, Bullish Three Line Strike has
                  ~84% accuracy, Morning Star ~70%. These are statistical
                  probabilities, not guarantees.
                </p>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Trading Better?
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/basic">
                <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition">
                  Start Basic 🟢
                </button>
              </Link>
              <Link href="/intermediate">
                <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition">
                  Try Intermediate 🟣
                </button>
              </Link>
              <Link href="/advanced">
                <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition">
                  Challenge Advanced 🔴
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <p className="text-gray-300 flex items-center justify-center md:justify-start gap-2">
                Developed with <span className="text-red-500 text-lg">❤️</span>{" "}
                by <span className="font-semibold text-white">Inder</span>
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Making trading education interactive and fun
              </p>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition text-2xl"
                title="YouTube"
              >
                📺
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition text-2xl"
                title="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition text-2xl"
                title="LinkedIn"
              >
                💼
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition text-2xl"
                title="GitHub"
              >
                🔗
              </a>
            </div>

            <div className="text-center md:text-right">
              <Link href="/">
                <button className="text-gray-400 hover:text-white transition font-semibold">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-700"></div>

          <div className="pt-6 text-center text-gray-500 text-sm">
            <p>
              &copy; 2025 Candlestick Buddy. Open Source | MIT License | 100%
              Free
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
