import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Developer Info */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 flex items-center justify-center md:justify-start gap-2">
              Developed with <span className="text-red-500 text-lg">❤️</span> by{" "}
              <span className="font-semibold text-white">Inder</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://www.youtube.com/@inderchandel782"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition text-2xl"
              title="YouTube"
            >
              📺
            </a>
            <a
              href="https://x.com/inder_codes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition text-2xl"
              title="Twitter"
            >
              𝕏
            </a>
            <a
              href="https://www.linkedin.com/in/inderchandel782/"
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
    </div>
  );
};

export default Footer;
