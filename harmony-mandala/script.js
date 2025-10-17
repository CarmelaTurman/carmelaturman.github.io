
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");

    const panel = acc.nextElementSibling;
    panel.classList.toggle("open");


    if(panel.classList.contains("open")) {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});


document.addEventListener("click", e => {

  if(e.target.id === "scrollTopBtn") return;

  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";

 
  sparkle.style.setProperty("--x", `${(Math.random() - 0.5) * 150}px`);
  sparkle.style.setProperty("--y", `${(Math.random() - 0.5) * 150}px`);

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 1000);
});


const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.innerHTML = "↑";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const swatches = document.querySelectorAll(".swatch");

swatches.forEach(swatch => {
  swatch.addEventListener("mouseenter", e => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    const rect = swatch.getBoundingClientRect();
    sparkle.style.left = rect.left + rect.width / 2 + "px";
    sparkle.style.top = rect.top + rect.height / 2 + window.scrollY + "px";

    sparkle.style.setProperty("--x", `${(Math.random() - 0.5) * 80}px`);
    sparkle.style.setProperty("--y", `${(Math.random() - 0.5) * 80}px`);

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
  });
});
