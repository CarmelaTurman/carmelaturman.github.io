 
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("You clicked a fun button!");
  });
});

 
const bgColors = [
  'linear-gradient(135deg, #ff66b2, #fff59d)',
  'linear-gradient(135deg, #ff99cc, #fff9b3)',
  'linear-gradient(135deg, #ff4da6, #fff0b3)',
];

document.querySelectorAll('.btn.change-bg').forEach(btn => {
  btn.addEventListener('click', () => {
    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    document.body.style.background = randomColor;
  });
});

 
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const opacity = Math.min(scrollY / maxScroll, 0.8);
  document.body.style.background = `linear-gradient(135deg, rgba(255,102,178,${1-opacity}), rgba(255,245,157,${1-opacity}))`;
});
