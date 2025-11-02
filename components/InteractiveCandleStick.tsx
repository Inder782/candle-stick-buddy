import { useRef, useEffect } from "react";

export function InteractiveCandlestick({
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
