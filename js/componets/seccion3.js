// Container4 component
function createContainer4() {
    console.log('Container4 component loaded');

    // Create main container
    const container = document.createElement('div');
    container.className = 'container4';

    // Create main title
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = 'No eres tú. Es la identidad que te creaste, y que ya caducó';
    mainTitle.className = 'container4-main-title';

    // Create sections container
    const sectionsContainer = document.createElement('div');
    sectionsContainer.className = 'container4-sections';

    // Section 1: Título 1 + 2 párrafos
    const section1 = document.createElement('div');
    section1.className = 'container4-section';

    const title1 = document.createElement('h2');
    title1.textContent = '👁️‍🗨️ El problema Real';
    title1.className = 'container4-title';

    const p1_1 = document.createElement('p');
    p1_1.textContent = 'No necesitas más teoría, ni esperar que alguien cambie. Necesitas mirarte sin excusas, ver y hacerte cargo con liviandad de esos patrones que repites y elegir una vida en dónde tu Paz y tu Valor no se negocian.';
    p1_1.className = 'container4-paragraph';

    const p1_2 = document.createElement('p');
    p1_2.textContent = 'Si sigues experimentando vínculos que te hacen empequeñecer tu luz, tu potencia, tu grandeza, es porque hay todavía una parte de ti que cree que tiene que ganarse la presencia, la atención, el amor. Y tú sabes cómo ésto termina desgastándote, apagándote y alejándote de ti misma.';
    p1_2.className = 'container4-paragraph';

    section1.appendChild(title1);
    section1.appendChild(p1_1);
    section1.appendChild(p1_2);

    // Section 2: Título 2 + 3 párrafos
    const section2 = document.createElement('div');
    section2.className = 'container4-section';

    const title2 = document.createElement('h2');
    title2.textContent = '💫 La transformación';
    title2.className = 'container4-title';

    const p2_1 = document.createElement('p');
    p2_1.textContent = 'DICHOSA es un método de reordenamiento interno. Vas a pasar de estar sintiéndote insuficiente, sobrecargada y la eterna perseguidora de "la perfección", a transformarte en una mujer conectada contigo misma, con tus necesidades y tu valor. Dejarás de ser influenciable por los acontecimientos de la vida y aprenderás a estar presente para ti.';
    p2_1.className = 'container4-paragraph';

    const p2_2 = document.createElement('p');
    p2_2.textContent = 'Tu nueva identidad será la dicha y el gozo de vivir un éxito real y completo, sin perder tu Paz, ni tu esencia.';
    p2_2.className = 'container4-paragraph';

    const p2_3 = document.createElement('p');
    p2_3.textContent = '';
    p2_3.className = 'container4-paragraph';

    section2.appendChild(title2);
    section2.appendChild(p2_1);
    section2.appendChild(p2_2);
    section2.appendChild(p2_3);

    // Section 3: Título 3 + 7 párrafos
    const section3 = document.createElement('div');
    section3.className = 'container4-section';

    const title3 = document.createElement('h2');
    title3.textContent = '👑 Es para ti si...';
    title3.className = 'container4-title';

    const p3_1 = document.createElement('p');
    p3_1.textContent = '❌ Estás cansada de dar más de lo que recibes.';
    p3_1.className = 'container4-paragraph';

    const p3_2 = document.createElement('p');
    p3_2.textContent = '❌ Has intentado cambiar, pero sigues cayendo en los mismos vínculos vacíos.';
    p3_2.className = 'container4-paragraph';

    const p3_3 = document.createElement('p');
    p3_3.textContent = '❌ Te cuesta poner límites sin sentir culpa.';
    p3_3.className = 'container4-paragraph';

    const p3_4 = document.createElement('p');
    p3_4.textContent = '❌ Te comparas, dudas de ti o te adaptas demasiado por miedo a perder.';
    p3_4.className = 'container4-paragraph';

    const p3_5 = document.createElement('p');
    p3_5.textContent = '❌ Sabes que mereces más, pero no sabes cómo vivirlo en la práctica.';
    p3_5.className = 'container4-paragraph';

    const p3_6 = document.createElement('p');
    p3_6.textContent = '❌ Sabes en tu corazón que mereces más, pero no sabes por dónde comenzar a crearlo.';
    p3_6.className = 'container4-paragraph';

    const p3_7 = document.createElement('p');
    p3_7.textContent = '❌ Vives con una baja autoestima, camuflada de autosuficiencia y autoimagen, disfrazada de autosuficiencia y empoderamiento.';
    p3_7.className = 'container4-paragraph';

    section3.appendChild(title3);
    section3.appendChild(p3_1);
    section3.appendChild(p3_2);
    section3.appendChild(p3_3);
    section3.appendChild(p3_4);
    section3.appendChild(p3_5);
    section3.appendChild(p3_6);
    section3.appendChild(p3_7);

    // Append all sections to sections container
    sectionsContainer.appendChild(section1);
    sectionsContainer.appendChild(section2);
    sectionsContainer.appendChild(section3);

    // Append main title and sections container to main container
    container.appendChild(mainTitle);
    container.appendChild(sectionsContainer);

    // Append to body
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createContainer4);
} else {
    createContainer4();
}
