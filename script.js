document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to video thumbnail
    const videoThumbnail = document.getElementById('video-thumbnail');
    videoThumbnail.addEventListener('mouseover', () => {
        videoThumbnail.style.transform = 'scale(1.05)';
        videoThumbnail.style.transition = 'transform 0.3s';
    });
    videoThumbnail.addEventListener('mouseout', () => {
        videoThumbnail.style.transform = 'scale(1)';
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});
