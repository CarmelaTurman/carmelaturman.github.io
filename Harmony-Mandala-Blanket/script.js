
function launchGlitter(count = 60) {
  const area = document.querySelector('.glitter-area');
  if (!area) return;

  for (let i = 0; i < count; i++) {
    const g = document.createElement('div');
    g.className = 'glitter';
    g.style.left = Math.random() * 100 + '%';
    g.style.animationDelay = (Math.random() * 6) + 's';
    g.style.animationDuration = (4 + Math.random() * 6) + 's';
    area.appendChild(g);

    
    setTimeout(() => area.removeChild(g), 10000);
  }
}


launchGlitter();
setInterval(() => launchGlitter(20), 2000); // continue adding sparkles

