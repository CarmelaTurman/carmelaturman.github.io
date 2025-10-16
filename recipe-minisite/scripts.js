// scripts.js

document.addEventListener("DOMContentLoaded", function () {

  const menuItems = document.querySelectorAll("nav ul.menu > li");

  menuItems.forEach((item) => {
    const submenu = item.querySelector("ul.submenu");
    const link = item.querySelector("a");

   
    if (submenu) {
      link.addEventListener("click", function (e) {
      
        e.preventDefault();

        menuItems.forEach((otherItem) => {
          const otherSubmenu = otherItem.querySelector("ul.submenu");
          if (otherSubmenu && otherSubmenu !== submenu) {
            otherSubmenu.style.display = "none";
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
    menuItems.forEach((item) => {
      const submenu = item.querySelector("ul.submenu");
      if (submenu && !item.contains(e.target)) {
        submenu.style.display = "none";
      }
    });
  });
});
