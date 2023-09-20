// Tonggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});


// Ligthbox Image
// script.js
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close-button");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const triggers = document.querySelectorAll(".meny-card-img");
let currentIndex = 0;

function showImage(index) {
    const trigger = triggers[index];
    const imgSrc = trigger.getAttribute("src");
    lightboxImage.setAttribute("src", imgSrc);
    currentIndex = index;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % triggers.length;
    showImage(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + triggers.length) % triggers.length;
    showImage(currentIndex);
}

triggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
        showImage(index);
        lightbox.style.display = "block";
    });
});

closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
});

nextButton.addEventListener("click", showNextImage);

prevButton.addEventListener("click", showPrevImage);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
