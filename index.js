// jQuery function to handle burger menu click
$(document).ready(function() {
    $('.burger-menu').on('click', function() {
        // Toggle the visibility of the navbar links
        $('.navbar-links').toggleClass('show');
        // Toggle the visibility of the burger menu icon
        $('.burger-menu').toggleClass('hide');
    });
});

// Function to close the navbar
function closeNavbar() {
    // Remove 'show' class to hide the navbar links
    $('.navbar-links').removeClass('show');
    // Remove 'show' class to hide the overlay (if applicable)
    $('.overlay').removeClass('show');
    // Remove 'hide' class to show the burger menu icon
    $('.burger-menu').removeClass('hide');
}

// JavaScript for typing and deleting text effect
document.addEventListener('DOMContentLoaded', function() {
    // Get the element where typing effect will be applied
    const textElement = document.getElementById('typing-text');
    // Array of text strings for typing effect
    const textArray = ["Welcome to Foodway!", "Variety of Cuisines!", "Fast & Reliable Service!"];
    // Index for tracking the current text string
    let index = 0;
    // Index for tracking the current character in the text string
    let charIndex = 0;

    // Function for typing text
    function typeText() {
        if (charIndex < textArray[index].length) {
            // Append the current character to the text element
            textElement.textContent += textArray[index].charAt(charIndex);
            charIndex++;

            // Set a fixed color during typing (blue)
            textElement.style.color = "#3498db";

            // Set the typing speed (adjust as needed)
            setTimeout(typeText, 100);
        } else {
            // Delay before deleting
            setTimeout(deleteText, 2000);
        }
    }

    // Function for deleting text
    function deleteText() {
        if (charIndex > 0) {
            // Remove the last character from the text element
            textElement.textContent = textArray[index].substring(0, charIndex - 1);
            charIndex--;

            // Set a fixed color during deletion (green)
            textElement.style.color = "#27ae60";

            // Set the deleting speed (adjust as needed)
            setTimeout(deleteText, 50);
        } else {
            // Move to the next text string in the array
            index = (index + 1) % textArray.length;
            // Delay before typing the next text
            setTimeout(typeText, 500);
        }
    }

    // Start the typing effect
    typeText();
});

// JavaScript for automated image gallery
document.addEventListener('DOMContentLoaded', function() {
    // Get the gallery track element
    const galleryTrack = document.getElementById('galleryTrack');
    // Get all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    // Total number of items (divided by 2 because each image is duplicated)
    const totalItems = galleryItems.length / 2;
    // Index for tracking the current position in the gallery
    let currentIndex = 1;

    // Function to move the gallery track
    function moveGallery() {
        const newPosition = -currentIndex * 33.33 + '%';
        // Translate the gallery track to the new position
        galleryTrack.style.transform = 'translateX(' + newPosition + ')';
    }

    // Function to move to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        // Move the gallery track to the next position
        moveGallery();
    }

    // Set an interval to change the slide every 3 seconds
    setInterval(nextSlide, 3000);
});
