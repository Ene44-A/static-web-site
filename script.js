// URLs de las imágenes de fondo
const images = [
    'https://images.unsplash.com/photo-1608865413696-fb1e4220173f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1602305362475-17c5fd62d2e3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1549803170-5e0a2dde9137?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

// Elemento del hero
const hero = document.querySelector('.cover-hero');
let currentIndex = 0;

// Función para cambiar el fondo
function changeBackground() {
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeBackground, 5000);
changeBackground();

// Funcion para cambiar el color de la navbar
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 500) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-white');
        navbar.classList.replace('navbar-dark', 'navbar-light');
    } else {
        navbar.classList.remove('bg-white');
        navbar.classList.add('bg-transparent');
        navbar.classList.replace('navbar-light', 'navbar-dark');
    }
});

// Funcion para cambiar el texto del h1
document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const phrases = [
        "AMARRES DE AMOR",
        "Maestra llanera vidente",
        "Consulta para tu amarre de amor"
    ];
    let phraseIndex = 0;

    // Función para cambiar el texto del h1
    const changePhrase = () => {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        dynamicText.textContent = phrases[phraseIndex];
    };

    setInterval(changePhrase, 5000);
});

