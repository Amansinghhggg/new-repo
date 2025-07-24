// Show an alert when the page loads
window.onload = function() {
    alert("Welcome to My Website!");
};

// Log a message when any navigation link is clicked
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        console.log('Navigation link clicked:', event.target.textContent);
    });
});