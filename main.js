document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.item').forEach((item) => {
        item.addEventListener('click', function() {
            let link = this.querySelector('.product-title');
            if (link) {
                window.open(link.href, '_blank');
            }
        });
    });
});
