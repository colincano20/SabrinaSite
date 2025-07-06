const memories = [
  {
    src: "images/image9.jpg", //not working
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
  {
    src: "images/image6.jpg",
    caption: "Hangout at my house 🏠"
  },
  {
    src: "images/image7.jpg",
    caption: "Sloanes Grad Party🌅"
  },
  {
    src: "images/image8.jpg",
    caption: "Hangout at my house 🏠"
  },
  {
    src: "images/image10.JPG", 
    caption: "Picnic Date🧺"
  },
  {
    src: "images/image11.jpg",
    caption: "Sloanes Grad Party🌅"
  },
  {
    src: "images/image12.JPG",
    caption: "Hangout at my house 🏠"
  },
  {
    src: "images/image13.JPG", 
    caption: "Picnic Date🧺"
  },
  {
    src: "images/image14.jpg",
    caption: "Sloanes Grad Party🌅"
  },
  {
    src: "images/image15.jpg",
    caption: "Hangout at my house 🏠"
  },
  {
    src: "images/image16.JPG", 
    caption: "Picnic Date🧺"
  },
  // Add more memories as needed
];
const container = document.getElementById("memoriesContainer");

    memories.forEach(memory => {
      const div = document.createElement("div");
      div.classList.add("memory");

      const img = document.createElement("img");
      img.src = memory.src;
      img.alt = memory.caption;

      

      div.appendChild(img);
    
      container.appendChild(div);
    });
