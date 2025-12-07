
const numGlitters = 60;
for (let i = 0; i < numGlitters; i++) {
  const glitter = document.createElement('div');
  glitter.classList.add('glitter');

  glitter.style.left = Math.random() * window.innerWidth + 'px';
  glitter.style.top = Math.random() * window.innerHeight + 'px';

  const size = Math.random() * 3 + 1;
  glitter.style.width = size + 'px';
  glitter.style.height = size + 'px';

  glitter.style.animationDuration = (Math.random() * 4 + 2) + 's';

  document.body.appendChild(glitter);
}

const menuButtons = document.querySelectorAll('.menu-btn');

menuButtons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 20px #fff, 0 0 30px #ff6b6b, 0 0 40px #ff3cac';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = '2px 4px 15px rgba(255, 99, 132, 0.5)';
  });
});

