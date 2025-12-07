 
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

 
const yarnContainer = document.createElement('div');
yarnContainer.id = 'yarnContainer';
document.body.appendChild(yarnContainer);

const yarnBall = document.createElement('div');
yarnBall.classList.add('yarn-ball');
yarnContainer.appendChild(yarnBall);
