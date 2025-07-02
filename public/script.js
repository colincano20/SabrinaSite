document.addEventListener("DOMContentLoaded", () => {
    // Update how long you've been together
    const startDate = new Date(2025, 3, 12); // Months are 0-indexed, so 3 = April 
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
    document.getElementById("daysCounter").textContent = `${diffDays} days 💕`;
  
    // Random love quote
    
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
    
  
  });
const quotes = [
  {
    caption: "You are my today and all of my tomorrows. – Leo Christopher"
  },
  {
    caption: "In your smile, I see something more beautiful than stars. – Beth Revis"
  },
  {
    caption: "Every moment with you is my favorite."
  },
  {
    caption: "I still get butterflies just thinking about you."
  },
  {
    caption: "You're my person. Always."
  },
  {
    caption: "I love you not only for what you are, but for what I am when I am with you. – Roy Croft"
  },
  {
    caption: "Home is wherever I'm with you."
  },
  {
    caption: "I didn't choose you. My heart did."
  },
  {
    caption: "Forever isn't long enough with you."
  },
  {
    caption: "You're the piece I didn't know was missing."
  },
  {
    caption: "You are my favorite notification."
  },
  {
    caption: "If I had a flower for every time I thought of you, I could walk in my garden forever. – Alfred Tennyson"
  },
  {
    caption: "You make me want to be a better person just by being around you."
  },
  {
    caption: "I look at you and see the rest of my life in front of my eyes."
  },
  {
    caption: "You're the reason I check my phone with a smile."
  },
  {
    caption: "With you, I am home."
  },
  {
    caption: "I didn't know what love was until I met you."
  },
  {
    caption: "You light up my world like nobody else."
  },
  {
    caption: "You're my favorite hello and my hardest goodbye."
  },
  {
    caption: "I could start fires with what I feel for you."
  }
];

function getMemoryOfDay() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    return quotes[dayOfYear % quotes.length];
  }
const memory = getMemoryOfDay();

document.getElementById("memoryCaption").textContent = memory.caption;

  
