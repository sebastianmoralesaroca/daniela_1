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
    title.textContent = 'Inscribete';
    title.className = 'seccion11-title';

    // Create subtitle
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Recibe contenido exclusivo, tips y recursos directamente en tu correo';
    subtitle.className = 'seccion11-subtitle';

    // Create form
    const form = document.createElement('form');
    form.className = 'seccion11-form';
    form.id = 'newsletter-form';

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
    nameInput.name = 'firstName'; // Cambiado para Mailchimp
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
    lastnameInput.name = 'lastName'; // Cambiado para Mailchimp
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
    nameInput.name = 'email';
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

    // Add form submit event with Zapier integration
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Deshabilitar botón mientras se envía
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // Preparar datos para Zapier
        const formData = {
            firstName: nameInput.value,
            lastName: lastnameInput.value,
            email: emailInput.value,
            timestamp: new Date().toISOString(),
            source: 'Landing Page DICHOSA'
        };

        // IMPORTANTE: Reemplaza esta URL con la que te dio Zapier
        const zapierWebhookURL = 'https://hooks.zapier.com/hooks/catch/25286460/uslrfkh/';

        // Enviar datos a Zapier
        fetch(zapierWebhookURL, {
            method: 'POST',
            mode: 'no-cors', // Importante para evitar errores CORS
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(() => {
            // Con mode: 'no-cors', siempre llegará aquí
            alert('¡Gracias por suscribirte! 🎉\n\nTe hemos agregado a nuestra lista de Newsletter DICHOSA.');
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        })
        .finally(() => {
            // Rehabilitar botón
            submitButton.disabled = false;
            submitButton.textContent = 'Suscribirme';
        });
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