 
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

 
const mandalas = [
  'images/mandala1.png',
  'images/mandala2.png',
  'images/mandala3.png'
];

 
function createFloatingMandala() {
  const imgElement = document.createElement('img');
  const randomMandala = mandalas[Math.floor(Math.random() * mandalas.length)];
  imgElement.src = randomMandala;
  imgElement.alt = 'Floating Mandala';

  // Small size
  imgElement.style.width = '60px';
  imgElement.style.height = '60px';
  imgElement.style.position = 'absolute';
  imgElement.style.left = Math.random() * window.innerWidth + 'px';
  imgElement.style.top = Math.random() * window.innerHeight + 'px';
  imgElement.style.pointerEvents = 'none'; // so it doesn’t block clicks
  imgElement.style.opacity = 0.8;
  imgElement.style.transition = 'transform 2s linear';

  document.body.appendChild(imgElement);

  // Animate movement
  function floatMandala() {
    imgElement.style.left = Math.random() * window.innerWidth + 'px';
    imgElement.style.top = Math.random() * window.innerHeight + 'px';
    imgElement.style.transform = `rotate(${Math.random() * 360}deg)`;
  }

  setInterval(floatMandala, 3000);  
}

// Create multiple floating mandalas
for (let i = 0; i < 10; i++) {
  createFloatingMandala();
}

 
const menuButtons = document.querySelectorAll('.navbar .btn');
menuButtons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 20px #fff, 0 0 30px #ff6b6b, 0 0 40px #ff3cac';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = '2px 4px 15px rgba(255, 99, 132, 0.5)';
  });
});
