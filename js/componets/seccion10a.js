// Seccion10a component - Mensaje motivacional
function createSeccion10a() {
    console.log('Seccion10a component loaded');

    // Create main container
    const container = document.createElement('div');
    container.className = 'seccion10a';

    // Create content wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'seccion10a-content';

    // Create first paragraph
    const paragraph1 = document.createElement('p');
    paragraph1.className = 'seccion10a-text';
    paragraph1.textContent = 'Siempre lo has sabido.';

    // Create second paragraph
    const paragraph2 = document.createElement('p');
    paragraph2.className = 'seccion10a-text';
    paragraph2.textContent = 'Has intentado encajar en mundos que no fueron hechos para una mujer como tú: intensa, profunda, lúcida.';

    // Create third paragraph
    const paragraph3 = document.createElement('p');
    paragraph3.className = 'seccion10a-text';
    paragraph3.textContent = 'Has sostenido mucho, has entendido demasiado, y sin embargo… algo dentro sigue pidiendo verdad, paz y expansión real.';

    // Create highlighted paragraph with DICHOSA
    const paragraph4 = document.createElement('p');
    paragraph4.className = 'seccion10a-text seccion10a-highlight';
    paragraph4.innerHTML = '<strong>DICHOSA</strong> es ese espacio donde por fin puedes dejar de analizarte y comenzar a habitarte.';

    // Create fifth paragraph
    const paragraph5 = document.createElement('p');
    paragraph5.className = 'seccion10a-text';
    paragraph5.textContent = 'Aquí no venimos a arreglarte —porque no hay nada roto en ti—, sino a recordarte tu naturaleza creadora, a ordenar tu mundo interior, y a reconciliar el brillo de tu mente con la ternura de tu alma.';

    // Create sixth paragraph
    const paragraph6 = document.createElement('p');
    paragraph6.className = 'seccion10a-text seccion10a-emphasis';
    paragraph6.textContent = 'Este es tu momento.';

    // Create seventh paragraph
    const paragraph7 = document.createElement('p');
    paragraph7.className = 'seccion10a-text';
    paragraph7.textContent = 'No por impulso, sino por certeza.';

    // Create closing paragraph with flower emoji
    const paragraph8 = document.createElement('p');
    paragraph8.className = 'seccion10a-text seccion10a-closing';
    paragraph8.textContent = 'Porque ya sabes que no viniste a sobrevivir, sino a florecer. 🌸';

    // Create CTA button
    const ctaButton = document.createElement('a');
    ctaButton.href = '#'; // Replace with actual link
    ctaButton.className = 'seccion10a-cta-button';

    const buttonSpan = document.createElement('span');
    buttonSpan.textContent = 'Haz clic y entra a DICHOSA';
    ctaButton.appendChild(buttonSpan);

    // Append all elements to content wrapper
    contentWrapper.appendChild(paragraph1);
    contentWrapper.appendChild(paragraph2);
    contentWrapper.appendChild(paragraph3);
    contentWrapper.appendChild(paragraph4);
    contentWrapper.appendChild(paragraph5);
    contentWrapper.appendChild(paragraph6);
    contentWrapper.appendChild(paragraph7);
    contentWrapper.appendChild(paragraph8);
    contentWrapper.appendChild(ctaButton);

    // Append content wrapper to main container
    container.appendChild(contentWrapper);

    // Append to body
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSeccion10a);
} else {
    createSeccion10a();
}
