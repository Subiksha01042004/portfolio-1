// Add your custom JavaScript code here
// Example: Smooth scrolling for anchor links
$(document).ready(function () {
    // Add smooth scrolling to all links with class 'nav-link'
    $(".navbar-nav a.nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Add your custom JavaScript code here
// Example: Display a message when the resume link is clicked
document.addEventListener('DOMContentLoaded', function () {
    const resumeLink = document.querySelector('#resume a');
    resumeLink.addEventListener('click', function () {
        alert('Resume download initiated. Check your downloads folder.');
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const cardImages = document.querySelectorAll('.card-img-top');

    cardImages.forEach(img => {
        img.addEventListener('mousemove', function (e) {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left; // X position within the element.
            const y = e.clientY - rect.top;  // Y position within the element.

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = (x - centerX) / 5;
            const deltaY = (centerY - y) / 5;

            img.style.transform = `scale(1.2) translate(${deltaX}px, ${deltaY}px)`;
        });

        img.addEventListener('mouseleave', function () {
            img.style.transform = 'scale(1) translate(0, 0)';
        });
    });
});
function openAssignment(pdfpath) {
    window.location.href = pdfPath; // Opens the PDF in a new tab
}
