const notes = {
  "2025-07-08": "Day 1 without you and I already miss your smile. Have so much fun in Bosnia!",
  "2025-07-09": "Day 2 — You poor thing, I hope these long flights aren't too exhausting. Make sure to eat well and rest up!",
  "2025-07-10": "Day 3 — First full day in Bosnia! I hope you're rested and excited to explore. Remember to take lots of pictures!",
  "2025-07-11": "Day 4 — It's days like these I wish I could teleport to you.I love you so much, Sabrina.",
  "2025-07-12": "Day 5 — I hope you're having the time of your life. I can't wait to hear all about it.",
  "2025-07-13": "Day 6 — Counting down the days till I see your face again!",
  "2025-07-14": "Day 7 — I miss our late night facetimes. Hope you're making new memories!",
  "2025-07-15": "Day 8 — Hi Sabrina, I just wanted to say how happy I am of you for taking this trip. You're so brave and adventurous.",
  "2025-07-16": "Day 9 — Our photos together keep me smiling.",
  "2025-07-17": "Day 10 — I hope you're taking lots of pictures. I want to see everything when you get back!",
  "2025-07-18": "Day 11 — I miss you so much, but I know you're having an amazing time. Just remember, I'm always here for you.",
  "2025-07-19": "Day 12 — I hope you're still checking these notes. I just wanted to remind you how much I love you.",
  "2025-07-20": "Day 13 — Beba, I hope you're enjoying every moment. You are so loved and missed.",
  "2025-07-21": "Day 14 — I can't believe it's been two weeks already. Time flies when you're having fun, right?",
  "2025-07-22": "Day 15 — Last day of your trip! I hope you had the best time ever. Get home safe!",
  "2025-07-23": "Day 16 — You should be home today! I can't wait to see you. I love you so much, Sabrina.",
};

const today = new Date().toISOString().split('T')[0];
const noteText = notes[today] || "No note today, but just know I’m thinking of you. ❤️ They start 7/8";

document.getElementById("note-date").textContent = new Date().toDateString();
document.getElementById("note-text").textContent = noteText;
