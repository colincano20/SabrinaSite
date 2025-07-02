 let countdownInterval;
 function updateCountdown() {
    const futureDate = new Date(2025, 6, 12); // Months are 0-indexed, so 6 = July
    console.log(futureDate);
    const now = new Date();
    const timestamp1 = futureDate.getTime();
    const timestamp2 = now.getTime();
    const diff = Math.abs(timestamp1 - timestamp2);
    
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
     document.getElementById("countdown").innerHTML =
                `<b>${day} days, ${hour} hours, ${minute} minutes, ${seconds} seconds</b> ⏳`;


    
    if (diff <= 0) {
        return "The future has arrived!";
    }
    
  
}
function updateCountdown2(){
    const futureDate = new Date(2025, 7, 13); // Months are 0-indexed, so 6 = July
    console.log(futureDate);
    const now = new Date();
    const timestamp1 = futureDate.getTime();
    const timestamp2 = now.getTime();
    const diff = Math.abs(timestamp1 - timestamp2);
    
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
     document.getElementById("countdown2").innerHTML =
                `<b>${day} days, ${hour} hours, ${minute} minutes, ${seconds} seconds</b> ⏳`;

}

countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run immediately
countdownInterval = setInterval(updateCountdown2, 1000);
    updateCountdown2(); // Run immediately