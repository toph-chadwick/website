function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function showModal(event) {
    event.preventDefault();
    document.getElementById('aboutModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('aboutModal').style.display = 'none';
}
