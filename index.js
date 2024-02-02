document.addEventListener('DOMContentLoaded', function () {
    const imageSlider = document.querySelector('.image-slider');
    const images = document.querySelectorAll('.image-slider img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Initial display
    showImage(currentIndex);

    // Set interval for automatic sliding
    setInterval(nextImage, 3000); // Change 3000 to the desired interval in milliseconds
});
