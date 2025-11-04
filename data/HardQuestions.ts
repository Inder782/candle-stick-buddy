export const Hardquestions = [
  {
    id: 1,
    type: "three-candle",
    candles: [
      { open: 140, high: 145, low: 100, close: 105 }, // Bearish
      { open: 105, high: 110, low: 100, close: 108 }, // Small
      { open: 108, high: 150, low: 105, close: 145 }, // Bullish
    ],
    description: "Long bearish, small indecision, long bullish candle",
    options: [
      {
        label: "Morning Star (Bullish)",
        value: "morning-star-bullish",
        correct: true,
      },
      {
        label: "Evening Star (Bearish)",
        value: "evening-star-bearish",
        correct: false,
      },
      {
        label: "Three Black Crows (Bearish)",
        value: "three-black-crows-bearish",
        correct: false,
      },
      {
        label: "Bullish Engulfing (Bullish)",
        value: "bullish-engulfing-bullish",
        correct: false,
      },
    ],
    dialogue: {
      intro:
        "Three candles. Analyze the sequence carefully. What reversal pattern is this?",
      correct:
        "Perfect! Morning Star - long bearish, tiny indecision candle, then strong bullish. This marks a BOTTOM reversal with very high reliability!",
      incorrect:
        "Not quite. Look at the sequence: bearish → small → bullish. That's the classic Morning Star formation signaling a bullish reversal!",
    },
  },
  {
    id: 2,
    type: "three-candle",
    candles: [
      { open: 100, high: 140, low: 100, close: 135 }, // Bullish
      { open: 135, high: 140, low: 130, close: 135 }, // Small
      { open: 135, high: 145, low: 105, close: 110 }, // Bearish
    ],
    description: "Long bullish, small indecision, long bearish candle",
    options: [
      {
        label: "Morning Star (Bullish)",
        value: "morning-star-bullish",
        correct: false,
      },
      {
        label: "Evening Star (Bearish)",
        value: "evening-star-bearish",
        correct: true,
      },
      {
        label: "Bullish Engulfing (Bullish)",
        value: "bullish-engulfing-bullish",
        correct: false,
      },
      {
        label: "Three Black Crows (Bearish)",
        value: "three-black-crows-bearish",
        correct: false,
      },
    ],
    dialogue: {
      intro:
        "Three candles forming at a top. What bearish reversal pattern do you see?",
      correct:
        "Excellent! Evening Star - long bullish, tiny indecision, then strong bearish. This marks a TOP reversal with very high reliability!",
      incorrect:
        "Think again. Look at the sequence: bullish → small → bearish. That's the Evening Star formation signaling a bearish reversal!",
    },
  },
  {
    id: 3,
    type: "three-candle",
    candles: [
      { open: 140, high: 145, low: 100, close: 105 }, // Long Bearish
      { open: 105, high: 110, low: 100, close: 103 }, // Second Bearish
      { open: 103, high: 108, low: 95, close: 100 }, // Third Bearish
    ],
    description: "Three consecutive long bearish candles",
    options: [
      {
        label: "Three Black Crows (Bearish)",
        value: "three-black-crows-bearish",
        correct: true,
      },
      {
        label: "Bearish Engulfing (Bearish)",
        value: "bearish-engulfing-bearish",
        correct: false,
      },
      {
        label: "Evening Star (Bearish)",
        value: "evening-star-bearish",
        correct: false,
      },
      {
        label: "Morning Star (Bullish)",
        value: "morning-star-bullish",
        correct: false,
      },
    ],
    dialogue: {
      intro:
        "Three candles in a row. All moving in the same direction. What is this pattern?",
      correct:
        "Perfect! Three Black Crows - three consecutive strong bearish candles indicating powerful selling pressure with ~78% accuracy for sustained downtrend!",
      incorrect:
        "Not quite. Three consecutive bearish candles with strong selling pressure - that's Three Black Crows!",
    },
  },
  {
    id: 4,
    type: "two-candle",
    candles: [
      { open: 140, high: 145, low: 100, close: 105 }, // Small Bearish
      { open: 105, high: 150, low: 100, close: 140 }, // Large Bullish
    ],
    description:
      "Small bearish candle followed by large bullish candle that engulfs it",
    options: [
      {
        label: "Bullish Engulfing (Bullish)",
        value: "bullish-engulfing-bullish",
        correct: true,
      },
      {
        label: "Bearish Engulfing (Bearish)",
        value: "bearish-engulfing-bearish",
        correct: false,
      },
      {
        label: "Hammer (Bullish)",
        value: "hammer-bullish",
        correct: false,
      },
      {
        label: "Shooting Star (Bearish)",
        value: "shooting-star-bearish",
        correct: false,
      },
    ],
    dialogue: {
      intro:
        "Two candles. The second completely engulfs the first. What powerful reversal is this?",
      correct:
        "Excellent! Bullish Engulfing - a large bullish candle completely covers the previous small bearish one. Buyers have taken control! Highly reliable reversal signal!",
      incorrect:
        "Look closely. The large bullish candle completely covers the small bearish one. That's Bullish Engulfing - a strong bullish reversal!",
    },
  },
  {
    id: 5,
    type: "two-candle",
    candles: [
      { open: 100, high: 140, low: 100, close: 135 }, // Large Bullish
      { open: 135, high: 145, low: 105, close: 110 }, // Small Bearish
    ],
    description:
      "Large bullish candle followed by small bearish candle that is engulfed",
    options: [
      {
        label: "Bearish Engulfing (Bearish)",
        value: "bearish-engulfing-bearish",
        correct: true,
      },
      {
        label: "Bullish Engulfing (Bullish)",
        value: "bullish-engulfing-bullish",
        correct: false,
      },
      {
        label: "Shooting Star (Bearish)",
        value: "shooting-star-bearish",
        correct: false,
      },
      {
        label: "Hammer (Bullish)",
        value: "hammer-bullish",
        correct: false,
      },
    ],
    dialogue: {
      intro:
        "Two candles. The first is large and bullish. Look at what the second does.",
      correct:
        "Perfect! Bearish Engulfing - a large bearish candle completely covers the previous bullish one. Sellers are dominating! Powerful bearish reversal!",
      incorrect:
        "The large bearish candle completely covers the small bullish one. That's Bearish Engulfing - a strong bearish reversal!",
    },
  },
  {
    id: 6,
    type: "three-candle",
    candles: [
      { open: 140, high: 145, low: 100, close: 105 }, // Bearish
      { open: 100, high: 105, low: 100, close: 103 }, // Bearish
      { open: 103, high: 108, low: 95, close: 98 }, // Bearish Continues
    ],
    description: "Three consecutive strong bearish candles with selling",
    options: [
      {
        label: "Three Black Crows (Bearish)",
        value: "three-black-crows-bearish",
        correct: true,
      },
      {
        label: "Morning Star (Bullish)",
        value: "morning-star-bullish",
        correct: false,
      },
      {
        label: "Bearish Engulfing (Bearish)",
        value: "bearish-engulfing-bearish",
        correct: false,
      },
      {
        label: "Evening Star (Bearish)",
        value: "evening-star-bearish",
        correct: false,
      },
    ],
    dialogue: {
      intro:
        "Three consecutive candles. All bearish. What pattern indicates sustained downtrend?",
      correct:
        "Excellent! Three Black Crows - three strong consecutive bearish candles with ~78% accuracy for a sustained downtrend. Very powerful bearish signal!",
      incorrect:
        "Three consecutive strong bearish candles showing consistent selling pressure - that's Three Black Crows!",
    },
  },
  {
    id: 7,
    type: "multi-candle",
    candles: [
      { open: 150, high: 151, low: 120, close: 125 }, // Bearish 1
      { open: 125, high: 129, low: 109, close: 112 }, // Bearish 2
      { open: 112, high: 114, low: 98, close: 102 }, // Bearish 3
      { open: 102, high: 150, low: 100, close: 145 }, // LARGE BULLISH
    ],
    description:
      "Three bearish candles followed by one extremely large bullish candle closing above the first open",
    options: [
      {
        label: "Bearish Three Line Strike (Bearish)",
        value: "bearish-three-line-strike-bearish",
        correct: true,
      },
      {
        label: "Morning Star (Bullish)",
        value: "morning-star-bullish",
        correct: false,
      },
      {
        label: "Bullish Engulfing (Bullish)",
        value: "bullish-engulfing-bullish",
        correct: false,
      },
      {
        label: "Three Black Crows (Bearish)",
        value: "three-black-crows-bearish",
        correct: false,
      },
    ],
    dialogue: {
      intro:
        "Four candles. Three bearish, then one HUGE bullish candle. Very rare and powerful pattern. What is it?",
      correct:
        "Perfect! Bullish Three Line Strike - three bearish candles followed by a massive bullish candle closing above the first open. ~84% accuracy! Extremely powerful reversal!",
      incorrect:
        "Three bearish candles followed by an enormous bullish candle that closes above the first open - that's the rare Bullish Three Line Strike with ~84% accuracy!",
    },
  },
  {
    id: 8,
    type: "two-candle",
    candles: [
      { open: 100, high: 140, low: 100, close: 135 }, // Large Bullish
      { open: 135, high: 150, low: 135, close: 138 }, // Small gap + bearish
    ],
    description: "Large bullish candle, then small bearish at the top",
    options: [
      {
        label: "Shooting Star (Bearish)",
        value: "shooting-star-bearish",
        correct: true,
      },
      {
        label: "Hammer (Bullish)",
        value: "hammer-bullish",
        correct: false,
      },
      {
        label: "Bearish Engulfing (Bearish)",
        value: "bearish-engulfing-bearish",
        correct: false,
      },
      {
        label: "Evening Star (Bearish)",
        value: "evening-star-bearish",
        correct: false,
      },
    ],
    dialogue: {
      intro:
        "At a market top, a small body with a long upper wick. What rejection pattern signals weakness?",
      correct:
        "Excellent! Shooting Star - small body at top with long upper wick showing rejection at resistance. One of the most reliable single-candle patterns for bearish reversal!",
      incorrect:
        "Small body with a long upper wick at the top showing price rejection. That's the Shooting Star - a powerful bearish signal!",
    },
  },
  {
    id: 9,
    type: "two-candle",
    candles: [
      { open: 140, high: 145, low: 100, close: 105 }, // Small bearish
      { open: 105, high: 110, low: 100, close: 108 },
      { open: 105, high: 145, low: 100, close: 140 }, // Small bullish
    ],
    description: "Gap down then gap up with small candles",
    options: [
      {
        label: "Bullish Abandoned Baby (Bullish)",
        value: "bullish-abandoned-baby-bullish",
        correct: true,
      },
      {
        label: "Morning Star (Bullish)",
        value: "morning-star-bullish",
        correct: false,
      },
      {
        label: "Bullish Engulfing (Bullish)",
        value: "bullish-engulfing-bullish",
        correct: false,
      },
      {
        label: "Hammer (Bullish)",
        value: "hammer-bullish",
        correct: false,
      },
    ],
    dialogue: {
      intro:
        "Very rare pattern. Gap down, small candle, then gap up. Extreme sentiment shift. What is it?",
      correct:
        "Perfect! Bullish Abandoned Baby - a rare three-candle gap down/doji/gap up pattern. ~70% accuracy. Signals a MAJOR shift in sentiment. Very powerful reversal!",
      incorrect:
        "This rare pattern involves gaps in different directions with small indecision candles - that's the Bullish Abandoned Baby!",
    },
  },
  {
    id: 10,
    type: "single-candle",
    candles: [{ open: 120, high: 140, low: 100, close: 135 }],
    description: "Small body at top, long lower wick",
    options: [
      { label: "Hammer (Bullish)", value: "hammer-bullish", correct: true },
      {
        label: "Shooting Star (Bearish)",
        value: "shooting-star-bearish",
        correct: false,
      },
      {
        label: "Doji (Neutral)",
        value: "doji-neutral",
        correct: false,
      },
      {
        label: "Spinning Top (Neutral)",
        value: "spinningtop-neutral",
        correct: false,
      },
    ],
    dialogue: {
      intro:
        "Single candle. Small body at top with extremely long lower wick. Found after a decline. What reversal is this?",
      correct:
        "Excellent! Hammer - a classic reversal candle showing rejection of lower prices. Very popular and reliable when appearing after a decline!",
      incorrect:
        "Small body at top with long lower wick = rejection of lower prices = Hammer! Classic bullish reversal pattern!",
    },
  },
];
