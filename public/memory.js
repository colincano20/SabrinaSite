const memories = [
  {
    src: "images/image15.JPG", //not working
    caption: "ATM Machine",
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
  {
    src: "images/image6.JPG",
    caption: "Saint Charles Car"
  },
  {
    src: "images/image7.JPG",
    caption: "Bojames"
  },
  {
    src: "images/image8.JPG",
    caption: "Spoco Kissing"
  },
  {
    src: "images/image9.JPG", 
    caption: "Brothers Booth"
  },
  {
    src: "images/image10.JPG",
    caption: "Sabrina's Dorm"
  },
  {
    src: "images/image11.JPG",
    caption: "Elrays"
  },
  {
    src: "images/image12.JPG", 
    caption: "Spoco I AM MUSIC"
  },
  {
    src: "images/image13.JPG",
    caption: "Tyler's Dorm"
  },
  {
    src: "images/image14.JPG",
    caption: "After Shower"
  },
  {
    src: "images/image16.JPG",
    caption: "Reunion"
  },
  {
    src: "images/image17.JPG",
    caption: "Parking Garage"
  },
  {
    src: "images/image18.JPG",
    caption: "Selfie of us together"
  },
  {
    src: "images/image19.JPG",
    caption: "Hotel Mirror Photo"
  },
  {
    src: "images/image20.JPG",
    caption: "Lunch at Chilis"
  },
  {
    src: "images/image21.JPG",
    caption: "Main Event"
  },
  {
    src: "images/image22.JPG",
    caption: "Mirror Picture at your house"
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
