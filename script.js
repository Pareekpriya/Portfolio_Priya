document.addEventListener("DOMContentLoaded", function () {
    // ======= MOBILE MENU TOGGLE =======
    const menuToggle = document.querySelector(".menu-toggle");
    const menuContainer = document.querySelector(".menu-container");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });

    });

    // ======= SMOOTH SCROLLING =======
    const smoothScrollLinks = document.querySelectorAll("a[href^='#']");

    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });


    // ======= BACK TO TOP BUTTON =======
    const scrollTopBtn = document.querySelector(".scroll-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
