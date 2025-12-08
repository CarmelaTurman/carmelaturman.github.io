 
document.getElementById('funBtn').addEventListener('click', () => {
  alert("You clicked the fun button!");
});

document.getElementById('funBtn2').addEventListener('click', () => {
  const colors = [
    'linear-gradient(135deg, #ff66b2, #fff59d)',
    'linear-gradient(135deg, #ff99cc, #fff9b3)',
    'linear-gradient(135deg, #ff4da6, #fff0b3)',
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
});

 
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const opacity = Math.min(scrollY / maxScroll, 0.8);
  document.body.style.background = `linear-gradient(135deg, rgba(255,102,178,${1-opacity}), rgba(255,245,157,${1-opacity}))`;
});
