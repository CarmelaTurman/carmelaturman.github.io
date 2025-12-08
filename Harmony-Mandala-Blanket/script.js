
document.getElementById('funBtn').addEventListener('click', () => {
  alert("You clicked the fun button!");
});

document.getElementById('funBtn2').addEventListener('click', () => {
  const colors = ['#ff4d4d', '#4dff4d', '#4d4dff', '#ffb84d', '#ff66cc', '#66ffff'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
