 

function createGlitter(num = 60) {
  for (let i = 0; i < num; i++) {
    const glitter = document.createElement('div');
    glitter.classList.add('glitter');

 
    glitter.style.left = Math.random() * window.innerWidth + 'px';
    glitter.style.top = Math.random() * window.innerHeight + 'px';

 
    const size = Math.random() * 3 + 2; // 2px - 5px
    glitter.style.width = size + 'px';
    glitter.style.height = size + 'px';

 
    glitter.style.opacity = Math.random() * 0.6 + 0.4;

 
    glitter.style.animationDuration = (Math.random() * 5 + 4) + 's';

 
    glitter.style.animationDelay = (Math.random() * 5) + 's';

    document.body.appendChild(glitter);

    // Respawn glitter after animation ends
    glitter.addEventListener('animationend', () => {
      glitter.remove();
      createGlitter(1); // respawn one new glitter
    });
  }
}

 
createGlitter();
