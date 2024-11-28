// Example of adding event listeners to buttons
const buttons = document.querySelectorAll('.content-text .buttons button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert(`You clicked: ${button.innerText}`);
    });
});

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function changeImage() {
    // Hide all images
    images.forEach((img) => {
        img.style.display = 'none';
    });

    // Show the next image in the sequence
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.display = 'block';
}

// Initialize carousel with the first image visible
changeImage();

// Change image every 7 seconds
setInterval(changeImage, 3000);
