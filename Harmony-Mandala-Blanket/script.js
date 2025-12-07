 
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
  document.querySelector('main section:last-child').appendChild(imgElement);
});
