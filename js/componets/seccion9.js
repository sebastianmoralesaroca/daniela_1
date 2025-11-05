// Seccion9 component - Planes y precios
function createSeccion9() {
    console.log('Seccion9 component loaded');

    // Create main container
    const container = document.createElement('div');
    container.className = 'seccion9';

    // Create main title
    const mainTitle = document.createElement('h2');
    mainTitle.textContent = 'Plan de Transformación';
    mainTitle.className = 'seccion9-main-title';

    // Create subtitle
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Todo lo que necesitas para tu transformación personal';
    subtitle.className = 'seccion9-subtitle';

    // Create plans container
    const plansContainer = document.createElement('div');
    plansContainer.className = 'seccion9-plans-container';

    // Single plan
    const plans = [
        {
            name: 'Programa DICHOSA',
            price: '$387 USD',
            period: 'Pago único / Opcion de cuotas con credito',
            features: [
                '8 sesiones en vivo de 90 minutos con Daniela',
                'Sesión 1:1 de transformación profunda',
                'Acompañamiento personalizado vía WhatsApp (2 meses)',
                'Workbook digital completo + ejercicios prácticos',
                'Pack de meditaciones y audios exclusivos',
                'Acceso a todas las grabaciones',
                'Comunidad privada exclusiva',
                'Certificado de finalización'
            ],
            isPopular: true
        }
    ];

    // Create plan cards
    plans.forEach(plan => {
        const planCard = document.createElement('div');
        planCard.className = plan.isPopular ? 'seccion9-plan-card popular' : 'seccion9-plan-card';

        // Popular badge
        if (plan.isPopular) {
            const badge = document.createElement('div');
            badge.className = 'seccion9-popular-badge';
            badge.textContent = 'Más Popular';
            planCard.appendChild(badge);
        }

        // Plan name
        const planName = document.createElement('h3');
        planName.className = 'seccion9-plan-name';
        planName.textContent = plan.name;

        // Price
        const priceContainer = document.createElement('div');
        priceContainer.className = 'seccion9-price-container';

        const price = document.createElement('div');
        price.className = 'seccion9-price';
        price.textContent = plan.price;

        const period = document.createElement('div');
        period.className = 'seccion9-period';
        period.textContent = plan.period;

        priceContainer.appendChild(price);
        priceContainer.appendChild(period);

        // Features list
        const featuresList = document.createElement('ul');
        featuresList.className = 'seccion9-features-list';

        plan.features.forEach(feature => {
            const featureItem = document.createElement('li');
            featureItem.className = 'seccion9-feature-item';
            featureItem.textContent = feature;
            featuresList.appendChild(featureItem);
        });

        // CTA button
        const ctaButton = document.createElement('button');
        ctaButton.className = 'seccion9-cta-button';
        ctaButton.textContent = 'Comenzar mi Transformación';

        // Append all elements to card
        planCard.appendChild(planName);
        planCard.appendChild(priceContainer);
        planCard.appendChild(featuresList);
        planCard.appendChild(ctaButton);

        plansContainer.appendChild(planCard);
    });

    // Append elements to main container
    container.appendChild(mainTitle);
    container.appendChild(subtitle);
    container.appendChild(plansContainer);

    // Append to body
    document.body.appendChild(container);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSeccion9);
} else {
    createSeccion9();
}
