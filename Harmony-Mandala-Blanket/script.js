
function launchGlitter(count = 80) {
  const area = document.querySelector('.glitter-area');
  if (!area) return;

  for (let i = 0; i < count; i++) {
    const g = document.createElement('div');
    g.className = 'glitter';
    g.style.left = Math.random() * 100 + '%';
    g.style.top = Math.random() * 100 + '%';
    g.style.animationDelay = (Math.random() * 6) + 's';
    g.style.animationDuration = (4 + Math.random() * 6) + 's';
    area.appendChild(g);

   
    setTimeout(() => area.removeChild(g), 10000);
  }
}


launchGlitter();
setInterval(() => launchGlitter(30), 2500);


function floatingOrbs(count = 20) {
  const area = document.querySelector('.glitter-area');
  if (!area) return;

  for (let i = 0; i < count; i++) {
    const orb = document.createElement('div');
    orb.className = 'glitter';
    orb.style.width = orb.style.height = (10 + Math.random()*10) + 'px';
    orb.style.left = Math.random() * 100 + '%';
    orb.style.top = Math.random() * 100 + '%';
    orb.style.background = `hsla(${Math.random()*360}, 80%, 70%, 0.6)`;
    orb.style.borderRadius = '50%';
    orb.style.animationDuration = (10 + Math.random()*10) + 's';
    area.appendChild(orb);

    setTimeout(() => area.removeChild(orb), 20000);
  }
}

floatingOrbs();
setInterval(() => floatingOrbs(10), 5000);
