// Seccion8 component - Bonos de regalo
function createSeccion8() {
    console.log('Seccion8 component loaded');

    // Create main container
    const container = document.createElement('div');
    container.className = 'seccion8';

    // Create main title
    const mainTitle = document.createElement('h2');
    mainTitle.textContent = 'Bonus de Regalo 🎁';
    mainTitle.className = 'seccion8-main-title';

    // Create bonuses container
    const bonusesContainer = document.createElement('div');
    bonusesContainer.className = 'seccion8-bonuses-container';

    // Array of bonuses
    const bonuses = [
        {
            icon: '🎁',
            title: 'Sesión 1:1 de transformación profunda'
        },
        {
            icon: '🎁',
            title: 'Pack Meditaciones y Audios exclusivos de Alta Frecuencia'
        },
        {
            icon: '🎁',
            title: 'Acceso a mini taller Grabado: Energía Femenina y Magnetismo en Relaciones'
        }
    ];

    // Create bonus cards
    bonuses.forEach(bonus => {
        const bonusCard = document.createElement('div');
        bonusCard.className = 'seccion8-bonus-card';

        const iconElement = document.createElement('div');
        iconElement.className = 'seccion8-bonus-icon';
        iconElement.textContent = bonus.icon;

        const starIcon = document.createElement('div');
        starIcon.className = 'seccion8-star-icon';
        starIcon.textContent = '⭐';

        const titleElement = document.createElement('h3');
        titleElement.className = 'seccion8-bonus-title';
        titleElement.textContent = bonus.title;

        bonusCard.appendChild(iconElement);
        bonusCard.appendChild(starIcon);
        bonusCard.appendChild(titleElement);
        bonusesContainer.appendChild(bonusCard);
    });

    // Append elements to main container
    container.appendChild(mainTitle);
    container.appendChild(bonusesContainer);

    // Append to body
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSeccion8);
} else {
    createSeccion8();
}
