
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
    // remove after a while to avoid too many DOM nodes
    setTimeout(() => {
      area.removeChild(g);
    }, 10000);
  }
}
launchGlitter();


function rainbowTextEffect() {
  const els = document.querySelectorAll('h1, h2, h3');
  els.forEach(el => {
    el.style.background = 'linear-gradient(90deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF, #9B5DE5)';
    el.style.backgroundClip = 'text';
    el.style.webkitBackgroundClip = 'text';
    el.style.color = 'transparent';
    el.style.animation = 'rainbowText 6s ease infinite';
  });
}

rainbowTextEffect();
