const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.querySelector('.hamburguer ').classList.toggle('dark');
    document.querySelector('.navbar').classList.toggle('dark');
    document.querySelector('.navbar p').classList.toggle('dark');
    document.querySelector('.navbar ul li').classList.toggle('dark');
    document.querySelector('.label').classList.toggle('dark');
    document.querySelector('.content').classList.toggle('dark');
    document.querySelector('.about h1').classList.toggle('dark');
    document.querySelector('.about p').classList.toggle('dark');
    document.querySelector('.about ').classList.toggle('dark');
    document.querySelector('.projetos ').classList.toggle('dark');
    document.querySelector('.todos h2').classList.toggle('dark');
    document.querySelector('.generalinformation p').classList.toggle('dark');
    document.querySelector('.footer').classList.toggle('dark');
    document.querySelector('.footer p').classList.toggle('dark');
    document.querySelector('.footer a').classList.toggle('dark');
    document.querySelector('.footer h2').classList.toggle('dark');
    document.querySelector('.footer h1').classList.toggle('dark');
    document.querySelector('.skills-container h2').classList.toggle('dark');
    document.querySelector('.skills-container p').classList.toggle('dark');
    document.querySelector('.skills-container ').classList.toggle('dark');
});
