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
            question: '¿Qué pasa si no puedo asistir a alguna sesión en vivo?',
            answer: 'No te preocupes. Todas las sesiones quedan grabadas y tendrás acceso por 3 meses a ellas. Podrás verlas en el momento que mejor te convenga y avanzar a tu propio ritmo.'
        },
        {
            question: '¿Cuánto tiempo necesito para ver resultados reales?',
            answer: 'Desde las primeras semanas comenzarás a sentir más claridad mental, calma emocional y liviandad interior, porque trabajamos con herramientas que reprograman tus hábitos, pensamientos y vínculos desde la raíz. El programa tiene una duración de 10 semanas, tiempo suficiente para redefinir tu autoconcepto, tu manera de relacionarte y tu forma de crear bienestar real sin exigencia ni sacrificio.'
        },
        {
            question: '¿Y si ya hice terapia, coaching o cursos de sanación antes?',
            answer: 'Perfecto 🌹 DICHOSA no repite lo que ya has escuchado: aquí aprenderás a integrar lo que sabes con tu cuerpo y tu vida real, vas a Alinearte. No se trata de "seguir sanando", sino de recordar quién eres y volver a habitarte con poder y amor propio, desde lo simple, que es lo que realmente TRANSFORMA. Muchas alumnas que han hecho otros procesos dicen: "por fin entendí cómo aplicar todo lo que aprendí, pero desde la paz."'
        },
        {
            question: 'No tengo mucho tiempo... ¿podré seguir el ritmo del programa?',
            answer: 'Sí, porque DICHOSA está diseñado para mujeres reales, con agendas llenas, responsabilidades y mil pendientes. No necesitas tener "tiempo libre": solo disposición a elegirte un poco cada día. Las clases y audios están pensados para acompañarte en tu vida cotidiana, y cada herramienta es aplicable en minutos, pero transforma desde la raíz. Recuerda: no se trata de hacer más, sino de hacer distinto —con presencia, conciencia y amor propio.'
        },
        {
            question: '¿Y si ahora no puedo invertir en mí?',
            answer: 'Entiendo totalmente 💛 también he estado ahí, sin embargo, quiero que te preguntes: ¿cuánto te está costando seguir sintiéndote igual? DICHOSA no es un gasto, es una decisión de devolver tu energía hacia ti, para construir una vida emocional y materialmente abundante. Además, tienes la posibilidad de pago mensual, porque creemos que el crecimiento no debería postergarse por miedo o escasez, de ser así ponte en contacto de forma personal desde mi Instagram. Ésta inversión será la más sabia que hagas: invertir en la mujer que sostendrá todo lo demás.'
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
