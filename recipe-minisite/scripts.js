

document.addEventListener("DOMContentLoaded", function () {

  const menuItems = document.querySelectorAll("nav ul.menu > li");

  menuItems.forEach((item) => {
    const submenu = item.querySelector(".submenu");


    if (submenu) {
      item.querySelector("a").addEventListener("click", function (e) {
     
        e.preventDefault();

      
        menuItems.forEach((otherItem) => {
          if (otherItem !== item) {
            const otherSub = otherItem.querySelector(".submenu");
            if (otherSub) otherSub.style.display = "none";
          }
        });

     
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }
      });
    }
  });


  document.addEventListener("click", function (e) {
    const nav = document.querySelector("nav");
    if (!nav.contains(e.target)) {
      menuItems.forEach((item) => {
        const submenu = item.querySelector(".submenu");
        if (submenu) submenu.style.display = "none";
      });
    }
  });

  
  function handleHover() {
    if (window.innerWidth >= 768) {
      menuItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          const submenu = item.querySelector(".submenu");
          if (submenu) submenu.style.display = "block";
        });
        item.addEventListener("mouseleave", () => {
          const submenu = item.querySelector(".submenu");
          if (submenu) submenu.style.display = "none";
        });
      });
    }
  }

  handleHover();
  window.addEventListener("resize", handleHover);
});
