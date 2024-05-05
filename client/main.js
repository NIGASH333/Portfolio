var typed = new Typed(".text", {
    strings: ["Python Developer", "Web Developer", "Tech Enthusiast"],
    typeSpeed: 10,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Check if the screen width is less than 768 pixels
if (screen.width < 626) {
    // Display the pop-up message
    alert("For optimal viewing, please switch to a desktop device.");
}

