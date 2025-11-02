"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 flex flex-col">
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
    </div>
  );
}
