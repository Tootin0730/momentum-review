const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Never go on trips with anyone you do not love.",
    author: "Hemmingway",
  },
  {
    quote: "To travel is to live.",
    author: "Hans Christian Anderson",
  },
  {
    quote: "We wander for distraction, bubt we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
