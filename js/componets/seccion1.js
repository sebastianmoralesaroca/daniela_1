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
    paragraph.textContent = 'Durante 10 semanas, te guiaé paso a paso para liberar las heridas que sabotean tus relaciones, elevar tu energia y construir una relacion segura contigo misma. Aqui aprederas a amarte, elegirte y crear ABSOLUAMENTE TODO desde tu valor.';

    // Create CTA button
    const ctaButton = document.createElement('button');
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
