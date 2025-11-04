"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Basicquestions } from "@/data/BasicQuestions";
import { WiseMrMarket } from "@/components/WiseMrMarket";
import { InteractiveCandlestick } from "@/components/InteractiveCandleStick";

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
                theme="emerald"
                showSteps={true}
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
