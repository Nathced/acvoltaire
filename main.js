document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".content");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(`#${this.dataset.section}`);

            sections.forEach(section => {
                section.classList.remove("active");
            });

            targetSection.classList.add("active");
        });
    });
});
