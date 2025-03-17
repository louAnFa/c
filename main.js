document.querySelectorAll('.description-box').forEach((box) => {
    box.addEventListener('click', function() {
        // Toggle 'active' class to expand or collapse the description box
        this.classList.toggle('active');
        const price = this.querySelector('.price');
        price.style.display = this.classList.contains('active') ? 'block' : 'none';
    });
});
