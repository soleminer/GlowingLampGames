function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const title = document.createElement('h1');
    title.textContent = 'Web Games Collection';
    navbar.appendChild(title);

    const gameLinks = ['Tic Tac Toe', 'Snake', 'Memory'];
    gameLinks.forEach(game => {
        const link = document.createElement('a');
        link.href = `#${game.toLowerCase().replace(/\s+/g, '-')}`;
        link.textContent = game;
        navbar.appendChild(link);
    });

    document.body.prepend(navbar);
}

export default createNavbar;