const memories = [
  {
    src: "images/image1.heic", //not working
    caption: "That time we got ice cream and it melted everywhere 🍦"
  },
  {
    src: "images/image2.jpg",
    caption: "Erie Illinois Madness 🤸‍♂️"
  },
  {
    src: "images/image3.jpeg",
    caption: "Sloanes Grad Party🌅"
  },
  {
    src: "images/image4.jpg",
    caption: "Hangout at my house 🏠"
  },
  {
    src: "images/image5.JPG", 
    caption: "Picnic Date🧺"
  },
  // Add more memories as needed
];

// Use the day of the year to pick a consistent memory per day
function getMemoryOfDay() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return memories[dayOfYear % memories.length];
}

const memory = getMemoryOfDay();
document.getElementById("memoryImage").src = memory.src;
document.getElementById("memoryCaption").textContent = memory.caption;
