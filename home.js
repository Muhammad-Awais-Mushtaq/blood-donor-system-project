document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

    const carouselInner = document.querySelector('.carousel-inner');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    let currentIndex = 0;

    function updateCarousel() {
      const width = document.querySelector('.carousel').offsetWidth;
      carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;

      indicators.forEach((button, index) => {
        button.classList.toggle('active', index === currentIndex);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    function gotoSlide(index) {
      currentIndex = index;
      updateCarousel();
    }

    // Automatically move to the next slide every 3 seconds
    setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the interval (3000ms = 3 seconds) as needed

    // Update carousel size on window resize
    window.addEventListener('resize', updateCarousel);
    