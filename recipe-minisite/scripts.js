// scripts.js

document.addEventListener("DOMContentLoaded", function () {
  // Select all top-level menu items that have a submenu
  const menuItems = document.querySelectorAll("nav ul.menu > li");

  menuItems.forEach((item) => {
    const submenu = item.querySelector("ul.submenu");
    const link = item.querySelector("a");

    // Only add toggle for items that have a submenu
    if (submenu) {
      link.addEventListener("click", function (e) {
        // Prevent the link from navigating
        e.preventDefault();

        // Close any other open submenus
        menuItems.forEach((otherItem) => {
          const otherSubmenu = otherItem.querySelector("ul.submenu");
          if (otherSubmenu && otherSubmenu !== submenu) {
            otherSubmenu.style.display = "none";
          }
        });

        // Toggle the clicked submenu
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }
      });
    }
  });

  // Close submenus when clicking outside the menu
  document.addEventListener("click", function (e) {
    menuItems.forEach((item) => {
      const submenu = item.querySelector("ul.submenu");
      if (submenu && !item.contains(e.target)) {
        submenu.style.display = "none";
      }
    });
  });
});
