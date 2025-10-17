
const h1 = document.querySelector('main h1');

h1.addEventListener('click', (e) => {
    for (let i = 0; i < 10; i++) {
        createSparkle(e.pageX, e.pageY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = x + Math.random()*20 - 10 + 'px';
    sparkle.style.top = y + Math.random()*20 - 10 + 'px';
    sparkle.style.width = sparkle.style.height = 5 + Math.random()*5 + 'px';
    sparkle.style.background = `hsl(${Math.random()*360}, 80%, 60%)`;
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}


const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navLinks.forEach((link, index) => {
        link.style.transform = `translateY(${Math.sin((scrollY/50)+index)*5}px)`;
    });
});
