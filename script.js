// BROJAČI

const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const updateCounter = () => {

                const target = +counter.getAttribute('data-target');
                const current = +counter.innerText;

                const increment = target / 100;

                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCounter, 30);
                } else {
                    counter.innerText = target;
                }

            };

            updateCounter();

            observer.unobserve(counter);

        }

    });
});

counters.forEach(counter => {
    counter.innerText = "0";
    observer.observe(counter);
});


// GUMB ZA POVRATAK NA VRH

const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }

    });

    scrollBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// HAMBURGER IZBORNIK

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {

    navToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            navToggle.textContent = "✖";
        } else {
            navToggle.textContent = "☰";
        }

    });

}


// ZATVARANJE MENIJA NAKON KLIKA NA LINK

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        navToggle.textContent = "☰";

    });
});


// Lightbox galerija
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.dataset.large;
        lightboxImg.alt = img.alt;
    });
});

// Klikom izvan slike zatvori
lightbox.addEventListener('click', e => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});