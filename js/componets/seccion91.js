// Seccion91 component - Testimonios
function createSeccion91() {
    console.log('Seccion91 component loaded - Testimonios');

    // Create main container
    const container = document.createElement('div');
    container.className = 'seccion91';

    // Create main title
    const mainTitle = document.createElement('h2');
    mainTitle.textContent = 'Lo que dicen las Mujeres que ya se eligieron';
    mainTitle.className = 'seccion91-main-title';

    // Create subtitle
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Historias reales de mujeres que decidieron cambiar su realidad.';
    subtitle.className = 'seccion91-subtitle';

    // Create testimonials container
    const testimonialsContainer = document.createElement('div');
    testimonialsContainer.className = 'seccion91-testimonials-container';

    // Array of testimonials
    const testimonials = [
        {
            name: 'Mónica Marengo Salas.',
            text: 'Hola chicas buenas tardes 😊 quería compartirles un poco de mi experiencia de estos días, estoy muy sorprendida por el nivel de esta mentoría la verdad, me di cuenta de que hace unos meses atrás estuve pagando terapia psicológica y no tuve ningún avancé y ahora con la mentoría que da Daniela siento que en verdad tengo progreso, además de impulsarme a indagar dentro de mi y tomar conciencia, algo que no había hecho nunca y que la psicóloga nunca logro, los ejercicios, la mentoría en si para mi ha sido muy fructuosa; Dani te agradezco de corazón 🙌🏽🙌🏽✨ espero que muchas mujeres tengan el agrado de toparse contigo ❤️ y las ayudes en su camino ✨',
            location: 'La Serena, chile'
        },
        {
            name: 'Jimena Estévez.',
            text: 'Dani es una mujer que acompaña a las mujeres a recuperar su valor personal, ella a través de sus sensibilidad, su experiencia y mucha empatía consigue dar herramientas muy profundas de una manera liviana, con mucha amorosidad, te ayuda a recuperar la autoestima, a recuperar las partes para volver a integrarnos y volver a nuestra esencia. Te das cuenta cuando ella habla con una autoridad y realmente como algo que lo tiene súper integrado, te das cuenta que no es un un discurso o una técnica aprendida. Me ha dado mucha claridad y mucha paz en mi proceso de sanación. Muchas gracias!',
            location: 'Argentina'
        },
        {
            name: 'Daniela',
            text: 'Hermosa, gracias por abrir este espacio. Este método para mí ha sido muy amoroso en el proceso de conocerme, he tomado muchos cursos sin embargo este se ha sentido muy ligero, rico y DICHOSO, incluso en el proceso de mirar heridas y dolores. Gracias por el viaje Dani, sigo transitando.',
            location: 'Australia'
        }
    ];

    // Create testimonial cards
    testimonials.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = 'seccion91-testimonial-card';

        // Quote icon
        const quoteIcon = document.createElement('div');
        quoteIcon.className = 'seccion91-quote-icon';
        quoteIcon.textContent = '"';

        // Testimonial text
        const text = document.createElement('p');
        text.className = 'seccion91-testimonial-text';
        text.textContent = testimonial.text;

        // Author info container
        const authorInfo = document.createElement('div');
        authorInfo.className = 'seccion91-author-info';

        // Author name
        const name = document.createElement('h4');
        name.className = 'seccion91-author-name';
        name.textContent = testimonial.name;

        // Author location
        const location = document.createElement('p');
        location.className = 'seccion91-author-location';
        location.textContent = testimonial.location;

        // Append author details
        authorInfo.appendChild(name);
        authorInfo.appendChild(location);

        // Append all to card
        card.appendChild(quoteIcon);
        card.appendChild(text);
        card.appendChild(authorInfo);

        testimonialsContainer.appendChild(card);
    });

    // Append elements to main container
    container.appendChild(mainTitle);
    container.appendChild(subtitle);
    container.appendChild(testimonialsContainer);

    // Append to body
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSeccion91);
} else {
    createSeccion91();
}
