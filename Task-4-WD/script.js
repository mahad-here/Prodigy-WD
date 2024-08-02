document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Clear the form
    document.getElementById('contactForm').reset();
});
