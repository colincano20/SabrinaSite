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
