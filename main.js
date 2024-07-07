document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");
    const links = document.querySelectorAll("nav ul li a");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("nav-active");
    });

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const section = document.querySelector(`#${this.dataset.section}`);
            document.querySelectorAll(".content").forEach(content => content.classList.remove("active"));
            section.classList.add("active");
            nav.classList.remove("nav-active");
        });
    });
});
