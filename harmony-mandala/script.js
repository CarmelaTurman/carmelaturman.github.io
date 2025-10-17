
const accordions = document.querySelectorAll(".accordion");
accordions.forEach(acc => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
    const panel = acc.nextElementSibling;
    panel.classList.toggle("open");
  });
});


const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.innerHTML = "↑";
document.body.appendChild(scrollTopBtn);

window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));


document.addEventListener("click", e => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  sparkle.style.setProperty("--x", `${(Math.random() - 0.5) * 150}px`);
  sparkle.style.setProperty("--y", `${(Math.random() - 0.5) * 150}px`);
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});
