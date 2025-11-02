"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Interquestions } from "@/data/InterQuestions";
import { WiseMrMarket } from "@/components/WiseMrMarket";

export default function IntermediateMode() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [attemptCount, setAttemptCount] = useState(0);
  const [maxAttempts] = useState(2);

  const question = Interquestions[currentQuestion];

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
    if (currentQuestion < Interquestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(false);
      setAttemptCount(0);
    }
  };

  const quizComplete =
    currentQuestion === Interquestions.length - 1 &&
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
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Intermediate Mode</h1>
          <div className="flex items-center gap-4">
            <span className="text-green-400 font-bold text-base">
              Score: {score}/{Interquestions.length}
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
                width: `${
                  ((currentQuestion + 1) / Interquestions.length) * 100
                }%`,
              }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Question {currentQuestion + 1} of {Interquestions.length}
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
                theme="purple"
                showSteps={false}
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
                    {currentQuestion === Interquestions.length - 1
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
                    {currentQuestion === Interquestions.length - 1
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
              {score} / {Interquestions.length}
            </div>
            <p className="text-gray-300 mb-8 text-base leading-relaxed">
              {score === Interquestions.length
                ? "🎉 Outstanding! You mastered candlestick patterns!"
                : score > Interquestions.length * 0.7
                ? "👏 Excellent progress! You're a pattern expert!"
                : score > Interquestions.length * 0.5
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
