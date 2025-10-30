// Seccion11 component - Newsletter
function createSeccion11() {
    console.log('Seccion11 component loaded');

    // Create main container
    const container = document.createElement('div');
    container.className = 'seccion11';

    // Create left container (for form)
    const leftContainer = document.createElement('div');
    leftContainer.className = 'seccion11-left';

    // Create title
    const title = document.createElement('h2');
    title.textContent = 'Suscríbete a nuestro Newsletter';
    title.className = 'seccion11-title';

    // Create subtitle
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Recibe contenido exclusivo, tips y recursos directamente en tu correo';
    subtitle.className = 'seccion11-subtitle';

    // Create form
    const form = document.createElement('form');
    form.className = 'seccion11-form';

    // Create name input group
    const nameGroup = document.createElement('div');
    nameGroup.className = 'seccion11-input-group';

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Nombre';
    nameLabel.className = 'seccion11-label';
    nameLabel.setAttribute('for', 'newsletter-name');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'newsletter-name';
    nameInput.name = 'name';
    nameInput.placeholder = 'Ingresa tu nombre';
    nameInput.className = 'seccion11-input';
    nameInput.required = true;

    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);

    // Create lastname input group
    const lastnameGroup = document.createElement('div');
    lastnameGroup.className = 'seccion11-input-group';

    const lastnameLabel = document.createElement('label');
    lastnameLabel.textContent = 'Apellido';
    lastnameLabel.className = 'seccion11-label';
    lastnameLabel.setAttribute('for', 'newsletter-lastname');

    const lastnameInput = document.createElement('input');
    lastnameInput.type = 'text';
    lastnameInput.id = 'newsletter-lastname';
    lastnameInput.name = 'lastname';
    lastnameInput.placeholder = 'Ingresa tu apellido';
    lastnameInput.className = 'seccion11-input';
    lastnameInput.required = true;

    lastnameGroup.appendChild(lastnameLabel);
    lastnameGroup.appendChild(lastnameInput);

    // Create email input group
    const emailGroup = document.createElement('div');
    emailGroup.className = 'seccion11-input-group';

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Correo Electrónico';
    emailLabel.className = 'seccion11-label';
    emailLabel.setAttribute('for', 'newsletter-email');

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'newsletter-email';
    emailInput.name = 'email';
    emailInput.placeholder = 'tu@email.com';
    emailInput.className = 'seccion11-input';
    emailInput.required = true;

    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);

    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Suscribirme';
    submitButton.className = 'seccion11-submit-button';

    // Add form submit event
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log('Form submitted:', {
            name: nameInput.value,
            lastname: lastnameInput.value,
            email: emailInput.value
        });
        alert('¡Gracias por suscribirte!');
        form.reset();
    });

    // Append inputs to form
    form.appendChild(nameGroup);
    form.appendChild(lastnameGroup);
    form.appendChild(emailGroup);
    form.appendChild(submitButton);

    // Append title, subtitle and form to left container
    leftContainer.appendChild(title);
    leftContainer.appendChild(subtitle);
    leftContainer.appendChild(form);

    // Create right container (for additional content or image)
    const rightContainer = document.createElement('div');
    rightContainer.className = 'seccion11-right';

    const rightContent = document.createElement('div');
    rightContent.className = 'seccion11-right-content';
    rightContent.innerHTML = '📧';

    rightContainer.appendChild(rightContent);

    // Append containers to main container
    container.appendChild(leftContainer);
    container.appendChild(rightContainer);

    // Append to body
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSeccion11);
} else {
    createSeccion11();
}
