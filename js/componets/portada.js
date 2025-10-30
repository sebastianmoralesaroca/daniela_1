// Portada component
function createPortada() {
    console.log('Portada component loaded');

    // Create portada container
    const portada = document.createElement('div');
    portada.className = 'portada';

    // Create title
    const title = document.createElement('h2');
    title.textContent = 'Inscripciones terminan en';
    title.className = 'portada-title';

    // Create countdown container
    const countdown = document.createElement('div');
    countdown.className = 'countdown';
    countdown.id = 'countdown';

    // Append elements
    portada.appendChild(title);
    portada.appendChild(countdown);
    document.body.appendChild(portada);

    // Set target date (example: 30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    // Countdown logic
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdown.innerHTML = '<p>¡Inscripciones cerradas!</p>';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `
            <div class="time-box">
                <span class="time-value">${days}</span>
                <span class="time-label">Días</span>
            </div>
            <div class="time-box">
                <span class="time-value">${hours}</span>
                <span class="time-label">Horas</span>
            </div>
            <div class="time-box">
                <span class="time-value">${minutes}</span>
                <span class="time-label">Minutos</span>
            </div>
            <div class="time-box">
                <span class="time-value">${seconds}</span>
                <span class="time-label">Segundos</span>
            </div>
        `;
    }

    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createPortada);
} else {
    createPortada();
}
