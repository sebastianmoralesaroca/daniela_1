// Container4 component - Gemi
function createContainer4() {
    console.log('Container4 component loaded and restructured by Gemi');

    // 1. Create main container (the one the original function was creating)
    const container = document.createElement('div');
    container.className = 'container4';

    // 2. Create main title
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = '¡Descubre Nuestra Sección Destacada!';
    mainTitle.className = 'container4-main-title'; // Clase para estilos del título principal

    // 3. Create secondary container (the main wrapper for content)
    const secondaryContainer = document.createElement('div');
    secondaryContainer.className = 'container4-secondary'; // Clase para el div secundario

    // 4. Create an inner wrapper for the title and logo (for flexible layout)
    const headerWrapper = document.createElement('div');
    headerWrapper.className = 'secondary-header';

    // 5. Create a smaller title (inside secondary div)
    const subtitle = document.createElement('h3');
    subtitle.textContent = 'En este método vas a:';
    subtitle.className = 'secondary-subtitle'; // Clase para estilos del título pequeño

    // 6. Create logo element (inside secondary div)
    const logoDiv = document.createElement('div');
    logoDiv.className = 'secondary-logo';
    const logoImg = document.createElement('img');
    logoImg.src = 'assets/imagen.png'; // Cambié la ruta/nombre si deseas uno diferente
    logoImg.alt = 'Logo Descriptivo';
    logoDiv.appendChild(logoImg);

    // Append title and logo to their wrapper
    headerWrapper.appendChild(subtitle); // Colocamos el título pequeño
    headerWrapper.appendChild(logoDiv); // Colocamos el logo

    // 7. Create an unordered list (List!) for the 6 texts
    const textList = document.createElement('ul');
    textList.className = 'secondary-text-list';

    // Array of 6 texts
    const texts = [
        'Romper los patrones que te mantienen en vínculos donde no eres valorada.',
        'Resetear tu energía emocional para dejar de vivir desde la culpa y el autosacrificio.',
        'Reprogramar tus hábitos y pensamientos para elegirte con coherencia cada día.',
        'Reencontrarte contigo, con la mujer segura, tranquila y magnética que siempre estuvo ahí.',
        'Vas a dejar de intentar encajar en relaciones que te quedan pequeñas.',
    ];

    // Create list items (LI) for each text
    texts.forEach(text => {
        const listItem = document.createElement('li');
        listItem.textContent = text;
        textList.appendChild(listItem);
    });

    // Create CTA button
    const ctaButton = document.createElement('button');
    ctaButton.textContent = 'Sí, quiero vivir DICHOSA';
    ctaButton.className = 'secondary-cta-button';

    // Append all internal elements to the secondary container
    secondaryContainer.appendChild(headerWrapper);
    secondaryContainer.appendChild(textList);
    secondaryContainer.appendChild(ctaButton);

    // Append main elements to main container
    container.appendChild(mainTitle);
    container.appendChild(secondaryContainer);

    // Append to body (or any other parent element you need)
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createContainer4);
} else {
    createContainer4();
}