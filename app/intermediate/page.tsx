"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function IntermediateMode() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [attemptCount, setAttemptCount] = useState(0);
  const [maxAttempts] = useState(2);

  //TODO : work on questions
  const questions = [
    {
      id: 1,
      candle: { open: 120, high: 140, low: 100, close: 135 },
      description: "Small body at top, long lower wick",
      options: [
        { label: "Hammer (Bullish)", value: "hammer-bullish", correct: true },
        {
          label: "Hanging Man (Bearish)",
          value: "hangman-bearish",
          correct: false,
        },
        { label: "Doji (Neutral)", value: "doji-neutral", correct: false },
        {
          label: "Dragonfly (Bullish)",
          value: "dragonfly-bullish",
          correct: false,
        },
      ],
      dialogue: {
        intro: "What pattern is this? Look closely at the wick and body.",
        correct:
          "Perfect! The Hammer shows rejection of lower prices. Strong bullish reversal!",
        incorrect:
          "Not quite. Notice the long lower wick and small body at top. That's a Hammer!",
      },
    },
    {
      id: 2,
      candle: { open: 130, high: 140, low: 100, close: 125 },
      description: "Small body at top, long lower wick",
      options: [
        { label: "Hammer (Bullish)", value: "hammer-bullish", correct: false },
        {
          label: "Hanging Man (Bearish)",
          value: "hangman-bearish",
          correct: true,
        },
        { label: "Doji (Neutral)", value: "doji-neutral", correct: false },
        {
          label: "Shooting Star (Bearish)",
          value: "shootingstar-bearish",
          correct: false,
        },
      ],
      dialogue: {
        intro: "Identify this pattern. What does the formation tell us?",
        correct:
          "Excellent! The Hanging Man appears at tops - a bearish warning sign!",
        incorrect:
          "Think again. Similar shape to Hammer, but appears at different market levels.",
      },
    },
    {
      id: 3,
      candle: { open: 105, high: 145, low: 100, close: 140 },
      description: "Long upper wick, small body at bottom",
      options: [
        {
          label: "Shooting Star (Bearish)",
          value: "shootingstar-bearish",
          correct: false,
        },
        {
          label: "Dragonfly Doji (Bullish)",
          value: "dragonfly-bullish",
          correct: true,
        },
        {
          label: "Marubozu (Bullish)",
          value: "marubozu-bullish",
          correct: false,
        },
        {
          label: "Spinning Top (Neutral)",
          value: "spinningtop-neutral",
          correct: false,
        },
      ],
      dialogue: {
        intro: "What pattern emerges here? Notice the wick direction.",
        correct:
          "Great! Dragonfly Doji - buyers reject lower prices. Bullish reversal!",
        incorrect: "Look at where the body sits and which wick is longer.",
      },
    },
    {
      id: 4,
      candle: { open: 140, high: 145, low: 100, close: 105 },
      description: "Long upper wick, small body at bottom",
      options: [
        {
          label: "Shooting Star (Bearish)",
          value: "shootingstar-bearish",
          correct: true,
        },
        {
          label: "Dragonfly Doji (Bullish)",
          value: "dragonfly-bullish",
          correct: false,
        },
        {
          label: "Marubozu (Bearish)",
          value: "marubozu-bearish",
          correct: false,
        },
        {
          label: "Spinning Top (Neutral)",
          value: "spinningtop-neutral",
          correct: false,
        },
      ],
      dialogue: {
        intro: "This pattern appears at tops. What is it?",
        correct:
          "Perfect! Shooting Star - strong rejection at resistance. Bearish signal!",
        incorrect:
          "Look at the price action. This pattern warns of weakness ahead.",
      },
    },
    {
      id: 5,
      candle: { open: 105, high: 160, low: 100, close: 155 },
      description: "No wicks, solid body from open to high and close to high",
      options: [
        {
          label: "Marubozu (Bullish)",
          value: "marubozu-bullish",
          correct: true,
        },
        { label: "Hammer (Bullish)", value: "hammer-bullish", correct: false },
        { label: "Doji (Neutral)", value: "doji-neutral", correct: false },
        {
          label: "Spinning Top (Neutral)",
          value: "spinningtop-neutral",
          correct: false,
        },
      ],
      dialogue: {
        intro: "Strong price movement with no wicks. What's this called?",
        correct:
          "Excellent! Marubozu - no wicks means strong conviction. Bullish strength!",
        incorrect:
          "Notice there are no wicks at all. That's the key characteristic!",
      },
    },
    {
      id: 6,
      candle: { open: 120, high: 125, low: 115, close: 120 },
      description: "Equal wicks above and below, small body in middle",
      options: [
        { label: "Doji (Neutral)", value: "doji-neutral", correct: true },
        {
          label: "Spinning Top (Neutral)",
          value: "spinningtop-neutral",
          correct: false,
        },
        { label: "Hammer (Bullish)", value: "hammer-bullish", correct: false },
        {
          label: "Marubozu (Bullish)",
          value: "marubozu-bullish",
          correct: false,
        },
      ],
      dialogue: {
        intro: "Open equals close. What indecision pattern is this?",
        correct: "Perfect! Doji shows indecision. Open and close are equal!",
        incorrect: "Look at where open and close prices are. They're key here.",
      },
    },
    {
      id: 7,
      candle: { open: 115, high: 135, low: 105, close: 110 },
      description: "Roughly equal upper and lower wicks, medium body",
      options: [
        {
          label: "Spinning Top (Neutral)",
          value: "spinningtop-neutral",
          correct: true,
        },
        { label: "Doji (Neutral)", value: "doji-neutral", correct: false },
        { label: "Hammer (Bullish)", value: "hammer-bullish", correct: false },
        {
          label: "Dragonfly Doji (Bullish)",
          value: "dragonfly-bullish",
          correct: false,
        },
      ],
      dialogue: {
        intro: "Wicks on both sides with uncertain movement. What is it?",
        correct:
          "Great! Spinning Top - indecision with larger body. Market uncertainty!",
        incorrect:
          "Notice the balanced wicks and the body size. That's the difference!",
      },
    },
    {
      id: 8,
      candle: { open: 140, high: 145, low: 100, close: 105 },
      description: "Small body at bottom, extremely long upper wick",
      options: [
        {
          label: "Shooting Star (Bearish)",
          value: "shootingstar-bearish",
          correct: true,
        },
        { label: "Hammer (Bullish)", value: "hammer-bullish", correct: false },
        {
          label: "Gravestone Doji (Bearish)",
          value: "gravestone-bearish",
          correct: false,
        },
        {
          label: "Dragonfly Doji (Bullish)",
          value: "dragonfly-bullish",
          correct: false,
        },
      ],
      dialogue: {
        intro:
          "Long upper wick at resistance, body at bottom. What's the warning?",
        correct:
          "Excellent! Shooting Star at tops signals strong bearish rejection!",
        incorrect:
          "Position and wick direction matter. This pattern appears at tops.",
      },
    },
  ];

  const question = questions[currentQuestion];

  const handleSelectAnswer = (value: string) => {
    if (!showFeedback) {
      setSelectedAnswer(value);
    }
  };

  const handleSubmit = () => {
    const correct = question.options.find(
      (opt) => opt.value === selectedAnswer
    )?.correct;

    setShowFeedback(true);
    setIsCorrect(correct || false);

    if (correct) {
      setScore(score + 1);
    }

    setAttemptCount(attemptCount + 1);
  };

  const handleRetry = () => {
    if (attemptCount < maxAttempts) {
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(false);
      setAttemptCount(0);
    }
  };

  const quizComplete =
    currentQuestion === questions.length - 1 &&
    showFeedback &&
    (isCorrect || attemptCount >= maxAttempts);
  const canRetry = !isCorrect && attemptCount < maxAttempts;

  const getDialogue = () => {
    if (!selectedAnswer) {
      return question.dialogue.intro;
    }
    if (showFeedback) {
      return isCorrect
        ? question.dialogue.correct
        : question.dialogue.incorrect;
    }
    return question.dialogue.intro;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Intermediate Mode</h1>
          <div className="flex items-center gap-4">
            <span className="text-green-400 font-bold text-base">
              Score: {score}/{questions.length}
            </span>
            <Link href="/">
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition">
                Back
              </button>
            </Link>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-700 rounded-lg p-3 mb-6">
          <div className="w-full bg-slate-600 rounded-full h-2">
            <div
              className="bg-purple-500 h-2 rounded-full transition-all"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        {/* Main Content */}
        {!quizComplete ? (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Left - Mr. Market */}
            <div className="lg:col-span-1">
              <WiseMrMarket
                dialogue={getDialogue()}
                attemptCount={attemptCount}
                maxAttempts={maxAttempts}
              />
            </div>

            {/* Right - Canvas and Controls */}
            <div className="lg:col-span-4">
              <div className="bg-slate-800 rounded-lg p-6">
                {/* Pattern Description */}
                <div className="mb-4">
                  <p className="text-gray-300 text-sm">
                    {question.description}
                  </p>
                </div>

                {/* Canvas */}
                <div className="flex justify-center mb-6">
                  <CandlestickCanvas
                    candle={question.candle}
                    hoveredPart={hoveredPart}
                    setHoveredPart={setHoveredPart}
                  />
                </div>

                {/* MCQ Options */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {question.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSelectAnswer(option.value)}
                      disabled={showFeedback}
                      className={`p-3 rounded-lg text-sm font-semibold transition border-2 ${
                        selectedAnswer === option.value
                          ? "bg-blue-600 text-white border-blue-400"
                          : "bg-slate-700 text-gray-300 hover:bg-slate-600 border-transparent"
                      } ${
                        showFeedback && option.correct
                          ? "bg-green-600 text-white border-green-400"
                          : ""
                      } ${
                        showFeedback &&
                        selectedAnswer === option.value &&
                        !option.correct
                          ? "bg-red-600 text-white border-red-400"
                          : ""
                      } disabled:cursor-not-allowed`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                {/* Feedback */}
                {showFeedback && (
                  <div
                    className={`p-4 rounded-lg mb-6 ${
                      isCorrect ? "bg-green-900" : "bg-red-900"
                    }`}
                  >
                    <p
                      className={`font-semibold mb-2 text-base ${
                        isCorrect ? "text-green-200" : "text-red-200"
                      }`}
                    >
                      {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
                    </p>
                    <p className="text-gray-100 text-sm leading-relaxed">
                      {isCorrect
                        ? question.dialogue.correct
                        : question.dialogue.incorrect}
                    </p>
                    {!isCorrect && (
                      <p className="text-red-100 text-sm mt-2">
                        Attempts: {attemptCount} / {maxAttempts}
                      </p>
                    )}
                  </div>
                )}

                {/* Buttons */}
                {!showFeedback ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedAnswer}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition text-base"
                  >
                    Submit Answer
                  </button>
                ) : isCorrect ? (
                  <button
                    onClick={handleNext}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition text-base"
                  >
                    {currentQuestion === questions.length - 1
                      ? "See Results"
                      : "Next Question"}
                  </button>
                ) : canRetry ? (
                  <div className="flex gap-3">
                    <button
                      onClick={handleRetry}
                      className="flex-1 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition text-base"
                    >
                      Retry ({maxAttempts - attemptCount} left)
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition text-base"
                    >
                      Skip
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleNext}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition text-base"
                  >
                    {currentQuestion === questions.length - 1
                      ? "See Results"
                      : "Next Question"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Results Screen */
          <div className="bg-slate-800 rounded-lg p-8 text-center max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Intermediate Complete!
            </h2>
            <div className="text-6xl font-bold text-purple-400 mb-4">
              {score} / {questions.length}
            </div>
            <p className="text-gray-300 mb-8 text-base leading-relaxed">
              {score === questions.length
                ? "🎉 Outstanding! You mastered candlestick patterns!"
                : score > questions.length * 0.7
                ? "👏 Excellent progress! You're a pattern expert!"
                : score > questions.length * 0.5
                ? "💪 Good effort! Keep practicing patterns!"
                : "📚 Keep learning! More practice needed!"}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setShowFeedback(false);
                  setSelectedAnswer(null);
                  setAttemptCount(0);
                }}
                className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition text-base"
              >
                Retry
              </button>
              <Link href="/" className="flex-1">
                <button className="w-full px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition text-base">
                  Menu
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Mr. Market for Intermediate - Larger
function WiseMrMarket({
  dialogue,
  attemptCount,
  maxAttempts,
}: {
  dialogue: string;
  attemptCount: number;
  maxAttempts: number;
}) {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg p-4 flex flex-col items-center border-2 border-purple-700 h-fit sticky top-4">
      {/* Avatar - Larger */}
      <div className="mb-3">
        <svg
          width="130"
          height="160"
          viewBox="0 0 180 220"
          className="drop-shadow-lg"
        >
          <path
            d="M 40 50 Q 40 30 90 25 Q 140 30 140 50 Q 140 65 130 72 Q 90 80 50 72 Q 40 65 40 50"
            fill="#c0c0c0"
          />
          <circle cx="90" cy="65" r="32" fill="#d9c8a8" />
          <ellipse cx="90" cy="85" rx="28" ry="12" fill="#e8dcc8" />
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
          <circle cx="73" cy="60" r="2" fill="#ffffff" opacity="0.8" />
          <circle cx="103" cy="60" r="2" fill="#ffffff" opacity="0.8" />
          <circle cx="75" cy="62" r="2" fill="#4a5d6a" />
          <circle cx="105" cy="62" r="2" fill="#4a5d6a" />
          <path
            d="M 80 78 Q 90 83 100 78"
            stroke="#8b6f47"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <rect x="75" y="93" width="30" height="10" fill="#d9c8a8" />
          <path
            d="M 50 103 L 70 100 L 110 100 L 130 103 L 125 165 L 55 165 Z"
            fill="#6366f1"
            stroke="#4f46e5"
            strokeWidth="1.5"
          />
          <path
            d="M 60 105 L 90 103 L 120 105 L 118 160 L 62 160 Z"
            fill="#a78bfa"
            stroke="#7c3aed"
            strokeWidth="1.5"
          />
          <circle cx="90" cy="125" r="2" fill="#fbbf24" />
        </svg>
      </div>

      {/* Speech Bubble - Larger */}
      <div className="bg-purple-800 border-2 border-purple-600 rounded-lg p-3 mb-3 relative w-full">
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-purple-800"></div>
        <p className="text-purple-50 text-xs font-semibold text-center leading-relaxed italic line-clamp-4">
          "{dialogue}"
        </p>
      </div>

      {/* Progress - Larger */}
      <div className="bg-purple-700 rounded-lg p-3 w-full text-center space-y-2">
        <p className="text-xs text-purple-100 font-semibold">
          🎓 MCQ Challenge
        </p>
        <div className="flex gap-1">
          <div className="flex-1 h-2 bg-purple-600 rounded"></div>
          <div className="flex-1 h-2 bg-purple-600 rounded"></div>
        </div>
        <p className="text-xs text-purple-200 font-semibold">
          Attempt: {attemptCount}/{maxAttempts}
        </p>
      </div>
    </div>
  );
}

// Candlestick Canvas - Larger
function CandlestickCanvas({
  candle,
  hoveredPart,
  setHoveredPart,
}: {
  candle: { open: number; high: number; low: number; close: number };
  hoveredPart: string | null;
  setHoveredPart: (part: string | null) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { open, high, low, close } = candle;
  const range = high - low;
  const bodyTop = Math.max(open, close);
  const bodyBottom = Math.min(open, close);
  const isBullish = close > open;

  const CANVAS_WIDTH = 450;
  const CANVAS_HEIGHT = 350;
  const PADDING = 50;
  const CHART_HEIGHT = CANVAS_HEIGHT - 2 * PADDING;

  const topWickY = PADDING + ((high - high) / range) * CHART_HEIGHT;
  const bodyTopY = PADDING + ((high - bodyTop) / range) * CHART_HEIGHT;
  const bodyBottomY = PADDING + ((high - bodyBottom) / range) * CHART_HEIGHT;
  const bottomWickY = PADDING + ((high - low) / range) * CHART_HEIGHT;

  const candleX = CANVAS_WIDTH / 2;
  const candleWidth = 50;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#1e293b";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.strokeStyle = "#334155";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = PADDING + (i * CHART_HEIGHT) / 5;
      ctx.beginPath();
      ctx.moveTo(PADDING, y);
      ctx.lineTo(CANVAS_WIDTH - PADDING, y);
      ctx.stroke();
    }

    ctx.fillStyle = "#94a3b8";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "right";
    for (let i = 0; i <= 5; i++) {
      const price = high - (i * range) / 5;
      const y = PADDING + (i * CHART_HEIGHT) / 5 + 4;
      ctx.fillText(price.toFixed(0), PADDING - 10, y);
    }

    const candleColor = isBullish ? "#10b981" : "#ef4444";
    const candleStrokeColor = isBullish ? "#059669" : "#dc2626";

    ctx.strokeStyle = candleColor;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(candleX, topWickY);
    ctx.lineTo(candleX, bodyTopY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(candleX, bodyBottomY);
    ctx.lineTo(candleX, bottomWickY);
    ctx.stroke();

    const bodyHeight = Math.max(bodyBottomY - bodyTopY, 4);
    ctx.fillStyle = candleColor;
    ctx.strokeStyle = candleStrokeColor;
    ctx.lineWidth = 2;
    ctx.fillRect(candleX - candleWidth / 2, bodyTopY, candleWidth, bodyHeight);
    ctx.strokeRect(
      candleX - candleWidth / 2,
      bodyTopY,
      candleWidth,
      bodyHeight
    );

    ctx.fillStyle = "#94a3b8";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("HIGH", candleX - 70, topWickY);
    ctx.fillText("LOW", candleX - 70, bottomWickY);
  }, [high, low, bodyTop, bodyBottom, range, isBullish]);

  return (
    <div className="bg-slate-700 rounded-lg p-4">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="border-2 border-slate-600 rounded-lg w-full"
      />
      <p className="text-gray-400 text-center mt-3 text-sm">
        👆 Study this candlestick pattern carefully
      </p>
    </div>
  );
}
