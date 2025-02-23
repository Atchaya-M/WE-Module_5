
const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        const content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
            this.querySelector(".triangle").textContent = "▶"; 
        } else {
            content.style.display = "block";
            this.querySelector(".triangle").textContent = "▼"; 
        }
    });
}
