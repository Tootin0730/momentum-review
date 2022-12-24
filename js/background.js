const images = [
  "Colosseum.jpg",
  "Eiffel.jpg",
  "Ger.jpg",
  "Hagia Sophia.jpg",
  "Hong Kong.jpg",
  "Köln.jpg",
  "Lotte tower.jpg",
  "Louvre.jpg",
  "Parthenon.jpg",
  "Stone mountain.jpg",
  "Zurich.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
