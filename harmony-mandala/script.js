
document.addEventListener("DOMContentLoaded", () => {

    
    const roundBlocks = document.querySelectorAll(".round-block");
    roundBlocks.forEach(block => {
        const heading = block.querySelector("h2");
        const content = block.querySelector(".content");
        if (content) {
            
            content.style.display = "block";

           
            heading.style.cursor = "pointer";
            heading.addEventListener("click", () => {
                if (content.style.display === "none") {
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }
            });
        }
    });

    // 2. Smooth scroll to round when clicking links (if any)
    const roundLinks = document.querySelectorAll("a[href^='#round']");
    roundLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

   
    roundBlocks.forEach((block, index) => {
        const colors = ["#ffe5ec", "#fff3e0", "#d0f4de", "#caf0f8", "#ffd6a5", "#f0efeb"];
        let colorIndex = index % colors.length;
        setInterval(() => {
            block.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        }, 8000 + index * 500); 
    });


    const container = document.querySelector(".pattern-container");
    if (container) {
        setInterval(() => {
            const sparkle = document.createElement("div");
            sparkle.style.position = "absolute";
            sparkle.style.width = sparkle.style.height = `${Math.random() * 8 + 4}px`;
            sparkle.style.background = "rgba(255,255,255,0.8)";
            sparkle.style.borderRadius = "50%";
            sparkle.style.top = `${Math.random() * container.offsetHeight}px`;
            sparkle.style.left = `${Math.random() * container.offsetWidth}px`;
            sparkle.style.pointerEvents = "none";
            sparkle.style.opacity = "0";
            sparkle.style.transition = "opacity 1s ease, transform 1s ease";
            container.appendChild(sparkle);

            
            requestAnimationFrame(() => {
                sparkle.style.opacity = "1";
                sparkle.style.transform = `translateY(-20px)`;
            });

            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }, 500); // every 0.5s
    }

});
