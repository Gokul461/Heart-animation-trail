document.addEventListener("DOMContentLoaded", () => {
    const bodye1 = document.querySelector("body");

    bodye1.addEventListener("mousemove", (event) => {
        const xpos = event.offsetX; // X position relative to the target element
        const ypos = event.offsetY; // Y position relative to the target element
        
        const spane1 = document.createElement("span");
        spane1.style.left = xpos + "px";
        spane1.style.top = ypos + "px";
        
        const size = Math.random() * 100; // Random size between 0 and 100px
        spane1.style.width = size + "px";
        spane1.style.height = size + "px";

        spane1.classList.add('heart'); // Add a class for additional styling if needed

        bodye1.appendChild(spane1);

        setTimeout(() => {
            spane1.remove();
        }, 3000); // Remove the span after 3 seconds (3000 milliseconds)
    });
});
