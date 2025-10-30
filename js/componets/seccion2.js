// Container3 component
function createContainer3() {
    console.log('Container3 component loaded');

    // Create main container
    const container = document.createElement('div');
    container.className = 'container3';

    // Create left container (40%)
    const leftContainer = document.createElement('div');
    leftContainer.className = 'container3-left';

    // Create right container (60%)
    const rightContainer = document.createElement('div');
    rightContainer.className = 'container3-right';

    // Create content wrapper (70% width)
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'container3-content-wrapper';

    // Create title
    const title = document.createElement('h2');
    title.textContent = 'Has trabajado en ti, lo sé.';
    title.className = 'container3-title';

    // Create text paragraph
    const text = document.createElement('p');
    text.textContent = 'Has intentado sanar, entender, soltar… pero sigues atrayendo relaciones donde terminas dando más de lo que recibes. Y aunque parezcas fuerte, exitosa, grandiosa… por dentro te sientes agotada, confundida y con la sensación de que el amor y el éxito siempre tienen un precio demasiado alto.';
    text.className = 'container3-text';

    // Append elements to content wrapper
    contentWrapper.appendChild(title);
    contentWrapper.appendChild(text);

    // Append content wrapper to right container
    rightContainer.appendChild(contentWrapper);

    // Append containers to main container
    container.appendChild(leftContainer);
    container.appendChild(rightContainer);

    // Append to body
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createContainer3);
} else {
    createContainer3();
}
