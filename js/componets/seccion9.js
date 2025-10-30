// Seccion9 component - Planes y precios
function createSeccion9() {
    console.log('Seccion9 component loaded');

    // Create main container
    const container = document.createElement('div');
    container.className = 'seccion9';

    // Create main title
    const mainTitle = document.createElement('h2');
    mainTitle.textContent = 'Elige tu Plan';
    mainTitle.className = 'seccion9-main-title';

    // Create subtitle
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Selecciona el plan que mejor se adapte a ti';
    subtitle.className = 'seccion9-subtitle';

    // Create plans container
    const plansContainer = document.createElement('div');
    plansContainer.className = 'seccion9-plans-container';

    // Array of plans
    const plans = [
        {
            name: 'Plan Básico',
            price: '$297',
            period: 'Pago único',
            features: [
                '8 sesiones en vivo de 90 minutos',
                'Workbook digital completo',
                'Acceso a grabaciones',
                'Material adicional incluido',
                'Soporte vía email'
            ],
            isPopular: false
        },
        {
            name: 'Plan Premium',
            price: '$497',
            period: 'Pago único',
            features: [
                'Todo lo del Plan Básico',
                'Acompañamiento personalizado vía WhatsApp',
                'Sesión 1:1 de transformación profunda',
                'Pack Meditaciones y Audios exclusivos',
                'Acceso a mini taller Grabado',
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
        ctaButton.textContent = plan.isPopular ? 'Elegir Premium' : 'Elegir Básico';

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
