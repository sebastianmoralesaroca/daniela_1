// Seccion5 component - Qué incluye el plan
function createSeccion5() {
    console.log('Seccion5 component loaded');

    // Create main container
    const container = document.createElement('div');
    container.className = 'seccion5';

    // Create main title
    const mainTitle = document.createElement('h2');
    mainTitle.textContent = '¿Qué incluye el plan?';
    mainTitle.className = 'seccion5-main-title';

    // Create list container
    const listContainer = document.createElement('div');
    listContainer.className = 'seccion5-list-container';

    // Create unordered list
    const list = document.createElement('ul');
    list.className = 'seccion5-list';

    // Array of items included in the plan
    const planItems = [
        '8 sesiones en vivo de 90 minutos con Daniela, para trabajar juntas cada etapa del método.',
        'Workbook digital completo con ejercicios de introspección y herramientas prácticas.',
        'Acceso a grabaciones de todas las sesiones para repasar cuando necesites.',
        'Acompañamiento personalizado vía WhatsApp durante los 2 meses del proceso.',
        'Material adicional: meditaciones guiadas, audios de reprogramación y recursos descargables.',
        'Comunidad privada con otras mujeres en el mismo proceso (opcional).',
        'Certificado de finalización del método DICHOSA.'
    ];

    // Create list items
    planItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.className = 'seccion5-list-item';
        list.appendChild(listItem);
    });

    // Append list to list container
    listContainer.appendChild(list);

    // Append elements to main container
    container.appendChild(mainTitle);
    container.appendChild(listContainer);

    // Append to body
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSeccion5);
} else {
    createSeccion5();
}
