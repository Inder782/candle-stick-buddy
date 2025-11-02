export function WiseMrMarket({
  dialogue,
  attemptCount,
  maxAttempts,
  theme = "emerald",
  showSteps = false,
  currentStep = "open",
}: {
  dialogue: string;
  attemptCount: number;
  maxAttempts: number;
  theme?: "emerald" | "purple" | "blue";
  showSteps?: boolean;
  currentStep?: "open" | "close";
}) {
  const themeConfig = {
    emerald: {
      container: "from-emerald-900 to-blue-900 border-emerald-700",
      speech: "bg-emerald-800 border-emerald-600 text-emerald-50",
      progress: "bg-emerald-700 text-emerald-100",
      arrow: "border-t-emerald-800",
      stepActive: "bg-blue-400",
      stepInactive: "bg-emerald-400",
    },
    purple: {
      container: "from-purple-900 to-blue-900 border-purple-700",
      speech: "bg-purple-800 border-purple-600 text-purple-50",
      progress: "bg-purple-700 text-purple-100",
      arrow: "border-t-purple-800",
      stepActive: "bg-blue-400",
      stepInactive: "bg-purple-600",
    },
    blue: {
      container: "from-blue-900 to-cyan-900 border-blue-700",
      speech: "bg-blue-800 border-blue-600 text-blue-50",
      progress: "bg-blue-700 text-blue-100",
      arrow: "border-t-blue-800",
      stepActive: "bg-cyan-400",
      stepInactive: "bg-blue-600",
    },
  };

  const config = themeConfig[theme];

  return (
    <div
      className={`bg-linear-to-br ${config.container} rounded-lg p-4 flex flex-col items-center border-2 h-fit sticky top-4`}
    >
      {/* Avatar */}
      <div className="mb-3">
        <svg
          width="130"
          height="160"
          viewBox="0 0 180 220"
          className="drop-shadow-lg"
        >
          {/* Hair - Silver/Grey */}
          <path
            d="M 40 50 Q 40 30 90 25 Q 140 30 140 50 Q 140 65 130 72 Q 90 80 50 72 Q 40 65 40 50"
            fill="#c0c0c0"
          />

          {/* Head */}
          <circle cx="90" cy="65" r="32" fill="#d9c8a8" />

          {/* Beard - White/Grey */}
          <ellipse cx="90" cy="85" rx="28" ry="12" fill="#e8dcc8" />

          {/* Cheeks - kind expression */}
          <circle cx="70" cy="70" r="6" fill="#c9a882" opacity="0.5" />
          <circle cx="110" cy="70" r="6" fill="#c9a882" opacity="0.5" />

          {/* Glasses */}
          <circle
            cx="75"
            cy="62"
            r="8"
            fill="none"
            stroke="#8b7355"
            strokeWidth="1.5"
          />
          <circle
            cx="105"
            cy="62"
            r="8"
            fill="none"
            stroke="#8b7355"
            strokeWidth="1.5"
          />
          <line
            x1="83"
            y1="62"
            x2="97"
            y2="62"
            stroke="#8b7355"
            strokeWidth="1.5"
          />

          {/* Lens shine */}
          <circle cx="73" cy="60" r="2" fill="#ffffff" opacity="0.8" />
          <circle cx="103" cy="60" r="2" fill="#ffffff" opacity="0.8" />

          {/* Eyes */}
          <circle cx="75" cy="62" r="2" fill="#4a5d6a" />
          <circle cx="105" cy="62" r="2" fill="#4a5d6a" />

          {/* Kind smile */}
          <path
            d="M 80 78 Q 90 83 100 78"
            stroke="#8b6f47"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Neck */}
          <rect x="75" y="93" width="30" height="10" fill="#d9c8a8" />

          {/* Shirt */}
          <path
            d="M 50 103 L 70 100 L 110 100 L 130 103 L 125 165 L 55 165 Z"
            fill={
              theme === "purple"
                ? "#6366f1"
                : theme === "blue"
                ? "#0369a1"
                : "#4a90e2"
            }
            stroke={
              theme === "purple"
                ? "#4f46e5"
                : theme === "blue"
                ? "#0c4a6e"
                : "#2c5aa0"
            }
            strokeWidth="1.5"
          />

          {/* Vest */}
          <path
            d="M 60 105 L 90 103 L 120 105 L 118 160 L 62 160 Z"
            fill={
              theme === "purple"
                ? "#a78bfa"
                : theme === "blue"
                ? "#38bdf8"
                : "#52b788"
            }
            stroke={
              theme === "purple"
                ? "#7c3aed"
                : theme === "blue"
                ? "#0369a1"
                : "#2d6a4f"
            }
            strokeWidth="1.5"
          />

          {/* Vest buttons */}
          <circle
            cx="90"
            cy="125"
            r="2"
            fill={
              theme === "purple"
                ? "#fbbf24"
                : theme === "blue"
                ? "#60a5fa"
                : "#d4af37"
            }
          />
        </svg>
      </div>

      {/* Speech Bubble */}
      <div
        className={`${config.speech} border-2 rounded-lg p-3 mb-3 relative w-full`}
      >
        <div
          className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent ${config.arrow}`}
        ></div>
        <p className="text-xs font-semibold text-center leading-relaxed italic line-clamp-4">
          "{dialogue}"
        </p>
      </div>

      {/* Progress */}
      <div
        className={`${config.progress} rounded-lg p-3 w-full text-center space-y-2`}
      >
        {showSteps ? (
          <>
            <p className="text-xs font-semibold">
              {currentStep === "open" ? "Step 1: OPEN" : "Step 2: CLOSE"}
            </p>
            <div className="flex gap-1">
              <div
                className={`flex-1 h-1.5 rounded transition-all ${
                  currentStep === "open"
                    ? config.stepActive
                    : config.stepInactive
                }`}
              ></div>
              <div
                className={`flex-1 h-1.5 rounded transition-all ${
                  currentStep === "close"
                    ? config.stepActive
                    : config.stepInactive
                }`}
              ></div>
            </div>
          </>
        ) : (
          <p className="text-xs font-semibold">🎓 MCQ Challenge</p>
        )}
        <p className="text-xs font-semibold">
          {showSteps
            ? `${attemptCount} / ${maxAttempts}`
            : `Attempt: ${attemptCount}/${maxAttempts}`}
        </p>
      </div>
    </div>
  );
}
