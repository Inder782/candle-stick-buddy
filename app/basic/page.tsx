"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Basicquestions } from "@/data/BasicQuestions";

export default function BasicMode() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({
    open: null as string | null,
    close: null as string | null,
  });
  const [isCorrect, setIsCorrect] = useState(false);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<"open" | "close">("open");
  const [attemptCount, setAttemptCount] = useState(0);
  const [maxAttempts] = useState(2); // Allow 2 attempts per question

  const question = Basicquestions[currentQuestion];

  const handleSelectAnswer = (field: string, position: string) => {
    if (!showFeedback) {
      setSelectedAnswers({
        ...selectedAnswers,
        [field]: position,
      });
    }
  };

  const handleSubmit = () => {
    if (currentStep === "open") {
      const openCorrect = selectedAnswers.open === question.correctOpen;
      if (openCorrect) {
        setCurrentStep("close");
      } else {
        setShowFeedback(true);
        setIsCorrect(false);
      }
    } else {
      const openCorrect = selectedAnswers.open === question.correctOpen;
      const closeCorrect = selectedAnswers.close === question.correctClose;
      const allCorrect = openCorrect && closeCorrect;

      setShowFeedback(true);
      setIsCorrect(allCorrect);

      if (allCorrect) {
        setScore(score + 1);
      }

      setAttemptCount(attemptCount + 1);
    }
  };

  const handleRetry = () => {
    if (attemptCount < maxAttempts) {
      setSelectedAnswers({ open: null, close: null });
      setShowFeedback(false);
      setIsCorrect(false);
      setCurrentStep("open");
    }
  };

  const handleNext = () => {
    if (currentQuestion < Basicquestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswers({ open: null, close: null });
      setShowFeedback(false);
      setIsCorrect(false);
      setHoveredPart(null);
      setCurrentStep("open");
      setAttemptCount(0); // Reset attempts for new question
    }
  };

  const quizComplete =
    currentQuestion === Basicquestions.length - 1 &&
    showFeedback &&
    (isCorrect || attemptCount >= maxAttempts);
  const canRetry = !isCorrect && attemptCount < maxAttempts;

  const getDialogue = () => {
    if (currentStep === "open" && !selectedAnswers.open) {
      return question.dialogue.intro;
    }
    if (currentStep === "close" && selectedAnswers.open && !showFeedback) {
      return question.dialogue.step1;
    }
    if (showFeedback) {
      return isCorrect
        ? question.dialogue.correct
        : question.dialogue.incorrect;
    }
    return question.dialogue.intro;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Basic Mode</h1>
          <Link href="/">
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition">
              Back
            </button>
          </Link>
        </div>

        {/* Progress */}
        <div className="bg-slate-700 rounded-lg p-4 mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-300">
              Question {currentQuestion + 1} of {Basicquestions.length}
            </span>
            <span className="text-green-400 font-bold">Score: {score}</span>
          </div>
          <div className="w-full bg-slate-600 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all"
              style={{
                width: `${
                  ((currentQuestion + 1) / Basicquestions.length) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        {!quizComplete ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left - Mr. Market Instructor */}
            <div className="lg:col-span-1">
              <WiseMrMarket
                dialogue={getDialogue()}
                currentStep={currentStep}
                attemptCount={attemptCount}
                maxAttempts={maxAttempts}
              />
            </div>

            {/* Right - Canvas and Controls */}
            <div className="lg:col-span-3">
              <div className="bg-slate-800 rounded-lg p-8">
                {/* Pattern Info */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {question.pattern}
                  </h2>
                  <p className="text-gray-300 text-lg">
                    {question.description}
                  </p>
                </div>

                {/* Canvas Candlestick */}
                <div className="flex justify-center mb-12">
                  <InteractiveCandlestick
                    candle={question.candle}
                    onPartClick={handleSelectAnswer}
                    selectedAnswers={selectedAnswers}
                    showFeedback={showFeedback}
                    correctOpen={question.correctOpen}
                    correctClose={question.correctClose}
                    hoveredPart={hoveredPart}
                    setHoveredPart={setHoveredPart}
                    currentStep={currentStep}
                  />
                </div>

                {/* Feedback */}
                {showFeedback && (
                  <div
                    className={`p-4 rounded-lg mb-6 ${
                      isCorrect ? "bg-green-900" : "bg-red-900"
                    }`}
                  >
                    <p
                      className={`font-semibold mb-3 text-lg ${
                        isCorrect ? "text-green-200" : "text-red-200"
                      }`}
                    >
                      {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
                    </p>
                    <div className="text-gray-200 space-y-1 text-sm">
                      {currentStep === "open" && (
                        <p>
                          <strong>Open is at:</strong>{" "}
                          {question.correctOpen.toUpperCase()}
                        </p>
                      )}
                      {currentStep === "close" && (
                        <>
                          <p>
                            <strong>Close is at:</strong>{" "}
                            {question.correctClose.toUpperCase()}
                          </p>
                        </>
                      )}
                    </div>
                    {!isCorrect && (
                      <p className="text-sm mt-2 text-red-100">
                        Attempts: {attemptCount} / {maxAttempts}
                      </p>
                    )}
                  </div>
                )}

                {/* Buttons */}
                {!showFeedback ? (
                  <button
                    onClick={handleSubmit}
                    disabled={
                      currentStep === "open"
                        ? !selectedAnswers.open
                        : !selectedAnswers.close
                    }
                    className="w-full mt-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition"
                  >
                    {currentStep === "open" ? "Submit Open" : "Submit Close"}
                  </button>
                ) : isCorrect ? (
                  <button
                    onClick={handleNext}
                    className="w-full mt-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
                  >
                    {currentQuestion === Basicquestions.length - 1
                      ? "See Results"
                      : "Next Question"}
                  </button>
                ) : canRetry ? (
                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={handleRetry}
                      className="flex-1 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition"
                    >
                      Try Again ({maxAttempts - attemptCount} attempts left)
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
                    >
                      Skip Question
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={handleNext}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
                    >
                      {currentQuestion === Basicquestions.length - 1
                        ? "See Results"
                        : "Next Question"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Results Screen */
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Quiz Complete!
            </h2>
            <div className="text-6xl font-bold text-green-400 mb-4">
              {score} / {Basicquestions.length}
            </div>
            <p className="text-gray-300 mb-8">
              {score === Basicquestions.length
                ? "🎉 Excellent! You're becoming a true market reader!"
                : score > Basicquestions.length / 2
                ? "👏 Great progress! Keep learning, young trader!"
                : "💪 The market teaches those who listen. Try again!"}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setShowFeedback(false);
                  setSelectedAnswers({ open: null, close: null });
                  setHoveredPart(null);
                  setCurrentStep("open");
                  setAttemptCount(0);
                }}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition"
              >
                Try Again
              </button>
              <Link href="/">
                <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition">
                  Back to Menu
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Wise Mr. Market Mentor Component
function WiseMrMarket({
  dialogue,
  currentStep,
  attemptCount,
  maxAttempts,
}: {
  dialogue: string;
  currentStep: "open" | "close";
  attemptCount: number;
  maxAttempts: number;
}) {
  return (
    <div className="bg-linear-to-br from-emerald-900 to-blue-900 rounded-lg p-4 flex flex-col items-center border-2 border-emerald-700 h-fit">
      {/* Character Avatar - Smaller */}
      <div className="mb-4">
        <svg
          width="120"
          height="140"
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
            fill="#4a90e2"
            stroke="#2c5aa0"
            strokeWidth="1.5"
          />

          {/* Vest */}
          <path
            d="M 60 105 L 90 103 L 120 105 L 118 160 L 62 160 Z"
            fill="#52b788"
            stroke="#2d6a4f"
            strokeWidth="1.5"
          />

          {/* Vest buttons */}
          <circle cx="90" cy="125" r="2" fill="#d4af37" />
          <circle cx="90" cy="140" r="2" fill="#d4af37" />
        </svg>
      </div>

      {/* Speech Bubble - Compact */}
      <div className="bg-emerald-800 border-2 border-emerald-600 rounded p-2 mb-3 relative w-full shadow-lg">
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-l-transparent border-r-transparent border-t-emerald-800"></div>
        <p className="text-emerald-50 text-xs font-semibold text-center leading-tight italic">
          {dialogue}
        </p>
      </div>

      {/* Progress Bar - Compact */}
      <div className="bg-emerald-700 rounded p-2 w-full text-center space-y-2">
        <div className="flex gap-1">
          <div
            className={`flex-1 h-1.5 rounded transition-all ${
              currentStep === "open" ? "bg-blue-400" : "bg-emerald-400"
            }`}
          ></div>
          <div
            className={`flex-1 h-1.5 rounded transition-all ${
              currentStep === "close" ? "bg-blue-400" : "bg-emerald-900"
            }`}
          ></div>
        </div>
        <p className="text-xs text-emerald-100">
          {currentStep === "open" ? "Step 1: OPEN" : "Step 2: CLOSE"}
        </p>
        <p className="text-xs text-emerald-200 font-semibold">
          {attemptCount} / {maxAttempts}
        </p>
      </div>
    </div>
  );
}

// Interactive Canvas Candlestick Component
function InteractiveCandlestick({
  candle,
  onPartClick,
  selectedAnswers,
  showFeedback,
  correctOpen,
  correctClose,
  hoveredPart,
  setHoveredPart,
  currentStep,
}: {
  candle: { open: number; high: number; low: number; close: number };
  onPartClick: (field: string, position: string) => void;
  selectedAnswers: { open: string | null; close: string | null };
  showFeedback: boolean;
  correctOpen: string;
  correctClose: string;
  hoveredPart: string | null;
  setHoveredPart: (part: string | null) => void;
  currentStep: "open" | "close";
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { open, high, low, close } = candle;
  const range = high - low;
  const bodyTop = Math.max(open, close);
  const bodyBottom = Math.min(open, close);
  const isBullish = close > open;

  const CANVAS_WIDTH = 500;
  const CANVAS_HEIGHT = 400;
  const PADDING = 60;
  const CHART_HEIGHT = CANVAS_HEIGHT - 2 * PADDING;
  const WICK_WIDTH = 15;

  const topWickY = PADDING + ((high - high) / range) * CHART_HEIGHT;
  const bodyTopY = PADDING + ((high - bodyTop) / range) * CHART_HEIGHT;
  const bodyBottomY = PADDING + ((high - bodyBottom) / range) * CHART_HEIGHT;
  const bottomWickY = PADDING + ((high - low) / range) * CHART_HEIGHT;

  const candleX = CANVAS_WIDTH / 2;
  const candleWidth = 50;

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (
      x > candleX - candleWidth / 2 &&
      x < candleX + candleWidth / 2 &&
      y > bodyTopY - 10 &&
      y < bodyTopY + 10
    ) {
      onPartClick(currentStep, "top");
      return;
    }

    if (
      x > candleX - candleWidth / 2 &&
      x < candleX + candleWidth / 2 &&
      y > bodyBottomY - 10 &&
      y < bodyBottomY + 10
    ) {
      onPartClick(currentStep, "bottom");
      return;
    }

    if (
      x > candleX - WICK_WIDTH / 2 &&
      x < candleX + WICK_WIDTH / 2 &&
      y > topWickY - 5 &&
      y < bodyTopY + 5
    ) {
      onPartClick(currentStep, "top");
      return;
    }

    if (
      x > candleX - WICK_WIDTH / 2 &&
      x < candleX + WICK_WIDTH / 2 &&
      y > bodyBottomY - 5 &&
      y < bottomWickY + 5
    ) {
      onPartClick(currentStep, "bottom");
      return;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let part = null;

    if (
      x > candleX - candleWidth / 2 &&
      x < candleX + candleWidth / 2 &&
      y > bodyTopY - 10 &&
      y < bodyTopY + 10
    ) {
      part = currentStep;
    } else if (
      x > candleX - candleWidth / 2 &&
      x < candleX + candleWidth / 2 &&
      y > bodyBottomY - 10 &&
      y < bodyBottomY + 10
    ) {
      part = currentStep;
    }

    setHoveredPart(part);
  };

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
    ctx.lineWidth = 3;
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

    const hoverAlpha = 0.4;

    if (hoveredPart || selectedAnswers[currentStep]) {
      if (
        hoveredPart === currentStep ||
        selectedAnswers[currentStep] === "top"
      ) {
        ctx.fillStyle = `rgba(147, 197, 253, ${hoverAlpha})`;
        ctx.fillRect(
          candleX - candleWidth / 2 - 5,
          bodyTopY - 15,
          candleWidth + 10,
          30
        );
      }

      if (
        hoveredPart === currentStep ||
        selectedAnswers[currentStep] === "bottom"
      ) {
        ctx.fillStyle = `rgba(147, 197, 253, ${hoverAlpha})`;
        ctx.fillRect(
          candleX - candleWidth / 2 - 5,
          bodyBottomY - 15,
          candleWidth + 10,
          30
        );
      }
    }

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center";

    ctx.fillStyle = "#94a3b8";
    ctx.fillText("HIGH", candleX - 80, topWickY);

    ctx.fillStyle = "#94a3b8";
    ctx.fillText("LOW", candleX - 80, bottomWickY);
  }, [
    hoveredPart,
    selectedAnswers,
    isBullish,
    high,
    low,
    bodyTop,
    bodyBottom,
    range,
    currentStep,
  ]);

  return (
    <div className="bg-slate-700 rounded-lg p-8">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        onClick={handleCanvasClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredPart(null)}
        className="border-2 border-slate-600 rounded-lg cursor-crosshair"
      />
      <p className="text-gray-400 text-center mt-4 text-sm">
        💡 Click on the candle to select {currentStep.toUpperCase()}
      </p>
    </div>
  );
}
