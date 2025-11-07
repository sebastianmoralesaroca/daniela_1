// Footer component
function createFooter() {
    console.log('Footer component loaded');

    // Create footer element
    const footer = document.createElement('footer');
    footer.className = 'footer';

    // Create footer content container
    const footerContent = document.createElement('div');
    footerContent.className = 'footer-content';

    // LEFT SECTION: Title from header
    const leftSection = document.createElement('div');
    leftSection.className = 'footer-left';

    const footerTitle = document.createElement('h3');
    footerTitle.textContent = 'DICHOSA';
    footerTitle.className = 'footer-title';

    leftSection.appendChild(footerTitle);

    // CENTER SECTION: Social media (logo actual)
    const centerSection = document.createElement('div');
    centerSection.className = 'footer-center';

    const socialTitle = document.createElement('h3');
    socialTitle.textContent = 'Sígueme';
    socialTitle.className = 'footer-social-title';

    // Create Instagram link
    const instagramLink = document.createElement('a');
    instagramLink.href = 'https://instagram.com'; // Reemplaza con tu URL de Instagram
    instagramLink.target = '_blank';
    instagramLink.rel = 'noopener noreferrer';
    instagramLink.className = 'footer-social-link';
    instagramLink.setAttribute('aria-label', 'Instagram');

    const instagramIcon = document.createElement('img');
    instagramIcon.src = 'assets/instagram.svg';
    instagramIcon.alt = 'Instagram';
    instagramIcon.className = 'footer-social-icon';

    instagramLink.appendChild(instagramIcon);

    centerSection.appendChild(socialTitle);
    centerSection.appendChild(instagramLink);

    // RIGHT SECTION: Logo from header - Letter D
    const rightSection = document.createElement('div');
    rightSection.className = 'footer-right';

    const footerLogo = document.createElement('div');
    footerLogo.className = 'footer-logo';

    const logoLetter = document.createElement('span');
    logoLetter.textContent = 'D';
    logoLetter.className = 'footer-logo-letter';

    footerLogo.appendChild(logoLetter);
    rightSection.appendChild(footerLogo);

    // Append all sections to footer content
    footerContent.appendChild(leftSection);
    footerContent.appendChild(centerSection);
    footerContent.appendChild(rightSection);

    footer.appendChild(footerContent);

    // Append to body
    document.body.appendChild(footer);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFooter);
} else {
    createFooter();
}
