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
        'Tendrás relaciones y entornos donde te sientes elegida, vista y cuidada.',
        'Sabrás ponerte y poner límites con amor y sin culpa.',
        'Recuperarás la calma, el foco y la energía que antes dabas a otros.',
        'Volverás a sentirte libre, deseada y orgullosa de quién eres.',
        'Tu pasado ya no tendrá poder sobre ti.',
        'Vas a verte en el espejo y verás a la mujer poderosa que siempre quisiste ser.',
        'Cada día te sentirás en calma y estable interiormente, a pesar de los movimientos del exterior y los tuyos propios.'
    ];

    // Create list items
    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result;
        listItem.className = 'seccion6-result-item';
        resultsList.appendChild(listItem);
    });

    // Create reflection text section
    const reflectionSection = document.createElement('div');
    reflectionSection.className = 'seccion6-reflection';

    const reflectionText1 = document.createElement('p');
    reflectionText1.textContent = 'Este es el punto donde la mayoría se queda: saben lo que merecen, pero no se atreven a elegirlo.';
    reflectionText1.className = 'seccion6-reflection-text';

    const reflectionText2 = document.createElement('p');
    reflectionText2.textContent = 'Si estás leyendo esto, no es casualidad. Es tu alma recordándote que ya no tienes que seguir esperando amor, paz, valoración, porque el amor y la plenitud se crea — y empieza contigo, dentro de tí.';
    reflectionText2.className = 'seccion6-reflection-text';

    const finalMessage = document.createElement('p');
    finalMessage.textContent = '🔥 DICHOSA no es un curso. Es un Reseteo de tu identidad, un verdadero antes y después. Un renacimiento. Una decisión. Tu decisión.';
    finalMessage.className = 'seccion6-final-message';

    reflectionSection.appendChild(reflectionText1);
    reflectionSection.appendChild(reflectionText2);
    reflectionSection.appendChild(finalMessage);

    // Create CTA button
    const ctaButton = document.createElement('button');
    ctaButton.textContent = 'Sí, quiero transformarme';
    ctaButton.className = 'seccion6-cta-button';

    // Append all elements to container
    container.appendChild(mainTitle);
    container.appendChild(subtitle);
    container.appendChild(resultsList);
    container.appendChild(reflectionSection);
    container.appendChild(ctaButton);

    // Append to body
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSeccion6);
} else {
    createSeccion6();
}
