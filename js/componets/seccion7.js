// Seccion7 component - Punto de decisión
function createSeccion7() {
    console.log('Seccion7 component loaded');

    // Create main container
    const container = document.createElement('div');
    container.className = 'seccion7';

    // Create content wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'seccion7-content';

    // Create first paragraph
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Este es el punto donde la mayoría se queda: saben lo que merecen, pero no se atreven a elegirlo.';
    paragraph1.className = 'seccion7-paragraph highlight';

    // Create second paragraph
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Si estás leyendo esto, no es casualidad. Es tu alma recordándote que ya no tienes que seguir esperando amor, paz, valoración, porque el amor y la plenitud se crea — y empieza contigo, dentro de tí.';
    paragraph2.className = 'seccion7-paragraph';

    // Create final message
    const finalMessage = document.createElement('p');
    finalMessage.textContent = '🔥 DICHOSA no es un curso. Es un Reseteo de tu identidad, un verdadero antes y después. Un renacimiento. Una decisión. Tu decisión.';
    finalMessage.className = 'seccion7-final-message';

    // Create CTA button
    const ctaButton = document.createElement('button');
    ctaButton.textContent = 'Sí, elijo transformarme ahora';
    ctaButton.className = 'seccion7-cta-button';

    // Append all elements to content wrapper
    contentWrapper.appendChild(paragraph1);
    contentWrapper.appendChild(paragraph2);
    contentWrapper.appendChild(finalMessage);
    contentWrapper.appendChild(ctaButton);

    // Append content wrapper to container
    container.appendChild(contentWrapper);

    // Append to body
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSeccion7);
} else {
    createSeccion7();
}
