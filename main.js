const countdownDate = new Date('2025-06-10T19:00:00-05:00').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "¡El partido ha comenzado!";
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

const darkBtn = document.getElementById('darkmode-toggle');
darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});