
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
    const panel = acc.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      createSparkles(panel);
    }
  });
});


function createSparkles(panel) {
  const sparkleCount = 20;
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    const x = (Math.random() - 0.5) * 200 + "px";
    const y = (Math.random() - 0.5) * 200 + "px";
    sparkle.style.setProperty("--x", x);
    sparkle.style.setProperty("--y", y);
    sparkle.style.backgroundColor = ["#ffd700", "#c2185b", "#00bfa5"][Math.floor(Math.random() * 3)];
    sparkle.style.top = Math.random() * panel.offsetHeight + "px";
    sparkle.style.left = Math.random() * panel.offsetWidth + "px";
    panel.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }
}


const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollTopBtn";
scrollBtn.textContent = "↑";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
