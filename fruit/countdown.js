// Set the countdown end time (milliseconds)
const countdownEndTime = new Date('2024-12-31T23:59:59').getTime();

// Update the countdown every second
const countdownTimer = setInterval(() => {
  // Get the current time
  const now = new Date().getTime();
  
  // Calculate the remaining time
  let distance = countdownEndTime - now;
  
  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  distance %= (1000 * 60 * 60 * 24);
  const hours = Math.floor(distance / (1000 * 60 * 60));
  distance %= (1000 * 60 * 60);
  const minutes = Math.floor(distance / (1000 * 60));
  distance %= (1000 * 60);
  const seconds = Math.floor(distance / 1000);
  
  // Display the countdown
  document.getElementById('countdown').innerHTML = `
    <div class="flex gap-5">
        <div  class="flex flex-col gap-5">${days} <span class="text-sm">Days</span></div>:
        <div  class="flex flex-col gap-5">${hours} <span class="text-sm">Hours</span></div>:
        <div  class="flex flex-col gap-5">${minutes} <span class="text-sm">Minutes</span></div>:
        <div  class="flex flex-col gap-5">${seconds} <span class="text-sm">Seconds</span></div>
    </div>
  `;
  
  // If the countdown is over, stop the timer
  if (distance <= 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = 'Countdown expired!';
  }
}, 1000);
