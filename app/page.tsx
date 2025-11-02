"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col">
      {/* Navbar */}
      <nav className="bg-slate-900 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300 transition">
              🤖Candlestick Buddy🤖
            </h1>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Candlestick Buddy
          </h1>
          <p className="text-gray-300 mb-12 text-lg">
            Master candlestick patterns through interactive learning
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/basic">
              <button className="w-64 py-6 bg-green-600 hover:bg-green-700 text-white font-bold text-xl rounded-lg transition transform hover:scale-105">
                🟢 Basic
                <p className="text-sm mt-2 font-normal">
                  Learn the fundamentals
                </p>
              </button>
            </Link>

            <Link href="/intermediate">
              <button className="w-64 py-6 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl rounded-lg transition transform hover:scale-105">
                🟣 Intermediate
                <p className="text-sm mt-2 font-normal">
                  Identify key patterns
                </p>
              </button>
            </Link>

            <Link href="/advanced">
              <button className="w-64 py-6 bg-red-600 hover:bg-red-700 text-white font-bold text-xl rounded-lg transition transform hover:scale-105">
                🔴 Advanced
                <p className="text-sm mt-2 font-normal">
                  Master complex patterns
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Developer Info */}
            <div className="text-center md:text-left">
              <p className="text-gray-300 flex items-center justify-center md:justify-start gap-2">
                Developed with <span className="text-red-500 text-lg">❤️</span>{" "}
                by <span className="font-semibold text-white">Inder</span>
              </p>
            </div>

            {/* Social Links */}
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
            </div>

            {/* About Link */}
            <div className="text-center md:text-right">
              <Link href="/about">
                <button className="text-gray-400 hover:text-white transition font-semibold">
                  About Us →
                </button>
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700"></div>

          {/* Bottom Info */}
          <div className="pt-6 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Candlestick Buddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
