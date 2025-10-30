// Header component
function createHeader() {
    console.log('Header component loaded');

    // Create header element
    const header = document.createElement('header');

    // Create title (left side)
    const title = document.createElement('h1');
    title.textContent = 'DICHOSA';

    // Create logo (right side)
    const logo = document.createElement('div');
    logo.className = 'logo';
    const logoImg = document.createElement('img');
    logoImg.src = 'assets/imagen.png';
    logoImg.alt = 'Logo';
    logo.appendChild(logoImg);

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
