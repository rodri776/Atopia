document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-bar a'); // Select all navigation links
    const slider = document.querySelector('.slider'); // The sliding indicator
    const navbar = document.querySelector('.nav-bar'); // Navbar container

    function moveSlider(targetLi) {
        if (!targetLi) return;

        const itemRect = targetLi.getBoundingClientRect();
        const navbarRect = navbar.getBoundingClientRect();

        const offset = itemRect.left - navbarRect.left + (itemRect.width / 2) - (slider.offsetWidth / 2);
        const width = itemRect.width * 1.35; // Increase width slightly for effect

        slider.style.left = `${offset}px`; // Center the slider
        slider.style.width = `${width}px`; // Adjust width
    }

    // Add initial positioning for the slider
    const initialActiveLink = document.querySelector('.nav-bar li.active');
    if (initialActiveLink) moveSlider(initialActiveLink);

    // Add event listeners to navigation links
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior

            // Remove the active class from all items
            document.querySelectorAll('.nav-bar li').forEach(item => item.classList.remove('active'));

            // Add the active class to the clicked item
            const parentLi = link.closest('li');
            parentLi.classList.add('active');

            // Move the slider to the clicked tab
            moveSlider(parentLi);
        });
    });

    // Resize event to reposition slider if window size changes
    window.addEventListener('resize', () => {
        const activeLi = document.querySelector('.nav-bar li.active');
        if (activeLi) moveSlider(activeLi);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    document.querySelector(".slider-btn.left").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    document.querySelector(".slider-btn.right").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});