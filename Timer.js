let timerInterval;
let seconds = 0;

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  document.getElementById("timer").innerText = formatTime(seconds);
}

function updateTimer() {
  seconds++;
  document.getElementById("timer").innerText = formatTime(seconds);
}

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minute = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  // Convert hours, minutes, and seconds to strings and pad with leading zeros if needed
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // Concatenate the formatted strings with colons to represent the time in HH:MM:SS format
  const formattedTime =
    formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;

  // Return the formatted time string
  return formattedTime;
}
