// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const mins = document.getElementById("mins");
  const seconds = document.getElementById("seconds");

  const updateCountdown = (deadline) => {
    const currentTime = new Date();
    const diff = deadline - currentTime;

    // Stop countdown when deadline passes
    if (diff <= 0) {
      days.textContent = "0";
      hours.textContent = "00";
      mins.textContent = "00";
      seconds.textContent = "00";
      clearInterval(timerInterval);
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    days.textContent = d;
    hours.textContent = h.toString().padStart(2, "0");
    mins.textContent = m.toString().padStart(2, "0");
    seconds.textContent = s.toString().padStart(2, "0");
  };

  const targetDate = new Date("2025-12-31T00:00:00"); // ✅ future date
  updateCountdown(targetDate); // Run immediately

  // ✅ run every second
  const timerInterval = setInterval(() => updateCountdown(targetDate), 1000);
});
