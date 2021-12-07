const quotes = [
  {
    quote: "Doing a thing well is often a waste of time.",
    author: "Robert Byrne",
  },
  {
    quote: "Nothing is a waste of time if you use the experience wisely.",
    author: "Auguste Rodin",
  },
  {
    quote: "Regret for wasted time is more wasted time.",
    author: "Mason Cooley",
  },
  {
    quote:
      "You have to have confidence in your ability, and then be tough enough to follow through.",
    author: "Rosalynn Carter",
  },
  {
    quote: "The gratification comes in the doing, not in the results.",
    author: "James Dean",
  },
  {
    quote: "Never leave that 'till tomorrow which you can do today.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote: "Great hopes make great men.",
    author: "Thomas Fuller",
  },
  {
    quote: "The most wasted of all days is one without laughter.",
    author: "E. E. Cummings",
  },
  {
    quote: "What we dwell on is who we become.",
    author: "Oprah Winfrey",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
