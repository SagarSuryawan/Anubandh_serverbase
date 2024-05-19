document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-image');
    const overlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    
    let currentIndex = 0;

    function showImage(index) {
        fullscreenImage.src = images[index].src;
        overlay.classList.add('show');
        currentIndex = index;
    }

    function hideOverlay() {
        overlay.classList.remove('show');
    }

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            showImage(index);
        });
    });

    close.addEventListener('click', hideOverlay);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            hideOverlay();
        }
    });

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });
});

