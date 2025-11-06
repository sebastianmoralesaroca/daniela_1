// Seccion6 component - Resultados a obtener
function createSeccion6() {
    console.log('Seccion6 component loaded');

    // Create main container
    const container = document.createElement('div');
    container.className = 'seccion6';

    // Create main title
    const mainTitle = document.createElement('h2');
    mainTitle.textContent = '💖 Resultados que vas a ver';
    mainTitle.className = 'seccion6-main-title';

    // Create subtitle
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Al finalizar DICHOSA:';
    subtitle.className = 'seccion6-subtitle';

    // Create results list
    const resultsList = document.createElement('ul');
    resultsList.className = 'seccion6-results-list';

    // Array of results
    const results = [
        'Te sentirás segura de ti misma, sin necesitar validación.',
        'Habrás aprendido a TRATARTE CON AMOR INCONDICIONAL.',
        'Tendrás relaciones y entornos que se ajusten a tus estándares, te sentirás vista, valorada, cuidada.',
        'Sabrás ponerte y poner límites con amor y sin culpa.',
        'Recuperarás la calma, el foco y la energía que antes dabas a otros.',
        'Volverás a sentirte libre, deseada y orgullosa por ser quién eres.',
        'Tu pasado ya no tendrá poder alguno sobre tí.',
        'Vas a verte en el espejo y verás a la mujer poderosa que siempre quisiste ser.',
        'Te sentirás estable interiormente cada día, a pesar de los movimientos del exterior y los tuyos propios.'
    ];

    // Create list items
    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result;
        listItem.className = 'seccion6-result-item';
        resultsList.appendChild(listItem);
    });

    // Append all elements to container
    container.appendChild(mainTitle);
    container.appendChild(subtitle);
    container.appendChild(resultsList);

    // Append to body
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSeccion6);
} else {
    createSeccion6();
}
