// const mobileMenu = document.getElementById('mobile-menu');
// const navLinks = document.querySelector('.nav-links');

// mobileMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active'); // 🔹 toggles animation for bars
});

