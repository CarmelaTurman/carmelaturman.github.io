document.addEventListener("DOMContentLoaded", () => {


  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach(acc => {
    acc.addEventListener("click", () => {
      acc.classList.toggle("active");
      const panel = acc.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.classList.remove("open");
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.classList.add("open");
      }
    });
  });

 
  const scrollBtn = document.createElement('button');
  scrollBtn.id = 'scrollTopBtn';
  scrollBtn.textContent = '↑';
  document.body.appendChild(scrollBtn);

  window.onscroll = function() {
    scrollBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? 'block' : 'none';
  };

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  const swatches = document.querySelectorAll('.swatch');
  swatches.forEach(s => {
    s.addEventListener('mouseover', () => s.style.transform = "scale(1.1)");
    s.addEventListener('mouseout', () => s.style.transform = "scale(1)");
  });

 
  const h1 = document.querySelector('main h1');
  if (h1) {
    h1.addEventListener('click', (e) => {
      for (let i = 0; i < 10; i++) {
        createSparkle(e.pageX, e.pageY);
      }
    });
  }

  function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = x + Math.random() * 20 - 10 + 'px';
    sparkle.style.top = y + Math.random() * 20 - 10 + 'px';
    sparkle.style.width = sparkle.style.height = 5 + Math.random() * 5 + 'px';
    sparkle.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }

 
  const navLinks = document.querySelectorAll('nav a');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navLinks.forEach((link, index) => {
      link.style.transform = `translateY(${Math.sin((scrollY / 50) + index) * 5}px)`;
    });
  });

});
