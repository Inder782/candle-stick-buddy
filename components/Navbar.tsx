import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-900 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300 transition">
              🤖Candlestick Buddy🤖
            </h1>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
