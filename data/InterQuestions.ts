export const Interquestions = [
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
    candle: { open: 140, high: 140, low: 100, close: 125 },
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
    candle: { open: 135, high: 140, low: 100, close: 140 },
    description:
      "T-shaped candlestick with a very small or non-existent top and a long lower shadow",
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
    candle: { open: 120, high: 145, low: 100, close: 100 },
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
    candle: { open: 117, high: 135, low: 105, close: 120 },
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
    candle: { open: 115, high: 145, low: 100, close: 105 },
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
