document.addEventListener("DOMContentLoaded", () => {
    // Update how long you've been together
    const startDate = new Date(2025, 3, 12); // Months are 0-indexed, so 3 = April 
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
    document.getElementById("daysCounter").textContent = `${diffDays} days 💕`;
  
    // Random love quote
    const quotes = [
      "You are my today and all of my tomorrows. – Leo Christopher",
      "In your smile, I see something more beautiful than stars. – Beth Revis",
      "Every moment with you is my favorite.",
      "I still get butterflies just thinking about you.",
      "You're my person. Always."
    ];
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
    
  
  });


  
