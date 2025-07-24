
const notes = {
  "2025-07-08": "Day 1 without you and I already miss your smile. Have so much fun in Bosnia!",
  "2025-07-09": "Day 2 — You poor thing, I hope these long flights aren't too exhausting. Make sure to eat well and rest up!",
  "2025-07-10": "Day 3 — First full day in Bosnia! I hope you're rested and excited to explore. Remember to take lots of pictures!",
  "2025-07-11": "Day 4 — It's days like these I wish I could teleport to you.I love you so much, Sabrina.",
  "2025-07-12": "Day 5 — I hope you're having the time of your life. I can't wait to hear all about it.",
  "2025-07-13": "Day 6 — Counting down the days till I see your face again!",
  "2025-07-14": "Day 7 — I miss our late night facetimes. Hope you're making new memories!",
  "2025-07-15": "Day 8 — Hi Sabrina, I just wanted to say how happy I am of you for actually going on this trip. Text me 'ping pong balls' for a funny joke.",
  "2025-07-16": "Day 9 — Our photos together keep me smiling.",
  "2025-07-17": "Day 10 — I hope you're taking lots of pictures. I want to see everything when you get back!",
  "2025-07-18": "Day 11 — I miss you so much, but I know you're having an amazing time. Just remember, I'm always here for you.",
  "2025-07-19": "Day 12 — I hope you're still checking these notes. I just wanted to remind you how much I love you.",
  "2025-07-20": "Day 13 — Beba, I hope you're enjoying every moment. You are so loved and missed.",
  "2025-07-21": "Day 14 — I can't believe it's been two weeks already. Time flies when you're having fun, right?",
  "2025-07-22": "Day 15 — Last day of your trip! I hope you had the best time ever. Get home safe!",
  "2025-07-23": "Day 16 — You should be home today! I can't wait to see you on Saturday. I love you so much, Sabrina.",
  "2025-07-24": "I kept thinking about your sleepy voice this morning. Miss hearing you say 'good morning' all soft and raspy.",
  "2025-07-25": "I hope Bosnia didn't steal you forever. But if it did, we can visit together.",
  "2025-07-26": "Your eyes and that smile are so perfect. I looked at a picture of you today and I was in awe.",
  "2025-07-27": "Sabrina, I hope you're taking care of yourself. Remember to drink water and eat something other than citric acid",
  "2025-07-28": "I miss our random late-night talks. I hope you have a great week. ",
  "2025-07-29": "I thought of the way you laugh today and it made me smile. I can't wait to hear it in person again.",
  "2025-07-30": "If I had a dollar for every time I wanted to kiss you today, I'd be able to fly us to Bosnia and surprise your family.",
  "2025-07-31": "I miss how you randomly stim. ' such a small thing but I notice it every time and it is so cute.",
  "2025-08-01": "You are the definition of golden hour. Seriously Sabrina, you just glow, inside and out.",
  "2025-08-02": "I miss how you feel when I am inside you. I can't wait to feel that again xd uwu",
  "2025-08-03": "I miss your hugs so much. I can't wait to hold you again and never let go.",
  "2025-08-04": "I miss making YOU giggle.",
  "2025-08-05": "Lowkey miss ur silly faces. I am partially moving in today!",
  "2025-08-06": "I thought about you today. Then I did it again. And again. And then 20 more times.",
  "2025-08-07": "I can't wait to have you back in my arms. That first hug might actually heal something in me.",
  "2025-08-08": "Random but important: I love when you send me TikToks and Instagram reels.",
  "2025-08-09": "I saw something that smelled like the perfume I bough you today and it made me think of you. I hope you're wearing it rn.",
  "2025-08-10": "No one has ever made me feel the way you do — calm, happy, and just… whole.",
  "2025-08-11": "I miss rubbing your back while you pretend not to fall asleep on FaceTime.",
  "2025-08-12": "Your texts still make me smile like they did the first time we started talking. Maybe even more now.",
  "2025-08-13": "Don’t ask me how I know, but I feel like you looked extra pretty today.",
  "2025-08-14": "Your voice is still stuck in my head. I don’t even want it out.",
  "2025-08-15": "I miss watching you talk about things you love. The way your face lights up — I live for that.",
  "2025-08-16": "Somewhere in Bosnia there’s a place that’s lucky to have you standing in it today.",
  "2025-08-17": "When you get back, I’m taking you on a date. No arguing. Yes, I already have ideas.",
  "2025-08-18": "I hope today you laughed hard, took a good photo, and felt a little burst of joy. If not, this note is trying.",
  "2025-08-19": "You’ve got this peaceful energy when you're calm, and I swear it makes everything else feel okay too.",
  "2025-08-20": "Not to be cheesy, but being your boyfriend is kinda the best thing I’ve ever done.",
  "2025-08-21": "I’d literally listen to a voice memo of you just rambling about your day. You’re my favorite background noise.",
  "2025-08-22": "One day closer to seeing you. And yeah, I’ve been counting. I love you, Sabrina.",


};

const today = new Date().toISOString().split('T')[0];
const noteText = notes[today] || "No note today, but just know I’m thinking of you. ❤️ They start 7/8";

document.getElementById("note-date").textContent = new Date().toDateString();
document.getElementById("note-text").textContent = noteText;
