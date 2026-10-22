document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    // Contact Form Validation & Confirmation
    const contactForm = document.getElementById("contact-form");
    const formMsg = document.getElementById("form-msg");

    if (contactForm && formMsg) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameInput = document.getElementById("name").value.trim();
            const emailInput = document.getElementById("email").value.trim();
            const messageInput = document.getElementById("message").value.trim();

            if (nameInput === "" || emailInput === "" || messageInput === "") {
                formMsg.textContent = "Please fill out all required fields.";
                formMsg.className = "";
                formMsg.style.backgroundColor = "#fee2e2";
                formMsg.style.color = "#991b1b";
                formMsg.style.display = "block";
                return;
            }

            formMsg.textContent = `Thank you, ${nameInput}! Your message has been received successfully.`;
            formMsg.className = "success";
            
            contactForm.reset();
        });
    }

    // Dynamic Footer Year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});