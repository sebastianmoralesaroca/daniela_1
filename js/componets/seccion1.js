// Container2 component
function createContainer2() {
    console.log('Container2 component loaded');

    // Create container
    const container = document.createElement('div');
    container.className = 'container2';

    // Create left container
    const leftContainer = document.createElement('div');
    leftContainer.className = 'container2-left';

    // Create right container
    const rightContainer = document.createElement('div');
    rightContainer.className = 'container2-right';

    // Create title
    const title = document.createElement('h2');
    title.textContent = 'El Método para Sanar tus Vinculos y Experimentar una vida que amas';

    // Create paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Durante 10 semanas, te guiaré paso a paso para liberar las heridas que sabotean tus relaciones, elevar tu energía y construir una relación segura contigo misma. Aquí aprenderás a amarte, elegirte y crear ABSOLUTAMENTE TODO desde tu valor.';

    // Create CTA button
    const ctaButton = document.createElement('a');
    ctaButton.href = 'https://hotmart.com/es/marketplace/productos/programa-dichosa/S102895938F';
    ctaButton.textContent = '¡Quiero Sanar mis Vínculos!';
    ctaButton.className = 'container2-cta-button';

    // Append text elements to right container
    rightContainer.appendChild(title);
    rightContainer.appendChild(paragraph);
    rightContainer.appendChild(ctaButton);

    // Append containers to main container
    container.appendChild(leftContainer);
    container.appendChild(rightContainer);
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createContainer2);
} else {
    createContainer2();
}
