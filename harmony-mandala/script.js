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
                    content.style.transform = "scaleY(0.8)";
                    content.style.transition = "transform 0.3s ease";
                    setTimeout(() => content.style.transform = "scaleY(1)", 10);
                } else {
                    content.style.transform = "scaleY(0.8)";
                    content.style.transition = "transform 0.3s ease";
                    setTimeout(() => content.style.display = "none", 300);
                }
            });
        }
    });


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

 
    const colorGradients = [
        "linear-gradient(45deg, #ff9a9e, #fad0c4)",
        "linear-gradient(45deg, #a1c4fd, #c2e9fb)",
        "linear-gradient(45deg, #d4fc79, #96e6a1)",
        "linear-gradient(45deg, #fbc2eb, #a6c1ee)",
        "linear-gradient(45deg, #fda085, #f6d365)",
        "linear-gradient(45deg, #84fab0, #8fd3f4)"
    ];
    roundBlocks.forEach((block, index) => {
        let gradientIndex = index % colorGradients.length;
        setInterval(() => {
            block.style.backgroundImage = colorGradients[gradientIndex];
            block.style.transition = "background-image 2s ease";
            gradientIndex = (gradientIndex + 1) % colorGradients.length;
        }, 7000 + index * 500);
    });


    const container = document.querySelector(".pattern-container");
    if (container) {
        const colors = ["#ff5f6d", "#ffc371", "#00f5d4", "#ff6f91", "#845ec2", "#ffd066"];
        setInterval(() => {
            const sparkle = document.createElement("div");
            const size = Math.random() * 10 + 5;
            sparkle.style.position = "absolute";
            sparkle.style.width = sparkle.style.height = `${size}px`;
            sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
            sparkle.style.borderRadius = "50%";
            sparkle.style.top = `${Math.random() * container.offsetHeight}px`;
            sparkle.style.left = `${Math.random() * container.offsetWidth}px`;
            sparkle.style.pointerEvents = "none";
            sparkle.style.opacity = "0";
            sparkle.style.transform = `scale(0)`;
            sparkle.style.transition = "opacity 0.8s ease, transform 0.8s ease, top 0.8s ease";

            container.appendChild(sparkle);

            requestAnimationFrame(() => {
                sparkle.style.opacity = "1";
                sparkle.style.transform = `scale(${Math.random() * 1 + 0.5})`;
                sparkle.style.top = `${parseFloat(sparkle.style.top) - 20}px`;
            });

            setTimeout(() => {
                sparkle.style.opacity = "0";
                sparkle.style.transform = "scale(0)";
                setTimeout(() => sparkle.remove(), 800);
            }, 800);
        }, 300); 
    }
});
