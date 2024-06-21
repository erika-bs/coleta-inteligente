document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const carouselPics = document.querySelector('.carouselPics');
    const imgs = document.querySelectorAll('.carouselPics img');
    const prevButton = document.querySelector('.prevButton');
    const nextButton = document.querySelector('.nextButton');
    let currentIndex = 0;
    const intervalTime = 3000; 
    let slideInterval; 

    
    function showImage(index) {
        const slideWidth = carousel.clientWidth;
        const translateValue = -index * slideWidth;

        carouselPics.style.transform = `translateX(${translateValue}px)`;
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex >= imgs.length) {
            currentIndex = 0; 
        }
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = imgs.length - 1; 
        }
        showImage(currentIndex);
    }

    prevButton.addEventListener('click', () => {
        clearInterval(slideInterval); 
        prevImage();
        startSlide();
    });

    nextButton.addEventListener('click', () => {
        clearInterval(slideInterval); 
        nextImage();
        startSlide(); 
    });

    
    function startSlide() {
        slideInterval = setInterval(() => {
            nextImage();
        }, intervalTime);
    }
    startSlide();
});


const hamburguerMenu = document.querySelector('.hamburguerMenu');
const offScreenMenu = document.querySelector(".off-screen-menu");
const closeIcon = document.querySelector(".close-icon");


hamburguerMenu.addEventListener("click", () => {
  hamburguerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
    hamburguerMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
});

const menuItems = document.querySelectorAll('.off-screen-menu ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburguerMenu.classList.remove("active");
            offScreenMenu.classList.remove("active");
        });
});