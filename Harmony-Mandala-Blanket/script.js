document.getElementById('mandalaBtn').addEventListener('click', () => {
  const mandalas = [
    'images/mandala1.png',
    'images/mandala2.png',
    'images/mandala3.png'
  ];

  const randomMandala = mandalas[Math.floor(Math.random() * mandalas.length)];
  const imgElement = document.createElement('img');
  imgElement.src = randomMandala;
  imgElement.alt = "New Mandala Pattern";
   
 imgElement.style.marginTop = '1rem';
  imgElement.style.border = '5px dotted #ff9a9e';
  imgElement.style.width = '150px';
  imgElement.style.height = '150px';
  imgElement.style.animation = 'popSpin 1s ease forwards';

 
  imgElement.style.boxShadow = '0 0 20px #fff, 0 0 40px #ff3cac, 0 0 60px #784ba0';

 
  const container = document.querySelector('main section:last-child');
  container.appendChild(imgElement);

 
  setTimeout(() => {
    imgElement.style.transition = 'opacity 1s ease';
    imgElement.style.opacity = '0';
    setTimeout(() => container.removeChild(imgElement), 1000);
  }, 5000);
});
