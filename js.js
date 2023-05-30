// Launch Date
let launchDate = '1 January 2024 05:00 PM';

// Added Launch In HTML
document.querySelector('.launch-date').innerHTML = launchDate;

// Display Countdown Using <span> Tags
let inputs = document.querySelectorAll('span');

function countDown() {
  // End Date
  let end = new Date(launchDate);

  // Current Date
  let start = new Date();

  // Difference from Launch Date to till Current date
  // Returns Milliseconds as difference convert to seconds divided by 1000
  let diff = (end - start) / 1000;

  if (diff < 0) return;

  // Convert Into Days
  inputs[0].innerHTML = Math.floor(diff / 3600 / 24);

  // Hours
  inputs[1].innerHTML = Math.floor((diff / 3600) % 24);

  // Minutes
  inputs[2].innerHTML = Math.floor((diff / 60) % 60);

  // Seconds
  inputs[3].innerHTML = Math.floor(diff) % 60;
}

// Update Live
setInterval(() => {
  countDown();
}, 1000);
