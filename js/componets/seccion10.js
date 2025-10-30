// Seccion10 component - Preguntas frecuentes
function createSeccion10() {
    console.log('Seccion10 component loaded');

    // Create main container
    const container = document.createElement('div');
    container.className = 'seccion10';

    // Create main title
    const mainTitle = document.createElement('h2');
    mainTitle.textContent = 'Preguntas Frecuentes';
    mainTitle.className = 'seccion10-main-title';

    // Create FAQ container
    const faqContainer = document.createElement('div');
    faqContainer.className = 'seccion10-faq-container';

    // Array of FAQs
    const faqs = [
        {
            question: '¿Cuánto dura el programa DICHOSA?',
            answer: 'El programa tiene una duración de 2 meses, con 8 sesiones en vivo de 90 minutos cada una. Además, tendrás acceso a todas las grabaciones para que puedas repasar el contenido cuando lo necesites.'
        },
        {
            question: '¿Qué pasa si no puedo asistir a alguna sesión en vivo?',
            answer: 'No te preocupes. Todas las sesiones quedan grabadas y tendrás acceso ilimitado a ellas. Podrás verlas en el momento que mejor te convenga y avanzar a tu propio ritmo.'
        },
        {
            question: '¿Este programa es para mí si nunca he hecho terapia o trabajo personal?',
            answer: 'Absolutamente sí. DICHOSA está diseñado para mujeres en cualquier etapa de su proceso. No necesitas experiencia previa. Te guiaré paso a paso con ejercicios prácticos y herramientas aplicables desde el día uno.'
        },
        {
            question: '¿Cuál es la diferencia entre el Plan Básico y el Plan Premium?',
            answer: 'El Plan Básico incluye las 8 sesiones en vivo, workbook digital y acceso a grabaciones. El Plan Premium añade acompañamiento personalizado vía WhatsApp, sesión 1:1, meditaciones exclusivas, acceso a mini taller, comunidad privada y certificado de finalización.'
        }
    ];

    // Create FAQ items
    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'seccion10-faq-item';

        const questionButton = document.createElement('button');
        questionButton.className = 'seccion10-question';
        questionButton.textContent = faq.question;
        questionButton.setAttribute('aria-expanded', 'false');
        questionButton.setAttribute('data-index', index);

        const answerDiv = document.createElement('div');
        answerDiv.className = 'seccion10-answer';
        answerDiv.textContent = faq.answer;

        const iconSpan = document.createElement('span');
        iconSpan.className = 'seccion10-icon';
        iconSpan.textContent = '+';

        questionButton.appendChild(iconSpan);

        // Add click event to toggle answer
        questionButton.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Close all other items
            document.querySelectorAll('.seccion10-question').forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
                btn.querySelector('.seccion10-icon').textContent = '+';
                btn.parentElement.classList.remove('active');
            });

            // Toggle current item
            if (!isExpanded) {
                this.setAttribute('aria-expanded', 'true');
                this.querySelector('.seccion10-icon').textContent = '−';
                this.parentElement.classList.add('active');
            }
        });

        faqItem.appendChild(questionButton);
        faqItem.appendChild(answerDiv);
        faqContainer.appendChild(faqItem);
    });

    // Append elements to main container
    container.appendChild(mainTitle);
    container.appendChild(faqContainer);

    // Append to body
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSeccion10);
} else {
    createSeccion10();
}
