export const Basicquestions = [
  {
    id: 1,
    pattern: "Strong Bullish Candle",
    description: "Price went UP",
    candle: { open: 105, high: 150, low: 100, close: 145 },
    correctOpen: "bottom",
    correctClose: "top",
    isBullish: true,
    dialogue: {
      intro:
        "Ah, a strong bullish candle! Buyers are in control. Find the opening price...",
      step1:
        "Good start! Now, where did the market close? Find the closing price.",
      correct:
        "Excellent! You see it now? Open at the bottom, close at the top. That's buying pressure!",
      incorrect:
        "Not quite. Remember, in a bullish candle, price rises from open to close.",
    },
  },
  {
    id: 2,
    pattern: "Strong Bearish Candle",
    description: "Price went DOWN",
    candle: { open: 145, high: 150, low: 100, close: 105 },
    correctOpen: "top",
    correctClose: "bottom",
    isBullish: false,
    dialogue: {
      intro:
        "Observe... a bearish candle. Sellers dominate. Where did the market open?",
      step1:
        "Good observation! Now find where it closed. The sellers won this battle.",
      correct:
        "Perfect! Open at top, close at bottom. Selling pressure throughout!",
      incorrect:
        "Hmm, think again. In bearish candles, price falls from open to close.",
    },
  },
  {
    id: 3,
    pattern: "Hammer (Bullish)",
    description: "Small body at top, long lower wick",
    candle: { open: 130, high: 140, low: 100, close: 135 },
    correctOpen: "bottom",
    correctClose: "top",
    isBullish: true,
    dialogue: {
      intro:
        "Ah, the Hammer! Sellers tried to push down, but buyers fought back. Where did it open?",
      step1: "Wise choice. Now, where did our defenders close the market?",
      correct:
        "Magnificent! The Hammer shows rejection of lower prices. Buyers winning!",
      incorrect:
        "Reconsider, young trader. Look at the small body and the long lower wick.",
    },
  },
  {
    id: 4,
    pattern: "Hanging Man (Bearish)",
    description: "Small body at top, long lower wick",
    candle: { open: 130, high: 140, low: 100, close: 125 },
    correctOpen: "top",
    correctClose: "bottom",
    isBullish: false,
    dialogue: {
      intro:
        "The Hanging Man appears... a warning sign. Find where this candle opened.",
      step1:
        "Good eye! Now locate the close. Even with resistance, sellers prevail.",
      correct: "You're learning well! The Hanging Man suggests weakness ahead.",
      incorrect:
        "Not yet. Study the pattern carefully. The body tells the story.",
    },
  },
];
