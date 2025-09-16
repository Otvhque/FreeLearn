document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu');
    const leftBar = document.querySelector('.left');

    menuBtn.addEventListener('click', () => {
        leftBar.classList.toggle('collapsed');
    });
});