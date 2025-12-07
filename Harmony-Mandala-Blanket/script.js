 
function createGlitter(num = 80) {
  const colors = ['#ff94c2', '#ffe496', '#ffb6f0', '#a0f0ff', '#ffd1dc'];

  for (let i = 0; i < num; i++) {
    const glitter = document.createElement('div');
    glitter.classList.add('glitter');

    glitter.style.left = Math.random() * window.innerWidth + 'px';
    glitter.style.top = Math.random() * window.innerHeight + 'px';

    const size = Math.random() * 5 + 3;
    glitter.style.width = size + 'px';
    glitter.style.height = size + 'px';

    glitter.style.background = colors[Math.floor(Math.random() * colors.length)];
    glitter.style.opacity = Math.random() * 0.6 + 0.4;
    glitter.style.animationDuration = (Math.random() * 5 + 6) + 's';
    glitter.style.animationDelay = (Math.random() * 5) + 's';

    document.body.appendChild(glitter);

    glitter.addEventListener('animationend', () => {
      glitter.remove();
      createGlitter(1);
    });
  }
}
createGlitter();

 
function createYarnBall() {
  const container = document.getElementById('yarnContainer');

  const yarn = document.createElement('div');
  yarn.classList.add('yarn-ball');

  container.appendChild(yarn);

  // Spawn additional yarn balls at intervals
  setInterval(() => {
    const newYarn = yarn.cloneNode(true);
    container.appendChild(newYarn);

    setTimeout(() => newYarn.remove(), 8000);
  }, 4000);
}

createYarnBall();
