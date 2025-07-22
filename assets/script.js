
document.querySelectorAll('ul a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});


document.addEventListener("DOMContentLoaded", () => {
    var typed = new Typed('.typed-text', {
        
        strings:['Software Developer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false
    });
});


function getProjects() {
    const projetos = document.querySelector('.aboutPro');   
    if (projetos) {
        projetos.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const projetos = document.querySelectorAll('.imagensprojetos');

    projetos.forEach(projeto => {
        projeto.addEventListener('mouseover', () => {
            const overlay = projeto.querySelector('.overlay');
            overlay.style.opacity = '1';
            overlay.style.pointerEvents = 'auto';
        });

        projeto.addEventListener('mouseout', () => {
            const overlay = projeto.querySelector('.overlay');
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
        });
    });
});

var deslizar = [
    document.getElementById('navbar'),
    document.getElementById('home'),
    document.getElementById('tech'),
    document.getElementById('sobre'),
    document.getElementById('projetos'),
    document.getElementById('footer')
];

ScrollReveal().reveal(deslizar, { 
    duration: 1000,
    origin: 'bottom',
    distance: '50px', 
    easing: 'ease-in-out', 
    reset: true 
});

const track = document.querySelector('.carousel-track');


const items = Array.from(track.children);
items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
});

