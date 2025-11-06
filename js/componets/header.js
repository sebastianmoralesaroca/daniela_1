// Header component
function createHeader() {
    console.log('Header component loaded');

    // Create header element
    const header = document.createElement('header');

    // Create title (left side)
    const title = document.createElement('h1');
    title.textContent = 'DICHOSA';

    // Create logo (right side) - Letter D
    const logo = document.createElement('div');
    logo.className = 'logo';
    const logoLetter = document.createElement('span');
    logoLetter.textContent = 'D';
    logoLetter.className = 'logo-letter';
    logo.appendChild(logoLetter);

    // Append elements to header
    header.appendChild(title);
    header.appendChild(logo);

    // Insert header at the beginning of body
    document.body.insertBefore(header, document.body.firstChild);
}

// Execute when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createHeader);
} else {
    createHeader();
}
